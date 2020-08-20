/* eslint-disable @typescript-eslint/ban-types */
(function () {
  @decoratorFactory('Teste')
  class Eletrodomestico {
    constructor() {
      console.log(`Construtor da classe ` + this);
    }
  }

  //Factory que retorna o decorator e faz algumas manipulações na decoração
  function decoratorFactory(texto: string) {
    return function (construtor: Function) {
      console.log(texto + ': ' + construtor);
    };
  }

  //Chama o decorator apenas na primeira vez, quando a classe é carregada
  console.log('Nova instância: ' + new Eletrodomestico());
  console.log('Nova instância: ' + new Eletrodomestico());
  console.log('Nova instância: ' + new Eletrodomestico());
})();
