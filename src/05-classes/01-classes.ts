(function () {
  class Data {
    //Omitindo o modificador de acesso, o padrão é "public"
    dia: number;
    public mes: number;
    private ano: number;

    constructor(dia: number, mes: number, ano: number) {
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;
    }
  }

  const data = new Data(17, 8, 2020);
  console.log(data);

  data.dia = 30;
  console.log(data);

  //data.ano = 1970; (Não permite a atribuição de atributos privados)
})();
