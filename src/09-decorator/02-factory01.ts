/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
(function () {
  @decoratorFactory(false)
  class Eletrodomestico {
    constructor() {
      console.log(`Construtor da classe ` + this);
    }
  }

  //Internamente a classe é uma Function
  function logarClasse(construtor: Function) {
    console.log(`Decorator da classe: ${construtor}`);
  }

  function decoratorVazio(_: Function) {}

  //Factory que retorna o decorator dependo da situação
  function decoratorFactory(usaDecorator: boolean) {
    return usaDecorator ? logarClasse : decoratorVazio;
  }

  //Chama o decorator apenas na primeira vez, quando a classe é carregada
  console.log('Nova instância: ' + new Eletrodomestico());
  console.log('Nova instância: ' + new Eletrodomestico());
  console.log('Nova instância: ' + new Eletrodomestico());
})();
