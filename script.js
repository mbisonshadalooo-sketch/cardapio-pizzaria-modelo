let pedido = [];

function addPedido(item) {
    pedido.push(item);
    alert("Item adicionado!");
}

function finalizarPedido() {

    if(pedido.length === 0){
        alert("Adicione pelo menos 1 item!");
        return;
    }

    let mensagem = "Olá, gostaria de pedir:%0A%0A";

    pedido.forEach(item => {
        mensagem += "- " + item + "%0A";
    });

    let numero = "5599999999999"; // TROCAR PELO NÚMERO DA PIZZARIA

    window.open(`https://wa.me/${numero}?text=${mensagem}`);
}
