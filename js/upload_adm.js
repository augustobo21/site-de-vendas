 /* async function enviar() {

    var form =  new FormData(document.getElementById("imagem").files);

    var dados = new FormData(form );

    var promise = await fetch("php/upload.php", {
        method: "POST",
        body: dados
    });

    var resposta = await promise.json();

    alert(resposta.status);

    dados.append("imagem", form[0]);

    fetch("php/upload.php", {
        method: "POST", 
        body: dados
    });

} */

async function enviarProduto() {
    var form = document.getElementById("imagem").files[0]; // Obtém o arquivo
    var nome = document.getElementById("nome").value; // Obtém o nome
    var valor = document.getElementById("valor").value; // Obtém o valor

    var dados = new FormData(); // Cria um novo FormData
    dados.append("imagem", form); // Adiciona a imagem ao FormData
    dados.append("nome", nome); // Adiciona o nome ao FormData
    dados.append("valor", valor); // Adiciona o valor ao FormData

    try {
        var promise = await fetch("php/upload.php", {
            method: "POST",
            body: dados
        });

        var resposta = await promise.json();

        alert(resposta.status);
    } catch (error) {
        console.error('Erro:', error);
    }
}
