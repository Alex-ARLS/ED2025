const { PilhaDupla } = require("../src/pilhaDupla");

describe("Testes da Pilha Dupla", () => {
  test("Inicializa corretamente com pilhas vazias", () => {
    let pilha = new PilhaDupla(6);
    expect(pilha.eVaziaA()).toBe(true);
    expect(pilha.eVaziaB()).toBe(true);
  });

  test("Empilha e desempilha elementos corretamente na Pilha A", () => {
    let pilha = new PilhaDupla(6);
    pilha.empilhaA(10);
    pilha.empilhaA(20);
    
    expect(pilha.eVaziaA()).toBe(false);
    expect(pilha.desempilhaA()).toBe(20);
    expect(pilha.desempilhaA()).toBe(10);
    expect(pilha.eVaziaA()).toBe(true);
  });

  test("Empilha e desempilha elementos corretamente na Pilha B", () => {
    let pilha = new PilhaDupla(6);
    pilha.empilhaB(30);
    pilha.empilhaB(40);
    
    expect(pilha.eVaziaB()).toBe(false);
    expect(pilha.desempilhaB()).toBe(40);
    expect(pilha.desempilhaB()).toBe(30);
    expect(pilha.eVaziaB()).toBe(true);
  });

  test("Detecta pilha cheia corretamente", () => {
    let pilha = new PilhaDupla(4);
    pilha.empilhaA(1);
    pilha.empilhaA(2);
    pilha.empilhaB(3);
    pilha.empilhaB(4);

    expect(pilha.estaCheia()).toBe(true);

    // Tentando empilhar em pilha cheia
    console.log = jest.fn(); // Captura console.log para testar mensagens
    pilha.empilhaA(5);
    pilha.empilhaB(6);

    expect(console.log).toHaveBeenCalledWith("Erro: Pilha cheia!");
  });

  test("Detecta pilhas vazias corretamente", () => {
    let pilha = new PilhaDupla(6);
    
    console.log = jest.fn(); // Captura console.log para testar mensagens
    expect(pilha.desempilhaA()).toBeNull();
    expect(pilha.desempilhaB()).toBeNull();

    expect(console.log).toHaveBeenCalledWith("Erro: Pilha A vazia!");
    expect(console.log).toHaveBeenCalledWith("Erro: Pilha B vazia!");
  });
});
