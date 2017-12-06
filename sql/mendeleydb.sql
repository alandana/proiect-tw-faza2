SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO"; 
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
CREATE DATABASE `mendeleydb` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `mendeleydb`;


-- stuctura tabelei folders
-- un folder o sa fie definit de un id si o denumire a acestuia
CREATE TABLE IF NOT EXISTS `folders` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp, 
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ; 

-- structura tabelei documents
CREATE TABLE IF NOT EXISTS `documents` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `folder_id` smallint(5) DEFAULT NULL,
  `author` varchar(60) DEFAULT NULL,
  `title` varchar(150) DEFAULT NULL,
  `pages`int, --numarul de pagini
  `publicationYear` int, --cand a aparut
  `publisher` varchar(100) DEFAULT NULL,--in ce publicatie a aparut
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id_documents` (`id`)
  FOREIGN KEY (`folder_id`) REFERENCES folders(`id`) ON DELETE CASCADE
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


