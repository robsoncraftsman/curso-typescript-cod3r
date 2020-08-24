(function () {
  //Definindo uma classe base
  class Automovel {
    private velocidadeAtual = 0;

    constructor(public marca: string, public modelo: string, public velocidadeMaxima: number) {}

    protected mexerNoPedalDoAcelerador(delta: number) {
      const velocidade = this.velocidadeAtual + delta;
      if (velocidade > this.velocidadeMaxima) {
        this.velocidadeAtual = this.velocidadeMaxima;
      } else if (velocidade < 0) {
        this.velocidadeAtual = 0;
      } else {
        this.velocidadeAtual = velocidade;
      }
    }

    public acelerar() {
      this.mexerNoPedalDoAcelerador(5);
    }

    public frear() {
      this.mexerNoPedalDoAcelerador(-5);
    }
  }

  //Definindo uma subclasse
  class Carro extends Automovel {}

  const carro = new Carro('Ford', 'Ka', 165);
  for (let v = 0; v < 10; v++) {
    carro.acelerar();
  }
  console.log(carro);

  //Definindo uma subclasse e alterando o comportamento
  class Ferrari extends Carro {
    constructor(public modelo: string, public velocidadeMaxima: number) {
      super('Ferrari', modelo, velocidadeMaxima);
    }

    public acelerar() {
      this.mexerNoPedalDoAcelerador(20);
    }

    public frear() {
      this.mexerNoPedalDoAcelerador(-10);
    }
  }

  const ferrariF40 = new Ferrari('F40', 300);
  for (let v = 0; v < 10; v++) {
    ferrariF40.acelerar();
  }
  console.log(ferrariF40);
})();
