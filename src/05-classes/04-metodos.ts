(function () {
  class Data {
    constructor(public dia: number, private mes: number, public ano: number = 1970) {}

    public getDataFormatada(): string {
      return `${this.dia}/${this.mes}/${this.ano}`;
    }
  }

  const data = new Data(17, 8);
  console.log(data.getDataFormatada());

  data.dia = 30;
  data.ano = 2020;
  console.log(data.getDataFormatada());
})();
