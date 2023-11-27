-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 17, 2023 at 06:12 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lostandfound`
--

-- --------------------------------------------------------

--
-- Table structure for table `email`
--

CREATE TABLE `email` (
  `id` int(11) NOT NULL,
  `receiver` varchar(50) NOT NULL,
  `subject` varchar(80) NOT NULL,
  `text` varchar(500) NOT NULL,
  `dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `email`
--

INSERT INTO `email` (`id`, `receiver`, `subject`, `text`, `dt`) VALUES
(1, 'anushka979518@gmail.com', 'test mail from react', 'Hi Anuksha, How are you...!!', '2023-09-14 10:59:44'),
(2, 'anushka979518@gmail.com', 'test mail from react', 'Hi Anuksha, How are you...!!', '2023-09-14 11:18:05'),
(3, 'anushka979518@gmail.com', 'TESTBEST', 'this is text data<br/> sdsjdsk', '2023-09-14 12:14:47');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `mobno` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`id`, `name`, `mobno`, `email`, `message`) VALUES
(15, 'Shubham', '9713161487', 'shubham@mykss.in', 'this is test message'),
(16, 'Shubham', '9713161487', 'shubham@mykss.in', 'this is test message'),
(17, 'undefined', 'undefined', 'undefined', 'undefined'),
(18, 'undefined', 'undefined', 'undefined', 'undefined'),
(19, 'undefined', 'undefined', 'undefined', 'undefined'),
(20, 'undefined', 'undefined', 'undefined', 'undefined'),
(21, 'undefined', 'undefined', 'undefined', 'undefined'),
(22, 'undefined', 'undefined', 'undefined', 'undefined'),
(23, 'undefined', 'undefined', 'undefined', 'undefined'),
(24, 'undefined', 'undefined', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `feedback` varchar(500) NOT NULL,
  `topic` varchar(50) NOT NULL,
  `dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `email`, `feedback`, `topic`, `dt`) VALUES
(1, 'shubham@mykss.in', 'undefined', 'undefined', '2023-09-13 17:24:43'),
(2, 'shubham@mykss.in', 'test1', 'test', '2023-09-13 17:25:23'),
(3, 'shubham@mykss.in', 'best', 'undefined', '2023-09-14 09:08:24'),
(4, 'shubham@mykss.in', 'best ssssssssssss', 'undefined', '2023-09-14 09:29:54');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `utype` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `password`, `utype`) VALUES
(1, 'shubham@mykss.in', 'f2e69930aa22703748dce05280c9a21f', 'user'),
(2, 'admin@mykss.in', '7b49c0f715d62a15b443b4f0d098f664', 'admin'),
(4, 'abc@g.c', 'asasa', 'publicdata'),
(6, 'abc@g.cc', 'asas', 'publicdataproPicture1694238277483kss_logo-removebg-preview.png'),
(7, 'shubham1@mykss.in', 'f2e69930aa22703748dce05280c9a21f', 'user'),
(8, 'shubham2@mykss.in', 'f2e69930aa22703748dce05280c9a21f', 'user'),
(9, 'shubham3@mykss.in', 'f2e69930aa22703748dce05280c9a21f', 'user'),
(10, 'Shivam@mykss.in', 'f2e69930aa22703748dce05280c9a21f', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `lostmaterial`
--

CREATE TABLE `lostmaterial` (
  `id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `date` varchar(30) NOT NULL,
  `time` varchar(30) NOT NULL,
  `place` varchar(100) NOT NULL,
  `ecost` varchar(50) NOT NULL,
  `oemail` varchar(50) NOT NULL,
  `mstatus` varchar(10) NOT NULL,
  `fpersonname` varchar(50) NOT NULL,
  `fpersondetails` varchar(500) NOT NULL,
  `rewartstatus` varchar(10) NOT NULL,
  `rewarddetails` varchar(500) NOT NULL,
  `dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lostmaterial`
--

INSERT INTO `lostmaterial` (`id`, `name`, `category`, `date`, `time`, `place`, `ecost`, `oemail`, `mstatus`, `fpersonname`, `fpersondetails`, `rewartstatus`, `rewarddetails`, `dt`) VALUES
(1, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'shubham@mykss.in', 'Found', 'shubham', 'ckt', 'Found', 'ooosa sa', '2023-09-14 13:51:25'),
(2, 'Watch', '', '2023-12-31', '23:59', 'Chitrakoot', '1000', 'shubham@mykss.in', 'Found', 'Shivam', 'ssssss', 'yes', 'sssssssssssss', '2023-09-14 15:24:02');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `notification` varchar(200) NOT NULL,
  `dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `notification`, `dt`) VALUES
(3, 'undefined', '2023-09-13 09:37:31'),
(4, 'Your next class timming will be same', '2023-09-13 09:38:21'),
(5, 'Your next class timming will be same', '2023-09-13 09:52:23'),
(6, 'test', '2023-09-13 14:00:33');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `dob` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobno` varchar(15) NOT NULL,
  `course` varchar(35) NOT NULL,
  `address` varchar(500) NOT NULL,
  `pic_path` varchar(250) NOT NULL,
  `dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `name`, `gender`, `dob`, `email`, `mobno`, `course`, `address`, `pic_path`, `dt`) VALUES
(1, 'Shubham Mishra', 'male', '2023-12-02', 'shubham@mykss.in', '989898989898', 'abc', 'Sitapur CHitrakootttttttttt', '1694783792235admin logo.png', '2023-09-09 05:44:38'),
(3, '0', 'female', '2023-12-31', 'shubham1@mykss.in', '9713161487', 'M-TECT', 'dsd sadas sdsfsd', 'publicdataproPicture1694376203142shubham.jpg', '2023-09-10 20:03:23'),
(4, '0', 'female', '2023-12-31', 'shubham2@mykss.in', '9713161487', 'M-TECT', 'dsd sadas sdsfsd', 'publicdataproPicture1694376295049shubham.jpg', '2023-09-10 20:04:55'),
(5, '0', 'female', '2023-12-31', 'shubham3@mykss.in', '9713161487', 'M-TECT', 'dsd sadas sdsfsd', '1694376356449shubham.jpg', '2023-09-10 20:05:57'),
(6, '0', 'male', '2023-12-31', 'Shivam@mykss.in', '9713161487', '', 'CKR sdsdsdssdsdnjs dna jas ', '1694776562540368772924_2651986101606477_4123127738700874089_n.jpg', '2023-09-15 11:16:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `email`
--
ALTER TABLE `email`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `lostmaterial`
--
ALTER TABLE `lostmaterial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `email`
--
ALTER TABLE `email`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `lostmaterial`
--
ALTER TABLE `lostmaterial`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
