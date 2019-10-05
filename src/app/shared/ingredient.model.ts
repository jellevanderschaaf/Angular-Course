/*
export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}

Het volgende werkt ook:

*/    

export class Ingredient {
    constructor(public name: string, public amount: number) {}
}