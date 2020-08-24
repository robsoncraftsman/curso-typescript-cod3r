(function () {
  class ContaCorrente {
    private saldo = 0;

    depositar(valor: number) {
      this.saldo += valor;
    }

    sacar(valor: number) {
      if (this.saldo > valor) {
        this.saldo -= valor;
        return true;
      } else {
        return false;
      }
    }

    @congelar
    getSaldo() {
      return this.saldo;
    }
  }

  //Decorator é chamado apenas uma vez, na instanciação da classe.
  //Exemplo: mudar os PropertyDescriptors, deixando uma
  //função readOnly (sem poder reatribuir o comportamento da função)
  function congelar(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor) {
    console.log(target);
    console.log(propertyName);
    console.log(propertyDescriptor);
    //Não perimte a reatribuição do comportamento da função (Ex: obj.getSaldo = function() {})
    propertyDescriptor.writable = false;
  }

  const contaCorrente = new ContaCorrente();
  contaCorrente.depositar(100);
  contaCorrente.sacar(30);
  console.log(contaCorrente.getSaldo());
})();
