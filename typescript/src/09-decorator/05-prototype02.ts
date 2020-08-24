/* eslint-disable @typescript-eslint/ban-types */
(function () {
  interface Eletrodomestico {
    imprimir?(): void;
  }

  @imprimivel
  class Eletrodomestico {
    constructor() {
      console.log('Construtor da classe');
      console.log(this);
    }
  }

  //Internamente a classe é uma Function
  function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function () {
      console.log('Decorator da classe');
      console.log(this);
    };
  }

  //Chama o decorator apenas na primeira vez, quando a classe é carregada
  const eletrodomestico = new Eletrodomestico();
  eletrodomestico.imprimir && eletrodomestico.imprimir();
})();
