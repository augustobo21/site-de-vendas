<?php
    
    
    $con = mysqli_connect("localhost:3308","root","","loja");
    $query = "DELETE FROM carrinho";

    mysqli_query($con,$query);


?>