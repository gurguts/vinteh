<?php
$host = 'localhost';
$db = 'vintehco_oil_count';
$user = 'vintehco_oil_count_user';
$pass = 'qy&+UP-XQn9t';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
  $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {

  throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
