/* eslint-disable @typescript-eslint/no-namespace */
namespace Geometria {
  export namespace Area {
    const PI = 3.1416;

    export function calcularAreaCircunferencia(raio: number): number {
      return PI * Math.pow(raio, 2);
    }
  }
}

console.log(Geometria.Area.calcularAreaCircunferencia(12));
