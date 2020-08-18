(function () {
  interface Pessoa {
    nome: string;
    sobrenome: string;
    ola(): string;
  }

  const pessoa: Pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    ola(): string {
      return `Olá. Meu nome é ${this.nome} ${this.sobrenome}`;
    },
  };

  console.log(pessoa.ola());
})();
