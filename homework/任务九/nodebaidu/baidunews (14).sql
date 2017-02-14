-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-01-13 15:26:46
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
(12, '精选', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(13, '图片', '无心法师2', '2.jpg', '2016-12-10 00:00:00', '娱乐天地'),
(14, '精选', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(15, '百家', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(16, '百家', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(17, '互联网', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(18, '精选', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(19, '精选', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(20, '精选', '无心法师2', 'img/2.jpg', '2016-12-11 00:00:00', '娱乐天地'),
(21, '图片', ' 通阿达是否', '第三方', '2017-01-01 00:00:00', '的所发生的v'),
(23, '本地', '5453', ' 溶液', '2017-01-19 00:00:00', '热人'),
(24, '军事', '5453', ' 溶液', '2017-01-20 00:00:00', '热'),
(25, '女人', '5453', ' 溶液', '2017-01-20 00:00:00', '热'),
(26, '社会', '5453', ' 溶液', '2017-01-20 00:00:00', '热'),
(27, '搞笑', '5453', ' 溶液', '2017-01-20 00:00:00', '热');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
