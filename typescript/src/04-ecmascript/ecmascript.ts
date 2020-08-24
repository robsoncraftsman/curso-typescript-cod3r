//Destructuring de um array para um objeto
(function () {
  const pessoa: { nome?: string; idade?: number } = {};
  [pessoa.nome, pessoa.idade] = ['João', 20];

  console.log(pessoa);
})();
