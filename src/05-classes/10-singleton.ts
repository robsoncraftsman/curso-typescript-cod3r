class Unico {
  private static instance: Unico = new Unico();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): Unico {
    return this.instance;
  }

  public showTime() {
    return new Date();
  }
}

console.log(Unico.getInstance().showTime());
