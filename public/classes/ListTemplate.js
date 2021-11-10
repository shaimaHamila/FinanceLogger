export class ListTemplate {
    constructor(list) {
        this.list = list;
    }
    ;
    render(item, heading, pos) {
        //creat html elements
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const li = document.createElement('li');
        //declarate elements
        h4.innerText = heading;
        li.appendChild(h4);
        p.innerText = item.format();
        li.appendChild(p);
        if (pos == "start") {
            this.list.prepend(li);
        }
        else {
            this.list.append(li);
        }
    }
}
