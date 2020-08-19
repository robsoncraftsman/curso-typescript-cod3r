(function () {
  class Map<C extends number, V> {
    private items: { [prop: number]: V } = {};
    put(chave: C, valor: V) {
      this.items[chave] = valor;
    }

    get(chave: C): V {
      return this.items[chave];
    }

    clear() {
      this.items = {};
    }

    print() {
      console.log(this.items);
    }
  }

  const mapa = new Map<number, string>();
  mapa.put(1, 'Pedro');
  mapa.put(2, 'Rebeca');
  mapa.put(3, 'Maria');
  mapa.put(1, 'Gustavo');

  console.log(mapa.get(2));
  mapa.print();
  mapa.clear();
  mapa.print();
})();
