/* eslint-disable @typescript-eslint/ban-types */
(function () {
  @decoratorFactory
  class Eletrodomestico {
    constructor(...args: any[]) {
      console.log('Construtor da classe');
      console.log(args);
    }
  }

  //Definir um tipo para o Construtor
  type noArgsConstructor = { new (...args: any[]): {} };

  //Factory que retorna o decorator e faz algumas manipulações na decoração
  function decoratorFactory(constructor: noArgsConstructor) {
    return class extends constructor {
      constructor(...args: any[]) {
        console.log('Antes...');
        console.log(args);
        super(...args);
        console.log('Depois...');
      }
    };
  }

  //Chama o decorator apenas na primeira vez, quando a classe é carregada
  console.log('Nova instância: ' + new Eletrodomestico());
  console.log('Nova instância: ' + new Eletrodomestico(1));
  console.log('Nova instância: ' + new Eletrodomestico({ a: 'Teste' }));
})();
