window.onload = async function () {
    var resultado = await fetch("php/index.php", {
        method: "GET"
    });

    var dados = await resultado.json();
    console.log(dados);

    displayItems(dados);

    document.getElementById("searchBtn").addEventListener("click", function () {
        var searchTerm = document.getElementById("searchInput").value.toLowerCase();
        var filteredData = dados.filter(function (item) {
            return item.nome.toLowerCase().includes(searchTerm);
        });

        displayItems(filteredData);
    });
}

function displayItems(data) {
    document.getElementById("produtos").innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        var conteudo = `<form id='formulario'>
            <div class="card">
                <div class="imagem">
                    <img src="${data[i].imagem}"/>
                </div>
                <div class="info">
                    <div class="nome">
                        ${data[i].nome}
                    </div>
                    <div class="preco">
                        R$${data[i].preco}
                    </div>
                </div>
                <div class="botao">
                    <button type="button" class="button" onclick="adicionar(${data[i].idprodutos})">Adicionar ao carrinho</button>
                </div>
            </form>`;

        document.getElementById("produtos").innerHTML += conteudo;
    }
}



async function adicionar(id){
    var seg = new FormData();
    seg.append("idprodutos", id)
    
    var promise = await fetch("php/enviar.php",{
        method: "POST",
        body: seg
    });
    var res = await promise.json();
    console.log(res);
}











