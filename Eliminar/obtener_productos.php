<?php
require 'conexionBD.php';

$sql = "SELECT * FROM productos";
$stmt = $pdo->query($sql);

$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($productos);
?>