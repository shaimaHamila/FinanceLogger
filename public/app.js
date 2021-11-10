import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
// const invOne = new Invoice('Chaima', 'Work on this website', 900);
// const invTwo = new Invoice('Sarra', 'Work on this website', 100);
// let invoices : Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {console.log(inv.client, inv.amount, inv.format())});
//inputs
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector("#details");
var amount = document.querySelector('#amount');
var ul = document.querySelector('ul');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    const list = new ListTemplate(ul);
    if (type.value == "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
