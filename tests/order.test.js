// tests/order.test.js
const { calcularTotal, aplicarDesconto, calcularFrete } = require("../src/order");

describe("calcularTotal", () => {
  test("calcula total simples corretamente", () => {
    const itens = [
      { preco: 50, quantidade: 2 },
      { preco: 30, quantidade: 1 },
    ];
    expect(calcularTotal(itens)).toBe(130);
  });
});

describe("aplicarDesconto", () => {
  test("aplica desconto de 10% corretamente", () => {
    expect(aplicarDesconto(100, 10)).toBe(90);
  });

  test("lança erro para percentual inválido", () => {
    expect(() => aplicarDesconto(100, 110)).toThrow();
  });
});

describe("calcularFrete", () => {
  test("frete grátis no sul acima de R$150", () => {
    expect(calcularFrete(200, "sul")).toBe(0);
  });

  test("frete cobrado no sul abaixo de R$150", () => {
    expect(calcularFrete(100, "sul")).toBe(15);
  });

  test("frete norte grátis acima de R$200", () => {
    expect(calcularFrete(250, "norte")).toBe(0);
  });

  test("frete norte cobrado abaixo de R$200", () => {
    expect(calcularFrete(100, "norte")).toBe(25);
  });

  test("frete padrão para outras regiões", () => {
    expect(calcularFrete(100, "sudeste")).toBe(20);
  });
});