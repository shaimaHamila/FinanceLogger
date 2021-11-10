import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;


// const invOne = new Invoice('Chaima', 'Work on this website', 900);
// const invTwo = new Invoice('Sarra', 'Work on this website', 100);

// let invoices : Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {console.log(inv.client, inv.amount, inv.format())});




//inputs
var form = document.querySelector('.new-item-form') as HTMLFormElement;
var type = document.querySelector('#type') as HTMLInputElement;
var tofrom = document.querySelector('#tofrom') as HTMLInputElement;
var details = document.querySelector("#details") as HTMLInputElement;
var amount = document.querySelector('#amount') as HTMLInputElement;
var ul = document.querySelector('ul')!;

form.addEventListener("submit", 

(e : Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    const list = new ListTemplate(ul);
    if(type.value == "invoice"){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');

});

