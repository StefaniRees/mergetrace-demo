// tests/payment.test.js
const { validarCartao, calcularParcelas } = require("../src/payment");

describe("validarCartao", () => {
  test("aceita cartão com 16 dígitos", () => {
    expect(validarCartao("1234 5678 9012 3456")).toBe(true);
  });

  test("rejeita cartão inválido", () => {
    expect(validarCartao("1234")).toBe(false);
  });
});

describe("calcularParcelas", () => {
  test("3x sem juros", () => {
    expect(calcularParcelas(300, 3)).toBeCloseTo(100);
  });

  test("6x com juros de 2%", () => {
    expect(calcularParcelas(300, 6)).toBeCloseTo(51, 0);
  });
});