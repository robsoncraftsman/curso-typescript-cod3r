(function () {
  //Sem Generics
  function echo(obj: any) {
    return obj;
  }

  console.log(echo('João'));
  console.log(echo(27));
  console.log(echo({ nome: 'João' }));

  //Com generics
  function echoGenerico<T>(obj: T): T {
    return obj;
  }

  //O compilador infere do tipo de acordo com o parâmetro
  console.log(echoGenerico('João').length);
  console.log(echoGenerico(27).toString());
  console.log(echoGenerico({ nome: 'João' }).nome);
  //Pode-se explicitar o tipo para validar o parâmetro
  console.log(echoGenerico<number>(27).toString());
})();
