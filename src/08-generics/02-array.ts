(function () {
  //Definindo o tipo de um Array
  const valores: Array<number> = [1, 2, 3, 4, 5];
  valores.push(6);
  console.log(valores);

  //Usuando um parâmetro Array genérico
  function imprimir<T>(args: T[]) {
    args.forEach((valor) => console.log(valor));
  }

  //Tipo genérico indefindo - pemite mix de tipos
  imprimir(['A', 'B', 'C', 1]);
  //Especificando o tipo na chamada da função - não permite mix de tipos
  imprimir<string>(['A', 'B', 'C']);
  //definindo um tipo objeto inline
  imprimir<{ nome: string }>([{ nome: 'João' }, { nome: 'Pedro' }]);
  //Definindo um tipo fora e passado pro generics
  type Pessoa = { nome: string };
  imprimir<Pessoa>([{ nome: 'João' }, { nome: 'Pedro' }]);
})();
