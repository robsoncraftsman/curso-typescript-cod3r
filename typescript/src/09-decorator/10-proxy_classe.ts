(function () {
  @logarEletro
  class Eletrodomestico {
    constructor() {
      console.log(`Construtor da classe ` + this);
    }

    ligar(voltagem: number): boolean {
      console.log(`Ligar: ${voltagem}`);
      return true;
    }
  }

  //Criando um decorator como um Proxy para a classe, a fim de interferir na chamada dos métodos
  type LogarEletro = {
    new (...args: any[]): {
      ligar(voltagem: number): boolean;
    };
  };

  function logarEletro<C extends LogarEletro>(componente: C) {
    return class extends componente {
      ligar(voltagem: number): boolean {
        console.log('Ligando eletro...');
        const result = super.ligar(voltagem);
        console.log('Eleletro ligado.');
        return result;
      }
    };
  }

  const eletro = new Eletrodomestico();
  eletro.ligar(220);
})();
