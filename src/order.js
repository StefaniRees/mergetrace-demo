// src/order.js

function calcularTotal(itens) {
  return itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
}

function aplicarDesconto(total, percentual) {
  if (percentual < 0 || percentual > 100) {
    throw new Error("Percentual deve estar entre 0 e 100");
  }
  return total * (1 - percentual / 100);
}

function calcularFrete(total, regiao) {
  if (regiao === "sul") return total >= 150 ? 0 : 15;
  if (regiao === "norte") return total >= 200 ? 0 : 25;
  return 20;
}

module.exports = { calcularTotal, aplicarDesconto, calcularFrete };