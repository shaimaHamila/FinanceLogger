import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter{


    constructor(
        readonly recipent: String,
        private details: String,
        public amount: number
        ){};

    format() {
        return `${this.recipent} is owed ${this.details} for ${this.amount}`;
    }
} 