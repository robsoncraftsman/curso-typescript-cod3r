(function () {
  //Interface para representar uma função
  interface FuncaoOla {
    (nome: string): string;
  }

  let funcaoOla: FuncaoOla = function (nome: string) {
    return `Olá ${nome}`;
  };

  console.log(funcaoOla('João'));
})();
