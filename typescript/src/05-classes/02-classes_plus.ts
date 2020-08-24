(function () {
  class Data {
    //Definindo o modificador nos parâmetros do construtor, já é feita a declaração automática
    //dos atributos e a atribuição deles de acordo com o valor dos parâmetros
    constructor(public dia: number, private mes: number, public ano: number = 1970) {}
  }

  const data = new Data(17, 8);
  console.log(data);

  data.dia = 30;
  console.log(data);

  //data.mes = 1970; (Não permite a atribuição de atributos privados)
})();
