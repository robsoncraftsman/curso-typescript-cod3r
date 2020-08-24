(function () {
  class Impressora<T extends number | string | number[]> {
    imprime(valor: T) {
      console.log(valor);
    }
  }

  const impressora = new Impressora();
  impressora.imprime(1);
  impressora.imprime('João');
  impressora.imprime([1, 2, 3]);
  //impressora.imprime(['João', 'Maria']); => Não funciona pois o tipo string[] não foi definido como válido
})();
