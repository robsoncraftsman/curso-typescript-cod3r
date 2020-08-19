(function () {
  abstract class OperacaoBinaria<T, R> {
    abstract execute(valorUm: T, valorDois: T): R;
  }

  class SomadorNumeros extends OperacaoBinaria<number, number> {
    execute(valorUm: number, valorDois: number) {
      return valorUm + valorDois;
    }
  }

  class SubtratorDatas extends OperacaoBinaria<Date, number> {
    execute(valorUm: Date, valorDois: Date) {
      return valorUm.getDate() - valorDois.getDate();
    }
  }

  const somadorNumeros = new SomadorNumeros();
  console.log(somadorNumeros.execute(1, 2));

  const substratorDatas = new SubtratorDatas();
  console.log(substratorDatas.execute(new Date(2020, 1, 10), new Date(2020, 1, 1)));
})();
