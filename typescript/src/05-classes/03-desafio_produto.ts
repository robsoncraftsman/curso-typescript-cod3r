(function () {
  class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {}
  }

  const arroz = new Produto('Arroz', 5);
  console.log(arroz);

  const feijao = new Produto('Feijão', 9, 10);
  console.log(feijao);
})();
