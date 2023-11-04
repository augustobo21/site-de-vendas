<?php

    $nome = $_POST["nome"];
    $valor = $_POST["valor"];
    $arquivo = $_FILES["imagem"];

    ##if($arquivo["type"] == "imagem/png"){

   ## }

    $qtde = strlen($nome);

    $resposta["status"] = "ok";
    $resposta["mensagem"] = " o tamanho é:".$qtde;

    $json = json_encode($resposta);

    echo $json;

    $novo_arquivo = "../imgsite/".$arquivo["name"];

    move_uploaded_file($arquivo["tmp_name"], $novo_arquivo);



?>