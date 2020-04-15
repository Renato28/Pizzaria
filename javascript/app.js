
//incrementa
var botoesIncrementa = document.querySelectorAll(".btn-incrementa");

for(let botao of botoesIncrementa){

    botao.addEventListener('click', incrementa);

    function incrementa(){

    var item = botao.closest('.item');

    var input = item.querySelector(".quantidade");

    input.value++;

    var preco = pegaPrecoItem(item);

    adicionaAoTotal(preco);
    
    }
}

//decrementa
var botoesDecrementa = document.querySelectorAll(".btn-decrementa");

for(let botao of botoesDecrementa){

botao.addEventListener('click', decrementa);

function decrementa(){

    var item = botao.closest('.item');

    var inputQuantidade = item.querySelector('.quantidade');

    if(inputQuantidade.value > 0){

        inputQuantidade.value--;

        var precoItem = pegaPrecoItem(item);

        adicionaAoTotal(-precoItem);
    }
    else
    {

        console.log(inputQuantidade.value);
    }

  }  
}

var formPedido = document.forms.pedido;

formPedido.addEventListener('submit', function(event){

    var contador;

    var inputs = formPedido.querySelectorAll("input.quantidade");

    var contador = 0;
    for(let input of inputs){

        if(input.value > 0){

            contador++;
        }
    };

    if(contador == 0){

        alert("Deve ter pelo menos 1 pizza no pedido");
        event.preventDefault();
    }
});


//funções auxiliares
function pegaPrecoItem(item){

    var precoItem = item.querySelector('.preco-item');
    return Number(precoItem.textContent);
}

function adicionaAoTotal(valor){

    var elementoTotal = document.querySelector("#total");
    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}


