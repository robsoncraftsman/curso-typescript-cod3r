(function () {
  class ContaCorrente {
    private saldo = 0;

    depositar(@paramInfo valor: number) {
      this.saldo += valor;
    }

    sacar(@paramInfo valor: number) {
      if (this.saldo > valor) {
        this.saldo -= valor;
        return true;
      } else {
        return false;
      }
    }

    getSaldo() {
      return this.saldo;
    }
  }

  //Decorator é chamado apenas uma vez, na instanciação da classe.
  function paramInfo(target: any, functionName: string, parameterIndex: number) {
    console.log(target);
    console.log(functionName);
    console.log(parameterIndex);
  }

  const contaCorrente = new ContaCorrente();
  contaCorrente.depositar(100);
  contaCorrente.sacar(30);
  console.log(contaCorrente.getSaldo());
})();
