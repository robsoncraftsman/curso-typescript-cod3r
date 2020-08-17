(function () {
  class Pessoa {
    private _idade = 0;

    get idade(): number {
      return this._idade;
    }

    set idade(valor: number) {
      this._idade = valor;
    }
  }

  const pessoa = new Pessoa();
  pessoa.idade = 35;

  console.log(pessoa);
})();
