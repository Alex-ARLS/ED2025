const { inverte } = require("../src/Quest01");

test("Inverte uma palavra corretamente", () => {
  expect(inverte("ABACAXI")).toBe("IXACABA");
  expect(inverte("JAVASCRIPT")).toBe("TPIRCSAVAJ");
  expect(inverte("12345")).toBe("54321");
  expect(inverte("")).toBe(""); // Teste para string vazia
});
