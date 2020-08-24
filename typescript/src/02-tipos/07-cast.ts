(function () {
  type Msg = {
    message: string;
  };

  function imprimir(valor: any) {
    console.log((<Msg>valor).message);
  }

  const msg = {
    message: 'Olá',
  };

  imprimir(msg);
})();
