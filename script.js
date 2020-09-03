var i = 0;
var k = 0;
var pedidos = [50];
var dados = "";
var precoTotal = 2;
var listaPedidos = "";
var verif = 0;
var pedidosCheck;
var allRequests = "";

function reloadPage() {
    document.location.reload(true);
}



class pedido {
    constructor(produto, preco, quantidade, Unit, cliente, endereco, referencia, troco) {
        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;
        this.Unit = Unit;
       
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
    var unitPrice = precoFloat;
    qtd.value = "";

    if (quantidade >= 1) {
        precoFloat = precoFloat * quantidade;
    } else {
        alert("Mínimo: 1!")
    }


    pedidos[i] = new pedido(nome.innerHTML, precoFloat, quantidade, unitPrice);
    precoTotal += precoFloat;

    console.log(pedidos[i]);
    console.log(precoTotal);

    listaPedidos = `${listaPedidos}%0A%0A${pedidos[i].produto}%0AQTD: ${pedidos[i].quantidade}%0AValor Unit: R$${pedidos[i].Unit}%0AValor: *R$${pedidos[i].preco}*`;

    i++;
    console.log(listaPedidos);

    

    pedidosCheck = listaPedidos;


};


function HiddeConfirmButton() {
    document
            .querySelector("#confirm-button")
            .classList
            .add("hide")
}

function HiddeChangeInfo() {
    document
            .querySelector("#ChangeInfo")
            .classList
            .add("hideSend");

    document
            .querySelector("#confirm-button")
            .classList
            .remove("hide");

        document.getElementById("cliente").removeAttribute("disabled", "disabled");
        document.getElementById("endereco").removeAttribute("disabled", "disabled");
        document.getElementById("referencia").removeAttribute("disabled", "disabled");
        document.getElementById("troco").removeAttribute("disabled", "disabled");
}

function ShowSendButton() {
    document
            .querySelector("#wpp")
            .classList
            .remove("hideSend");

    document
            .querySelector("#ChangeInfo")
            .classList
            .remove("hideSend")
}



class PedidoDados {

    constructor (cliente, endereco, referencia, troco){
    this.cliente = cliente;
    this.endereco = endereco;
    this.referencia = referencia;
    this. troco = troco;
}
}


function DadosCliente(cliente, endereco, referencia, troco) {
    var IdCliente = document.getElementById(cliente);
    var NomeCliente = IdCliente.value;
    var IdEndereco = document.getElementById(endereco);
    var NomeEndereco = IdEndereco.value;
    var IdReferencia = document.getElementById(referencia);
    var NomeReferencia = IdReferencia.value;
    var IdTroco = document.getElementById(troco);
    var NomeTroco = IdTroco.value;

    if (NomeCliente != "" && NomeEndereco != "" && NomeReferencia != ""){
        if(NomeTroco > 0){
    ShowSendButton();
    HiddeConfirmButton();

        IdCliente.setAttribute("disabled", "disabled");
        IdEndereco.setAttribute("disabled", "disabled");
        IdReferencia.setAttribute("disabled", "disabled");
        IdTroco.setAttribute("disabled", "disabled");

    dados = new PedidoDados(NomeCliente, NomeEndereco, NomeReferencia, NomeTroco);
    console.log(dados);

    var link = document.querySelector("a#wpp");
    link.setAttribute("href", `https://api.whatsapp.com/send?phone=5585986160705&text=Olá, sou ${dados.cliente}! Escolhi os seguintes produtos:%0A%0A ${listaPedidos} 
    %0A%0A %0A%0APREÇO TOTAL (R$2,00 ENTREGA): *R$${precoTotal}*
    %0A%0ADesejo todos para entrega no seguinte endereço:%0A${dados.endereco}
    %0APonto de Referência: ${dados.referencia}. 
    %0APor favor, troco para: R$${dados.troco}`);

    link.setAttribute("target", "_blank");
    }else{ alert("Valores positivos")

}
}else {
        alert("Preencha todos os campos!")
    }
}




function confirmation() {



    if (verif === 1) {
        document
            .querySelector("#display-confirmation")
            .classList
            .toggle("hide");


        function hiddenHbar() {
            document
                .querySelector("#home")
                .classList
                .add("scrollHidden")
        };

        hiddenHbar();

        var totalPrice = document.getElementById("precoTotal");
        totalPrice.innerHTML = precoTotal;
        var confirmationList = document.getElementById("confirmlist");

        for (var o = 0; o < i; o++) {

            allRequests = `${pedidos[o].produto},
    
            QTD: ${pedidos[o].quantidade},
    
            Valor Unit: R$${pedidos[o].Unit}, 
    
            Valor: R$${pedidos[o].preco}`;

            var tagP = document.createElement("p");
            document.getElementById("confirmlist").appendChild(tagP);
            var request = document.createTextNode(allRequests);
            tagP.appendChild(request);

        };

    } else {
        alert("Selecione algum produto antes de continuar");
    }
};