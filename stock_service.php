<?php
require 'db_config.php';

$stmt = $pdo->query('SELECT count FROM oil_count WHERE id = 1');
$row = $stmt->fetch();
echo $row['count'];
?>
