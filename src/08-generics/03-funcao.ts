(function () {
  function imprimir<T>(args: T[]) {
    args.forEach((valor) => console.log(valor));
  }

  type FuncaoImprimir = <T>(args: T[]) => void;

  const imprimirRef: FuncaoImprimir = imprimir;

  //Tipo genérico indefindo - pemite mix de tipos
  imprimirRef(['A', 'B', 'C', 1]);
  //Especificando o tipo na chamada da função - não permite mix de tipos
  imprimirRef<string>(['A', 'B', 'C']);
  //definindo um tipo objeto inline
  imprimirRef<{ nome: string }>([{ nome: 'João' }, { nome: 'Pedro' }]);
  //Definindo um tipo fora e passado pro generics
  type Pessoa = { nome: string };
  imprimirRef<Pessoa>([{ nome: 'João' }, { nome: 'Pedro' }]);
})();
