interface Object {
  log(): void;
}

Object.prototype.log = function (): void {
  console.log(this.toString());
};

const pessoa = {
  nome: 'João',
  toString(): string {
    return this.nome;
  },
};

pessoa.log();
