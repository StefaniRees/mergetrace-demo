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

module.exports = { validarCartao, calcularParcelas };