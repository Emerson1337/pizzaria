var i = 0;
var pedidos = [50];
var precoTotal = 0;
var listaPedidos = "Bom dia! Escolhi os seguintes produtos: ";


class pedido {
    constructor(produto, preco, quantidade) {
        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;
    }
};

function addpedido(idNome, idPreco, idQtd) {
    var nome = document.getElementById(idNome);
    var preco = document.getElementById(idPreco);
    var qtd = document.getElementById(idQtd);
    var precoFloat = preco.innerHTML;
    var quantidade = qtd.value;
    precoFloat = parseFloat(precoFloat);

    if (quantidade > 1) {
        precoFloat = precoFloat * quantidade;
    }


    pedidos[i] = new pedido(nome.innerHTML, precoFloat, quantidade);
    precoTotal += precoFloat;

    console.log(pedidos[i]);
    console.log(precoTotal);

    listaPedidos = `${listaPedidos}
    



     *${pedidos[i].produto}* (Qtd: ${pedidos[i].quantidade}) => *R$${pedidos[i].preco}*  
    
    

    `;

    i++;
    console.log(listaPedidos);

    var link = document.querySelector("a#wpp");
    link.setAttribute("href", `https://api.whatsapp.com/send?phone=5585986160705&text=${listaPedidos} 

    PREÇO TOTAL:R$${precoTotal}`);

    link.setAttribute("target", "_blank");



};
