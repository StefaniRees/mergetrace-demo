// src/payment.js

function validarCartao(numero) {
  const limpo = numero.replace(/\s/g, "");
  return /^\d{16}$/.test(limpo);
}

function calcularParcelas(total, parcelas) {
  if (parcelas < 1 || parcelas > 12) {
    throw new Error("Número de parcelas deve ser entre 1 e 12");
  }
  return parcelas <= 3 ? total / parcelas : (total * 1.02) / parcelas;
}

function calcularTaxa(metodo, valor) {
  if (metodo === "credito") return valor * 0.03;
  if (metodo === "boleto") return 3.5;
  return 0;
}

module.exports = { validarCartao, calcularParcelas, calcularTaxa };