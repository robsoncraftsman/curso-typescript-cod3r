(function () {
  class Fila<T> {
    private items: T[] = new Array<T>();

    add(item: T) {
      this.items.push(item);
    }

    remove(): T | null {
      if (this.items.length > 0) {
        const item: T = this.items[0];
        this.items.splice(0, 1);
        return item;
      } else {
        return null;
      }
    }

    print(): void {
      console.log(this.items);
    }
  }

  const fila = new Fila<number>();
  console.log(fila.remove());
  fila.add(1);
  fila.add(2);
  fila.add(3);
  fila.print();
  console.log(fila.remove());
  fila.print();
})();
