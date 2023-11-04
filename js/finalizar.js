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
            </div>`;
            var valores = parseFloat(dados[i].valor);

            soma = soma + valores;
         
         

    
     
         document.getElementById("produtos").innerHTML+=conteudo;
     
    }
    document.getElementById("soma").value = soma;
}


var aleatorio = Math. floor(Math. random() * (500000000000 - 100000000000 + 1)) + 100000000000


document.getElementById('pix').addEventListener('click', function() {
    document.getElementById('cartao_credito_inputs').style.display = 'none';
    document.getElementById('cartao_debito_inputs').style.display = 'none';
    document.getElementById('numero_pix').value = aleatorio;
    document.getElementById('PIXPAG').style.display = 'block';
    
});

document.getElementById('cartao_credito').addEventListener('click', function() {
    document.getElementById('cartao_credito_inputs').style.display = 'block';
    document.getElementById('cartao_debito_inputs').style.display = 'none';
    document.getElementById('PIXPAG').style.display = 'none';
});

document.getElementById('cartao_debito').addEventListener('click', function() {
    document.getElementById('cartao_credito_inputs').style.display = 'none';
    document.getElementById('cartao_debito_inputs').style.display = 'block';
    document.getElementById('PIXPAG').style.display = 'none';
});





function finalizar1(){
    var cpf_p = document.getElementById('cpf_comprador').value;
    if(cpf_p.length>0){


    fetch("php/finalizar.php",{
        method: "GET"
});

    }else{
        alert("Preencha todos os campos")
    }

}


function finalizar2(){
    var num_cd = document.getElementById('numero_cartao_debito').value;
    var cpf_d = document.getElementById('cpf_titular_debito').value;
    var cvv_d = document.getElementById('CVV_debito').value;
    if(cpf_d.length>0 && num_cd.length>0 && cvv_d.length>0 ){


    fetch("php/finalizar.php",{
        method: "GET"
});

    }else{
        alert("Preencha todos os campos")
    }

}


function finalizar3(){
    var num_cc = document.getElementById('numero_cartao').value;
    var cpf_c = document.getElementById('cpf_titular').value;
    var cvv_c = document.getElementById('CVV').value;
    var data = document.getElementById('data_validade').value;
    if(cpf_c.length>0 && num_cc.length>0 && cvv_c.length>0 && data.length>0){


    fetch("php/finalizar.php",{
        method: "GET"
});

    }else{
        alert("Preencha todos os campos")
    }

}