import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter{


    constructor(
        readonly client: String,
        private details: String,
        public amount: number
        ){};

    format() {
        return `${this.client} owes ${this.details} for ${this.amount}`;
    }
} 