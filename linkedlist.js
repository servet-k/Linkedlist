class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;

    }
    //insert node to start of the list
    prepend(value) {
        this.head = new Node(value, this.head)
    }

    // insert node to end
    append(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

    }
    // get the size of list
    size() {
        let current = this.head;
        let count = 0;
        while (current) {

            current = current.next;
            count++;
        }
        return count;
    }
    //returns first node in the list
    Head() {

        return this.head;
    }
    //returns last node in the list
    tail() {
        let current = this.head;
        let previous;
        while (current) {
            previous = current;
            current = current.next;
        }
        return previous;
    }
    // returns node at index
    getAt(index) {
        let count = 0;
        let current = this.head;
        let size = this.size();
        if (index > size) { return; }
        if (index === 0) { return current }
        while (count < index) {
            count++;
            current = current.next;
        }
        return current;
    }
    // removes last node from the list
    pop() {
        let current = this.head;
        let previous;
        while (current.next) {
            previous = current;

            current = current.next;
        }

        previous.next = null;
    }
    //returns true if the passed in value is in the list
    contains(value) {
        let result = false;
        let current = this.head;
        while (current) {
            if (current.data === value) { result = true }
            current = current.next;
        }
        return result;
    }
    // returns the index of node contains value
    find(value) {
        let current = this.head;
        let count = 0;
        let result = null;
        while (current) {
            if (current.data === value) { result = count; }
            current = current.next;
            count++;
        }
        return result;
    }

    //represents your LinkedList objects as strings, 
    //so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        let current = this.head;
        let str = "";
        while (current) {
            str += `( ${current.data} )-> ${current.next === null ? null : ""}`
            current = current.next;
        }
        return str;
    }
    //insert a new node at given index
    inserAt(value, index) {
        let node = new Node(value);
        let size = this.size();
        if (index === 0) { return this.head = new Node(value, this.head) }
        if (index < 0 || index > size) { return console.log("index out of range") }
        let current = this.head;
        let count = 0;
        let previous;

        while (count < index) {
            count++;
            previous = current;
            current = current.next;

        }
        previous.next = node;
        node.next = current;
    }
    // remove node at given index
    removeAt(index) {
        let current = this.head;
        let size = this.size();
        if (index < 0 || index > size) { return console.log("index out of range"); }
        if (index === 0) { return this.head = current.next }
        if (index === size) { return this.pop() }
        let count = 0;
        let previous;
        while (count < index) {
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
    }
}

const list = new LinkedList();
list.prepend(400);
list.prepend(300);
list.prepend(200);
list.prepend(100);
list.append(500);
//list.pop();
//console.log(list.getAt(4))
//console.log(list.find(5));
console.log(list.toString());
list.inserAt(250, 2);
console.log(list.toString());
//list.removeAt(3);
console.log(list.size())
//console.log(list.toString());