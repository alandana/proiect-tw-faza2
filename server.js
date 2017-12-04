var express = require("express")
var Sequelize = require("sequelize")


//conectare la baza de date
var sequelize = new Sequelize('mendeleydb', 'root', '', {
    dialect:'mysql',
    host:'localhost'
})

sequelize.authenticate().then(function(){
    console.log('Success')
})


var Folders = sequelize.define('folders', {
    name: Sequelize.STRING, 
    //timestamps: true,
    //updatedAt: false,
   // createdAt: 'createTimestamp'
     
})

var Documents = sequelize.define('documents', {
    folder_id: Sequelize.INTEGER,
    author: Sequelize.STRING,
    title: Sequelize.INTEGER,
    pages: Sequelize.INTEGER,
    publicationYear: Sequelize.INTEGER,
    publisher: Sequelize.STRING
})


Documents.belongsTo(Folders, {foreignKey: 'folder_id', targetKey: 'id'})


var app = express() 

app.use(express.static('public'))
app.use(express.json());       
//app.use(express.urlencoded()); 



//toate folderele 
app.get('/folders', function(request, response) {
    Folders.findAll().then(function(folders){
        response.status(200).send(folders)
    })
        
})

// preluare folder dupa id 
app.get('/folders/:id', function(request, response) {
    Folders.findOne({where: {id:request.params.id}}).then(function(folders) {
        if(folders) {
            response.status(200).send(folders)
        } else {
            response.status(404).send()
        }
    })
})


//creare folder nou 
app.post('/folders', function(request, response) {
    Folders.create(request.body).then(function(folder) {
        response.status(201).send(folder)
    })
})

 
app.put('/folders/:id', function(request, response) {
    Folders.findById(request.params.id).then(function(folder) {
        if(folder) {
            folder.update(request.body).then(function(folder){
                response.status(201).send(folder)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
}) 
app.delete('/folders/:id', function(request, response) {
    Folders.findById(request.params.id).then(function(folder) {
        if(folder) {
            folder.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


//pentru documents 
app.get('/documents', function(request, response) {
    Documents.findAll().then(
            function(documents) {
                response.status(200).send(documents)
            }
        )
})

 
app.get('/documents/:id', function(request, response) {
    Documents.findById(request.params.id).then(
            function(document){
            if(document){
                response.status(200).send(document)
            }
             else {
            response.status(404).send('Not found')
        }}
        )
})


app.post('/documents', function(request, response) {
   Documents.create(request.body).then(function(documents){
       response.status(201).send(documents)
   })
})

app.put('/documents/:id', function(request, response) {
    Documents.findById(request.params.id).then(function(documents) {
        if(documents) {
            documents.update(request.body).then(function(print){
                response.status(201).send(documents)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.delete('/documents/:id', function(request, response) {
    Documents.findById(request.params.id).then(function(documents) {
        if(documents) {
            documents.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})
 
app.get('/folders/:id/documents', function(request, response) {
    Documents.findAll({where:{folder_id: request.params.id}}).then(
            function(documents,folders)
            
            {
                if(folders){
            if(documents) {
                response.status(200).send(documents)
             }
            else{
            response.status(404).send('Not found');
        }}
        else{
             response.status(404).send('Not found');
        }
    }
        )
})

app.listen(8080)