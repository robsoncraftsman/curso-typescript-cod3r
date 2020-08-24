import $ from 'jquery';
import Livro from './modelo/livro';

const livro = new Livro('Dom Quixote', 100, 10);

$('body').append(`<h1>${livro.nome}</h1>`);
$('body').append(`
    <h2>Preço: R$${livro.precoComDesconto()}</h2>
`);
