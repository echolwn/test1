-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-12-22 10:06:48
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(2, '搞笑', '无心法师1', 'img/2.jpg', '2016-12-02 00:00:00', '娱乐新天地'),
(6, '女人', 'iukl', '8i8i', '2016-12-09 00:00:00', 'iki'),
(7, '军事', 'iukl', '8i8i', '2016-12-09 00:00:00', 'iki'),
(8, '社会', 'iukl', '8i8i', '2016-12-09 00:00:00', 'iki'),
(9, '娱乐', 'iukl', '8i8i', '2016-12-09 00:00:00', 'iki'),
(10, '本地', '4rt5', 'thtr', '2016-12-17 00:00:00', 'tgetr'),
(11, '本地', '而刚好突然', 'regret', '2016-12-18 00:00:00', '而刚好突然'),
(12, '精选', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(13, '图片', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(14, '精选', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(15, '百家', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(16, '百家', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(17, '互联网', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(18, '精选', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(19, '精选', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(20, '精选', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
