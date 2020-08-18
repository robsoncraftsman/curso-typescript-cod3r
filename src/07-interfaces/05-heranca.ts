/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
(function () {
  interface A {
    a(): void;
  }

  interface B {
    b(): void;
  }

  interface ABC extends A, B {
    c(): void;
  }

  class ClasseA implements A {
    a(): void {}
  }

  class ClasseB implements B {
    b(): void {}
  }

  class ClasseAB implements A, B {
    a(): void {}
    b(): void {}
  }

  class ClasseABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
  }

  abstract class AbstractClassAD implements A, B {
    //Em TypeScript, diferente do Java, a classe abstrata tem que implementar
    //ou redefinir os métodos derivados da interface como abstratos
    abstract a(): void;
    b(): void {}
    //Método abstrato AbstractClassADespecífico
    abstract d(): void;
  }

  class ClasseAD extends AbstractClassAD {
    a(): void {}
    //b() não foi implementado pois uma implementação default foi definida na classe abstrata
    d(): void {}
  }
})();
