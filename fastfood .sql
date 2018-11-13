-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 30, 2018 at 03:36 PM
-- Server version: 5.7.17-log
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fastfood`
--
CREATE DATABASE IF NOT EXISTS `fastfood` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `fastfood`;

-- --------------------------------------------------------

--
-- Table structure for table `circulation`
--

CREATE TABLE `circulation` (
  `cirId` int(11) NOT NULL,
  `Name` varchar(35) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `circulation`
--

INSERT INTO `circulation` (`cirId`, `Name`, `price`, `quantity`) VALUES
(107, 'ປາເຕດັ້ງເດີມ', 10000, 1),
(108, 'ປາເຕໝູສາມຊັ້ນ', 10000, 1),
(109, 'ເປບຊີ         ', 6000, 1),
(110, 'ເບີເກີ ໝູ', 12000, 1),
(111, 'ປາເຕດັ້ງເດີມ', 10000, 1),
(112, 'ສະໄປສປັ່ນ      ', 10000, 1),
(113, 'ປາເຕດັ້ງເດີມ', 10000, 1),
(114, 'ປາເຕທູນາ', 16000, 1),
(115, 'ນ້້ຳດື່ມກາຫົວເສືອ  ', 3000, 1),
(116, 'ປາເຕໝູສັບ', 10000, 1),
(117, 'ປາເຕທູນາ', 16000, 1),
(118, 'ປາເຕທູນາ', 16000, 1),
(119, 'ນ້ຳໝາກກ້້້ຽງ', 8000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `Emid` int(11) NOT NULL,
  `Emname` varchar(80) NOT NULL,
  `EmSEX` varchar(5) NOT NULL,
  `EmBirthdate` date NOT NULL,
  `Emtell` int(11) NOT NULL,
  `Emaddress` varchar(80) NOT NULL,
  `ID` varchar(32) NOT NULL,
  `position` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`Emid`, `Emname`, `EmSEX`, `EmBirthdate`, `Emtell`, `Emaddress`, `ID`, `position`) VALUES
(221, 'soukthave THAXANON', 'femal', '1998-03-27', 96363650, 'segame resident', '27031998', 'sales person'),
(222, 'hong', 'femal', '1997-07-12', 7764136, '', '2704', 'kuy');

-- --------------------------------------------------------

--
-- Table structure for table `oderdetail`
--

CREATE TABLE `oderdetail` (
  `quantity` int(11) DEFAULT NULL,
  `Emname` varchar(80) DEFAULT NULL,
  `proname` varchar(40) DEFAULT NULL,
  `proprice` int(11) DEFAULT NULL,
  `position` varchar(32) DEFAULT NULL,
  `oderId` int(11) NOT NULL,
  `allprices` int(11) NOT NULL,
  `pay` int(11) NOT NULL,
  `changemoney` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `orderid` int(11) NOT NULL,
  `Emid` int(11) NOT NULL,
  `totalpay` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `proId` int(11) NOT NULL,
  `proname` varchar(40) NOT NULL,
  `prototal` int(11) NOT NULL,
  `proprice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`proId`, `proname`, `prototal`, `proprice`) VALUES
(1, 'ເບີເກີ ໝູ', 0, 12000),
(2, 'ເບີເກີ ເບຄອນ', 0, 20000),
(3, 'ເບີເກີ ໄກ່ສະໄປສຊີ', 0, 20000),
(4, 'ເບີເກີ ບາບີຄິວໄກ່', 0, 25000),
(5, 'ເບີເກີ ທູນ່າສະໄປສຊີ', 0, 18000),
(6, 'ເບີເກີ ດັບເບິ້ນຊີດສ', 0, 18000),
(7, 'ເບີເກີປາ', 0, 12000),
(8, 'ເບີເກີ ດັບເບີ້ນສະແຕັກ', 0, 35000),
(9, 'ເບີເກີ ຮາວາອ້ຽນ', 0, 25000),
(10, 'ເບີເກີ ດັບເບີ້ນບາບີຄິວ', 0, 40000),
(11, 'ເບີເກີ ໝູຄຸໂລບູຕະ', 0, 40000),
(12, 'ເບີເກີ້ ດັບເບີ້ນຊິກເກັ່ນ', 0, 30000),
(13, 'ປາເຕດັ້ງເດີມ', 0, 10000),
(14, 'ປາເຕປູອັດ', 0, 10000),
(15, 'ປາເຕຊີ້ນງົວ', 0, 15000),
(16, 'ປາເຕໝູແຮມ', 0, 15000),
(17, 'ປາເຕປາກະປ໋ອງ', 0, 12000),
(18, 'ປາເຕໝູສາມຊັ້ນ', 0, 10000),
(19, 'ປາເຕເບຄອນ', 0, 15000),
(20, 'ປາເຕຊີ້ນແບ້', 0, 15000),
(21, 'ປາເຕໝູກອບ', 0, 12000),
(22, 'ປາເຕໄສ້ກອກຊີດສ', 0, 16000),
(23, 'ປາເຕໝູສັບ', 0, 10000),
(24, 'ປາເຕທູນາ', 0, 16000),
(25, 'ເປບຊີ         ', 0, 6000),
(26, 'ໂຄຄາໂຄລາ    ', 0, 6000),
(27, 'ສະໄປສ        ', 0, 6000),
(28, 'ເບຍລາວ      ', 0, 12000),
(29, 'ເປບຊີປັ່ນ      ', 0, 10000),
(30, 'ໂຄຄາໂຄລາປັ່ນ ', 0, 10000),
(31, 'ສະໄປສປັ່ນ      ', 0, 10000),
(32, 'ເບຍລາວປັ່ນ ', 0, 16000),
(33, 'ສະຕິງ', 0, 6000),
(34, 'ນ້ຳໝາກກ້ຽງ', 0, 8000),
(35, 'ນ້້ຳດື່ມກາຫົວເສືອ  ', 0, 3000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `circulation`
--
ALTER TABLE `circulation`
  ADD PRIMARY KEY (`cirId`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`Emid`);

--
-- Indexes for table `oderdetail`
--
ALTER TABLE `oderdetail`
  ADD PRIMARY KEY (`oderId`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`orderid`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`proId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `circulation`
--
ALTER TABLE `circulation`
  MODIFY `cirId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;
--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `Emid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=223;
--
-- AUTO_INCREMENT for table `oderdetail`
--
ALTER TABLE `oderdetail`
  MODIFY `oderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `orderid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `proId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
