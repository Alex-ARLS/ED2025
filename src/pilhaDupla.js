class PilhaDupla {
    constructor(tamanho) {
      this.tamanho = tamanho;
      this.vetor = new Array(tamanho).fill(null);
      this.topoA = -1; // Pilha A começa do início do vetor
      this.topoB = tamanho; // Pilha B começa do final do vetor
    }
  
    // Verifica se a pilha A está vazia
    eVaziaA() {
      return this.topoA === -1;
    }
  
    // Verifica se a pilha B está vazia
    eVaziaB() {
      return this.topoB === this.tamanho;
    }
  
    // Verifica se a pilha está cheia
    estaCheia() {
      return this.topoA + 1 === this.topoB;
    }
  
    // Empilha um elemento na Pilha A
    empilhaA(valor) {
      if (this.estaCheia()) {
        console.log("Erro: Pilha cheia!");
        return;
      }
      this.topoA++;
      this.vetor[this.topoA] = valor;
    }
  
    // Empilha um elemento na Pilha B
    empilhaB(valor) {
      if (this.estaCheia()) {
        console.log("Erro: Pilha cheia!");
        return;
      }
      this.topoB--;
      this.vetor[this.topoB] = valor;
    }
  
    // Desempilha um elemento da Pilha A
    desempilhaA() {
      if (this.eVaziaA()) {
        console.log("Erro: Pilha A vazia!");
        return null;
      }
      let valor = this.vetor[this.topoA];
      this.vetor[this.topoA] = null;
      this.topoA--;
      return valor;
    }
  
    // Desempilha um elemento da Pilha B
    desempilhaB() {
      if (this.eVaziaB()) {
        console.log("Erro: Pilha B vazia!");
        return null;
      }
      let valor = this.vetor[this.topoB];
      this.vetor[this.topoB] = null;
      this.topoB++;
      return valor;
    }
  
    // Exibe o estado atual do vetor
    mostrarVetor() {
      console.log(this.vetor);
    }
  }
  
  // Exemplo de uso
  let pilha = new PilhaDupla(6);
  pilha.empilhaA(1);
  pilha.empilhaA(2);
  pilha.empilhaB(3);
  pilha.empilhaB(4);
  pilha.mostrarVetor();
  
  console.log("Desempilha A:", pilha.desempilhaA());
  console.log("Desempilha B:", pilha.desempilhaB());
  pilha.mostrarVetor();
  