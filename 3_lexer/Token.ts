// A Token combines together multiple characters into a single
// symbol that is meaningful to a computer.
export default class Token {
    public readonly name: string;
    public readonly type: string;

    public constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    // Outputs a human-readable version of this Token object
    public toString(): string {
        return `${this.type}<${this.name}>`
    }
}
