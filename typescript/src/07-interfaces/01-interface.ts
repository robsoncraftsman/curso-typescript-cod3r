(function () {
  interface Pessoa {
    nome: string;
    idade?: number; //atributo opcinal
    [prop: string]: any; //quaisquer outros atributos dinamicoss
  }

  function print(pessoa: Pessoa) {
    console.log(`Pessoa: ${pessoa.nome} - ${pessoa.idade} - ${pessoa.altura} - ${pessoa.peso}`);
  }

  print({ nome: 'João' });
  print({ nome: 'João', idade: 30 });
  print({ nome: 'João', idade: 30, altura: 1.75 });
  print({ nome: 'João', idade: 30, peso: 70 });
  print({ nome: 'João', idade: 30, altura: 1.75, peso: 70 });
})();
