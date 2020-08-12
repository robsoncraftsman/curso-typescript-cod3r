(function () {
  type FuncaoBaterPonto = (hora: number) => string;

  type Funcionario = {
    nome: string;
    supervisores: string[];
    baterponto: FuncaoBaterPonto;
  };

  let funcionario: Funcionario = {
    nome: 'Pedro',
    supervisores: ['João', 'Maria'],
    baterponto: function (hora: number): string {
      if (hora <= 8) {
        return 'Ponto normal';
      } else {
        return 'Fora do horário';
      }
    },
  };

  console.log(funcionario);
  console.log(funcionario.baterponto(7));
  console.log(funcionario.baterponto(12));
})();
