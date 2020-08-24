abstract class FiguraGeometrica {
  abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
  constructor(public raio: number) {
    super();
  }

  calcularArea(): number {
    return Math.PI + Math.pow(this.raio, 2);
  }
}

class Quadrado extends FiguraGeometrica {
  constructor(public lado: number) {
    super();
  }

  calcularArea(): number {
    return Math.pow(this.lado, 2);
  }
}

const circulo = new Circulo(10);
console.log(circulo.calcularArea());

const quadrado = new Quadrado(10);
console.log(quadrado.calcularArea());
