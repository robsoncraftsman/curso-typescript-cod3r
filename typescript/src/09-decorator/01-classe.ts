/* eslint-disable @typescript-eslint/ban-types */
(function () {
  @logarClasse
  class Eletrodomestico {
    constructor() {
      console.log(`Construtor da classe ` + this);
    }
  }

  //Internamente a classe é uma Function
  function logarClasse(construtor: Function) {
    console.log(`Decorator da classe: ${construtor}`);
  }

  //Chama o decorator apenas na primeira vez, quando a classe é carregada
  console.log('Nova instância: ' + new Eletrodomestico());
  console.log('Nova instância: ' + new Eletrodomestico());
  console.log('Nova instância: ' + new Eletrodomestico());
})();
