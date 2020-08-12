(function () {
  /*
  String
  */
  const nome = 'Teste';
  console.log(nome);
  let nomex: string;
  nomex = 'Teste';
  console.log(nomex);

  /*
  Number
  */
  const idade = 20;
  console.log(idade);
  let idadex: number;
  idadex = 20;
  console.log(idadex);

  /*
  Boolean
  */
  const isOk = true;
  console.log(isOk);
  let isOkx: boolean;
  isOkx = true;
  console.log(isOkx);

  /*
  Array
  */
  const valores = ['A', 'B', 'C'];
  console.log(valores);
  let valoresx: string[];
  valoresx = ['A', 'B', 'C'];
  console.log(valoresx);

  /*
  Tuplas
  */
  const endereco = ['Rua do Mar', 99];
  console.log(endereco);
  let enderecox: [string, number];
  enderecox = ['Rua do Mar', 99];
  console.log(enderecox);

  /*
  Enum
  */
  enum Cor {
    Azul, //0
    Amarelo = 100, //Permite definir um valor manualmente
    Verde = 1, //tem que voltar a sequencia original manualmente se for o caso
    Rosa, //2
    Cinza, //3
    Preto,
  }
  console.log(Cor.Amarelo);
  for (let cor in Cor) {
    console.log(cor);
  }

  /*
  Any
  */
  let x: any;
  x = 'Oi';
  console.log(x);
  x = 1;
  console.log(x);

  /*
  Type
  */
  type Pessoa = {
    nome: string;
    idade: number;
  };
  let pessoa: Pessoa = {
    nome: 'João',
    idade: 20,
  };
  console.log(pessoa);

  /*
  Union Types (Ou)
  */
  let valor: string | number;
  valor = 'Olá';
  console.log(valor);
  valor = 10;
  console.log(valor);
  //valor = true; (Type 'true' is not assignable to type 'string | number')

  /*
  Verificar tipos em runtime (JS e TS)
  */
  const numero = 20;
  console.log(typeof numero);

  /*
  Null
  Por padrão, se não definir null como um tipo possível, ocorre o seguinte erro:
  (Type 'null' is not assignable to type 'string')
  Pode ser desabilitado colocando false em "strictNullChecks" no arquivo tsconfig.json
  */
  let valorNulo: null | string;
  valorNulo = null;
  console.log(valorNulo);
})();
