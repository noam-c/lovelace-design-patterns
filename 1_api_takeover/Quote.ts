export default class Quote {
    public readonly text: string;
    public readonly attribution: string;

    public constructor(text: string, attribution: string) {
        this.text = text;
        this.attribution = attribution;
    }
}