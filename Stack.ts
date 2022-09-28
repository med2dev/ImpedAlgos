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
        this.length = Math.max(0, this.length - 1)

        const oldHead = this.head as Node<T>
        this.head = oldHead?.prev

        // TODO: free

        return oldHead?.value

    }

    peek(): T | undefined {
        return this.head?.value()
    }
}
