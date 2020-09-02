var i = 0;
var pedidos = [50];
var precoTotal = 2;
var listaPedidos = "";
var verif;
var pedidosCheck;

function reloadPage () {
    document.location.reload(true);
}



class pedido {
    constructor(produto, preco, quantidade) {
        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;
    }
};

function addpedido(idNome, idPreco, idQtd) {
    verif = 1;
    var nome = document.getElementById(idNome);
    var preco = document.getElementById(idPreco);
    var qtd = document.getElementById(idQtd);
    var precoFloat = preco.innerHTML;
    var quantidade = qtd.value;
    precoFloat = parseFloat(precoFloat);
    qtd.value = "";

    if (quantidade > 1) {
        precoFloat = precoFloat * quantidade;
    }


    pedidos[i] = new pedido(nome.innerHTML, precoFloat, quantidade);
    precoTotal += precoFloat;
    
    console.log(pedidos[i]);
    console.log(precoTotal);

    listaPedidos = `${listaPedidos} %0A ${pedidos[i].produto}, QTD: ${pedidos[i].quantidade}, Valor: *R$${pedidos[i].preco}* %0A`;

    i++;
    console.log(listaPedidos);

    var link = document.querySelector("a#wpp");
    link.setAttribute("href", `https://api.whatsapp.com/send?phone=5585986160705&text=Bom dia! Escolhi os seguintes produtos:%0A%0A ${listaPedidos} %0A%0A %0A%0A PREÇO TOTAL (R$2,00 ENTREGA): *R$${precoTotal}*`);

    link.setAttribute("target", "_blank");

    pedidosCheck = listaPedidos;

};


function confirmation() {

    if (verif === 1){
    document
            .querySelector("#display-confirmation")
            .classList
            .toggle("hide");
        
        
        var totalPrice = document.getElementById("precoTotal");
        totalPrice.innerHTML = precoTotal;
        var confirmationList = document.getElementById("confirmlist");
        confirmationList.innerHTML = listaPedidos;
        
        } else {
                alert("Selecione algum produto antes de continuar");
            }
        };