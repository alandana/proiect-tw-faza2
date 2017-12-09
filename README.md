

# proiect-tw-faza2

mysql-ctl start


mysql -u root


source ~/workspace/proiect_faza2/sql/mendeleydb.sql



insert into folders(name) values ('Documente importante');

insert into folders(name) values ('Favorite');

insert into folders(name) values ('Personale');

insert into folders(name) values ('IT');

insert into folders(name) values ('Medicina');

insert into documents(folder_id,author,title,pages,publicationYear,publisher) values (2,'Chamblee T','Implementation of a Professional Portfolio',5,2015,'Journal of Pediatric Health Care');

insert into documents(folder_id,author,title,pages,publicationYear,publisher) values (3,'Skiena, S. ','What is Data Science?',25,2017,'The Data Science Design Manual');

insert into documents(folder_id,author,title,pages,publicationYear,publisher) values (5,'Lee J. ','Disaster Medicine',8,2000,'The Internet Journal of Disaster Medicine'); 

insert into documents(folder_id,author,title,pages,publicationYear,publisher) values (4,'Peixoto J','Programmable logic controller',7,2015,'Computer Science Technology');

insert into documents(folder_id,author,title,pages,publicationYear,publisher) values (1,'Fox Young','International Journal of Computer Science Issues',14,2010,'International Journal of Computer Science Issues');


---GET

   https://tw-faza2-dananeagu.c9users.io/folders (toate folderele)
   
   https://tw-faza2-dananeagu.c9users.io/folders/1 (folderul cu id 1)
   
   https://tw-faza2-dananeagu.c9users.io/folders/5/documents (toate documentele din folderul cu id 5)
   
   https://tw-faza2-dananeagu.c9users.io/documents (toate documentele)
   
   https://tw-faza2-dananeagu.c9users.io/documents/1 (documentul cu id 1)
   
   
---POST

   https://tw-faza2-dananeagu.c9users.io/folders 
   
   https://tw-faza2-dananeagu.c9users.io/documents 
   
   https://tw-faza2-dananeagu.c9users.io/documents/8
   
   
---PUT

   https://tw-faza2-dananeagu.c9users.io/folders/5
   
   https://tw-faza2-dananeagu.c9users.io/documents/1
   
---DELETE

   https://tw-faza2-dananeagu.c9users.io/documents/8
   
   https://tw-faza2-dananeagu.c9users.io/folders/2
