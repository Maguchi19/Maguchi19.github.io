<?php
require 'conexionBD.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $idProd = $_POST['idProd'];

    $sql = "DELETE FROM productos WHERE idProd = :idProd";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':idProd' => $idProd]);

    echo "Producto eliminado con éxito";
}
?>