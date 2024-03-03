export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly JS = new Tag('Javascript', 'red');
  static readonly REACT = new Tag('React', 'blue');
  static readonly TYPESCRIPT = new Tag('Typescript', 'blue');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}
  toString() {
    return this.key;
  }
}
