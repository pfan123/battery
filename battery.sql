# ************************************************************
# Sequel Pro SQL dump
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1
# Database: battery
# Generation Time: 2018-03-04 11:13:50 +0000
# ************************************************************

# Dump of table user_info  用户管理
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_info`;

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `detail_info` longtext DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user_info` set name='admin', email='admin@example.com', nick='admin', password='123456';


# Dump of table sys_info  系统管理
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sys_info`;

CREATE TABLE `sys_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` longtext DEFAULT NULL,
  `keyword` longtext DEFAULT NULL,
  `detail` longtext DEFAULT NULL,
  `logo1` longtext DEFAULT NULL,
  `logo2` longtext DEFAULT NULL,
  `favicon` longtext DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `sys_info` set title='深圳绿行科技有限公司', keyword='电池、绿色、电动车', detail='深圳绿行科技有限公司，电池行业领导者';

# Dump of table products_info  产品中心
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products_info`;

CREATE TABLE `products_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` longtext DEFAULT NULL,
  `ftitle` longtext DEFAULT NULL,
  `category` longtext DEFAULT NULL,
  `fcategory` longtext DEFAULT NULL,  
  `abstract` longtext DEFAULT NULL,
  `fabstract` longtext DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `fcontent` longtext DEFAULT NULL,
  `link` longtext DEFAULT NULL,
  `price` longtext DEFAULT NULL,
  `src1` longtext DEFAULT NULL,
  `src2` longtext DEFAULT NULL,
  `src3` longtext DEFAULT NULL,
  `src4` longtext DEFAULT NULL,
  `src5` longtext DEFAULT NULL,
  `author` longtext DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `products_info` set title='深圳绿行科技有限公司', category='电动车电池', abstract='电池、绿色、电动车', content='深圳绿行科技有限公司，电池行业领导者';


# Dump of table sys_info  新闻中心
# ------------------------------------------------------------

DROP TABLE IF EXISTS `news_info`;

CREATE TABLE `news_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` longtext DEFAULT NULL,
  `ftitle` longtext DEFAULT NULL,
  `abstract` longtext DEFAULT NULL,
  `fabstract` longtext DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `fcontent` longtext DEFAULT NULL,
  `src` longtext DEFAULT NULL,
  `author` longtext DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `news_info` set title='深圳绿行科技有限公司', abstract='电池、绿色、电动车', content='深圳绿行科技有限公司，电池行业领导者';



# Dump of table sys_faq  常见问题
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sys_faq`;

CREATE TABLE `sys_faq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` longtext DEFAULT NULL,
  `ftitle` longtext DEFAULT NULL,
  `detail` longtext DEFAULT NULL,
  `fdetail` longtext DEFAULT NULL,
  `author` longtext DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `sys_faq` set title='深圳绿行科技有限公司', ftitle='电池、绿色、电动车', detail='深圳绿行科技有限公司，电池行业领导者';



# Dump of table sys_faq  常见问题
# ------------------------------------------------------------

DROP TABLE IF EXISTS `img_info`;

CREATE TABLE `img_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `src` longtext DEFAULT NULL,
  `tags` longtext DEFAULT NULL,
  `link` longtext DEFAULT NULL,
  `categroy` longtext DEFAULT NULL,
  `author` longtext DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `img_info` set categroy='首页', tags='电池、绿色、电动车';

