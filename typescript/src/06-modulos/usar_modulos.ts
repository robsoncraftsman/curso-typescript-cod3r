//usando export comum tem que usar 'as' caso deseje criar um alias para o nome da função
import { calcularAreaCircunferencia as cac } from './modulo_circunferencia_es6';
//Usando export default - pode definir nome da função default direto
import car from './modulo_retangulo_es6';

console.log(cac(5));
console.log(car(2, 3));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const calcularAreaQuadrado = require('./modulo_quadrado_commonsjs');
console.log(calcularAreaQuadrado(10));
