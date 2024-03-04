export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly JS = new Tag('Javascript', '#FFD700');
  static readonly REACT = new Tag('React', '#33cbff');
  static readonly TYPESCRIPT = new Tag('Typescript', 'navy');
  static readonly HTMLCanvas = new Tag('HTMLCanvas', 'purple');
  static readonly HTML = new Tag('HTML', 'orange');
  static readonly CSS = new Tag('CSS', 'blue');
  static readonly FIREBASE = new Tag('Firebase', '#FFBF00');
  static readonly SASS = new Tag('Sass', 'pink');
  static readonly RxJS = new Tag('RxJS', 'purple');
  static readonly JAVA = new Tag('Java', 'orange');
  static readonly Bootstrap = new Tag('Bootstrap', 'purple');
  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}
  toString() {
    return this.key;
  }
}
