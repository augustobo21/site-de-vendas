<?php

$con = mysqli_connect("localhost:3308","root","","loja");

// Receber o ID do produto a ser excluído
$produtoId = $_POST["produto_id"];

// Consulta SQL para excluir o produto
$sql = "DELETE FROM produtos WHERE id = $produtoId";

// Executa a consulta
$result = mysqli_query($con, $sql);

if ($result) {
    echo "Produto excluído com sucesso!";
} else {
    echo "Erro ao excluir o produto: " . mysqli_error($con);
}

mysqli_close($con);

?>
