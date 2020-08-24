type FuncaoDepoisto = (valor: number) => void;

type ContaBancaria = {
  saldo: number;
  depositar: FuncaoDepoisto;
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432'],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
