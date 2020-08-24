class Aviao {
  constructor(public readonly modelo: string) {
    this.modelo = modelo;
  }
}

const aviao = new Aviao('Boeing');
console.log(aviao.modelo);

//aviao.modelo = 'Airbus'; (Não permite a atribuição pois o atributo é readonly)
