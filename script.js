const checkboxes = document.querySelectorAll("input[type=checkbox]");
const totalSpan = document.getElementById("total");

checkboxes.forEach(item => {
  item.addEventListener("change", calcularTotal);
});

function calcularTotal() {
  let total = 0;

  checkboxes.forEach(item => {
    if (item.checked) {
      total += parseFloat(item.dataset.preco);
    }
  });

  totalSpan.textContent = total;
}

function finalizarPedido() {
  let mensagem = "Olá, gostaria de fazer o pedido:%0A%0A";
  let total = 0;

  checkboxes.forEach(item => {
    if (item.checked) {
      mensagem += "🍕 " + item.value + "%0A";
      total += parseFloat(item.dataset.preco);
    }
  });

  mensagem += "%0ATotal: R$ " + total;

  const numero = "5599999999999"; // TROCAR PELO NUMERO DA PIZZARIA

  window.open(`https://wa.me/${numero}?text=${mensagem}`);
}
