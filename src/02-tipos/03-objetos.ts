(function () {
  /*
  Definição dos tipos e atributos do objeto
  */
  let usuario: { nome: string; senha: string };
  usuario = {
    nome: 'Teste',
    senha: 'Senha',
  };
  console.log(usuario);

  /*
  Definição de atributos opcionais
  */
  let pessoa: { nome: string; idade?: number };
  pessoa = {
    nome: 'João',
  };
  console.log(pessoa);

  /*
  Não permite a definição parcial dos atributos
  */
  //usuario.id = 1; (Property 'id' does not exist on type '{ nome: string; senha: string; })

  /*
  Passando tipo como parâmetro de uma função
  */
  function imprime(pessoa: { nome: string; idade?: number }) {
    console.log(pessoa);
  }
  imprime({ nome: 'Maria' });
})();
