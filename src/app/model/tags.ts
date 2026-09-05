export class Tags {
    static readonly ANGULAR = new Tags ('Angular', 'red');
    static readonly REACT = new Tags ('React', 'blue');
    static readonly VUE = new Tags ('Vue', 'green');
    static readonly JAVASCRIPT = new Tags ('JavaScript', 'yellow');
    static readonly TYPESCRIPT = new Tags ('TypeScript', 'blue');
    static readonly HTML = new Tags ('HTML', 'orange');
    static readonly CSS = new Tags ('CSS', 'purple');
    static readonly NODEJS = new Tags ('Node.js', 'green');
    static readonly DOCKER = new Tags ('Docker', 'gray');
    static readonly CSHARP = new Tags ('C#', 'purple');
    static readonly ASPNET = new Tags ('ASP.NET', 'blue')
    static readonly JAVA = new Tags ('Java', 'red');
    static readonly PYTHON = new Tags ('Python', 'yellow');
    static readonly SQL = new Tags ('SQL', 'brown');


    private constructor(public readonly key: string, public readonly color: string) {

    }

    toString(): string {
        return this.key;
    }

}
