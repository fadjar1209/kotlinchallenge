-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 01, 2021 at 05:08 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `challengekotlin`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` bigint(20) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `created_at`, `name`, `price`, `quantity`, `updated_at`) VALUES
('A0001', '2021-08-04 14:28:20', 'Apple Mac Book Pro 15 2021', 42000000, 120, '2021-08-19 14:19:14'),
('A0002', '2021-08-04 16:30:55', 'Iphone XR', 8500000, 80, '2021-08-19 14:53:06'),
('A0003', '2021-08-04 16:39:39', 'Iphone X', 7000000, 100, NULL),
('A0004', '2021-08-19 14:54:03', 'Iphone 7', 5500000, 25, '2021-09-01 10:03:19'),
('A0005', '2021-08-31 16:05:12', 'Airpods', 2500000, 120, '2021-08-31 16:05:27'),
('A0006', '2021-09-01 10:07:32', 'Ipad 10\"', 20000000, 50, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
