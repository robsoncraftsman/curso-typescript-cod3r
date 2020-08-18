(function () {
  //Definição da interface
  interface Humano {
    nome: string;
    ola(): string;
  }

  //Definição da classe que pode ter outros atributos ou métodos além dos existentes na interface
  class Pessoa implements Humano {
    constructor(public nome: string, public sobrenome: string) {}
    ola(): string {
      return `Olá. Meu nome é ${this.nome} ${this.sobrenome}`;
    }
    olaTurbo(): string {
      return this.ola() + ' => Turbo';
    }
  }

  const pessoa = new Pessoa('João', 'Silva');

  console.log(pessoa.ola());
  console.log(pessoa.olaTurbo());
})();
