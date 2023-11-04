<?php
    $idlinha = $_POST['idprodutos'];



    $con = mysqli_connect("localhost:3308","root","","loja");
    $query = "INSERT INTO carrinho(imagem,nome,valor) (SELECT imagem,nome,preco FROM produtos WHERE idprodutos = $idlinha)";

    mysqli_query($con,$query);


    echo json_encode($idlinha);

?>