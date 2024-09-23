<?php
require 'conexionBD.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $precio = $_POST['precio'];
    $existencia = $_POST['existencia'];

    $sql = "INSERT INTO productos (Nombre, Precio, Existencia) VALUES (:nombre, :precio, :existencia)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':nombre' => $nombre,
        ':precio' => $precio,
        ':existencia' => $existencia
    ]);

    echo "Producto insertado con éxito";
}
?>