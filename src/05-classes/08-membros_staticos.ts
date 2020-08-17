class Matematica {
  static PI = 3.1416;

  static calcularAreaCircunferencia(raio: number): number {
    return this.PI * Math.pow(raio, 2);
  }
}

console.log(Matematica.calcularAreaCircunferencia(10));
