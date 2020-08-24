(function () {
  let funcionario: {
    nome: string;
    supervisores: string[];
    baterponto: (hora: number) => string;
  };

  funcionario = {
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
