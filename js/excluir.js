function excluirProduto() {
    var id_produto = document.getElementById("id_produto").value;

    // Verifica se o usuário digitou um ID válido
    if (id_produto === "" || isNaN(id_produto)) {
        alert("Por favor, digite um ID de produto válido.");
        return;
    }

    fetch('excluir.php', {
        method: 'POST',
        body: 'id_produto=' + id_produto,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Exibe a mensagem de sucesso ou erro
    });
}
