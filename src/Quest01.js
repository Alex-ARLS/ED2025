/*QUESTÃO 1: (ENADE 2014, Adaptada) Uma estrutura de dados do tipo pilha pode ser usada
em um algoritmo que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI
deve ser impresso IXACABA. Utilizando uma pilha e suas operações base, desenvolva a função
inverte que recebe uma String e, utilizando as funções push e pop da pilha, retorne a palavra de
forma invertida.*/

class Pilha {
    constructor() {
      this.itens = [];
    }
  
    push(elemento) {
      this.itens.push(elemento);
    }
  
    pop() {
      return this.itens.pop();
    }
  
    isEmpty() {
      return this.itens.length === 0;
    }
  }
  
  function inverte(palavra) {
    let pilha = new Pilha();
  
    // Empilha cada caractere
    for (let char of palavra) {
      pilha.push(char);
    }
  
    let palavraInvertida = "";
  
    // Desempilha para inverter a palavra
    while (!pilha.isEmpty()) {
      palavraInvertida += pilha.pop();
    }
  
    return palavraInvertida;
  }
  
  module.exports = { inverte, Pilha };
  