(function () {
  class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {}

    public toString(): string {
      return `${this.nome} - ${this.getValorComDesconto()}`;
    }

    public getValorComDesconto(): number {
      return this.preco * (1 + this.desconto / 100);
    }
  }

  const arroz = new Produto('Arroz', 5);
  console.log(arroz.toString());

  const feijao = new Produto('Feijão', 9, 10);
  console.log(feijao.toString());
})();
