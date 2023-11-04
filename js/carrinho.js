window.onload =  async function () {
    var soma = 0
    var valores = 0

    var resultado = await fetch("php/carrinho.php", {
        method: "GET"
    });

    var dados = await resultado.json();
    

    for(var i = 0 ; i < dados.length; i++){
        var conteudo=

         `<div class="card">
                <div class="imagem">
                    <img src="${dados[i].imagem}"/>
                </div>
                <div class="info">
                    <div class="nome">
                        ${dados[i].nome}
                    </div>
                    <div class="preco">
                        R$${dados[i].valor}
                    </div>
                </div>
                <div class="botao">
                        <button class="button" onclick="excluir(${dados[i].idcarrinho})"> Excluir do Carrinho</button>
                </div>
            </div>`;
            var valores = parseFloat(dados[i].valor);

            soma = soma + valores;
         
         

    
     
         document.getElementById("produtos").innerHTML+=conteudo;
     
    }
    document.getElementById("soma").value = soma;
}

async function excluir(id){
    var seg = new FormData();
    seg.append("idcarrinho", id)
    
    var promise = await fetch("php/excarrinho.php",{
        method: "POST",
        body: seg
    });
    var res = await promise.json();
    console.log(res);
}











