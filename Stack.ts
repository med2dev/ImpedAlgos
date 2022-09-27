type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T>{
    public length: number
    private head?: Node<T>

    constructor(){
        this.head = undefined
        this.length = 0
    }

    push(item: T): void{
        this.length++
        const newNode = {value: item} as Node<T>
        newNode.prev = this?.head
        this.head = newNode 

    }

    pop(): T | undefined {

    }

    peek(): T | undefined {
        return this.head?.value()
    }
}
