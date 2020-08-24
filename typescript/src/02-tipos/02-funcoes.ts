(function () {
  /*
  Void
  */
  function log(msg: string): void {
    console.log(`Log: ${msg}`);
  }

  /*
  Tipos no parâmetro e no retorno
  */
  function toUpperCase(param: string): string {
    return param.toLocaleUpperCase();
  }
  log(toUpperCase('Nome'));
  function soma(v1: number, v2: number): number {
    return v1 + v2;
  }
  log(soma(1, 2).toString());

  /*
  Função como tipo
  */
  let varSoma: (n1: number, n2: number) => number;
  varSoma = soma;
  log(varSoma(2, 3).toString());

  /*
  Retorno tipo "never"
  Usando para funções que sempre retornam erro ou estão em loop infinito
  */
  function falha(msg: string): never {
    throw new Error(msg);
  }
  try {
    falha('Never');
  } catch (error) {
    console.log(error.message);
  }
})();
