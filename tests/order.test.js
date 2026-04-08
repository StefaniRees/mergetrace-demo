// tests/order.test.js
const { calcularTotal, aplicarDesconto, calcularFrete, aplicarDescontoProgressivo } = require("../src/order");

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

describe("aplicarDescontoProgressivo", () => {
  test("sem desconto para 5 itens ou menos", () => {
    const itens = [{ preco: 10, quantidade: 5 }];
    expect(aplicarDescontoProgressivo(itens)).toBe(50);
  });

  test("5% de desconto para mais de 5 itens", () => {
    const itens = [{ preco: 10, quantidade: 6 }];
    expect(aplicarDescontoProgressivo(itens)).toBeCloseTo(57);
  });

  test("10% de desconto para mais de 10 itens", () => {
    const itens = [{ preco: 10, quantidade: 11 }];
    expect(aplicarDescontoProgressivo(itens)).toBeCloseTo(99);
  });
});