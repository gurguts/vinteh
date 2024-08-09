<?php
require 'db_config.php';

$url = "https://api.keepincrm.com/v1/materials/13407580";
$headers = [
  "X-Auth-Token: jndk8vhKszwCR9AGHoFaEd5M",
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);

if (curl_errno($ch)) {
  throw new Exception(curl_error($ch));
}

curl_close($ch);

$data = json_decode($response, true);

if (json_last_error() !== JSON_ERROR_NONE) {
  throw new Exception('Ошибка декодирования JSON: ' . json_last_error_msg());
}

$available = -1*$data['available'];

  $sql = "UPDATE oil_count SET count = $available WHERE id = 1";
  $pdo->exec($sql);
?>
