type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number
    private head?: Node<T>
    private tail?: Node<T>


    constructor() {
      this.head = this.tail = undefined
      this.length = 0
    }


    enqueue(item: T): void {
        // update length
        this.length++

        // create the new node
        const newNode = {value: item} as Node<T>

        // if the queue is empty, there is no tail
        // testing length == 0 may make more sense, but causes type problems
        if (!this.tail){
            // there is no head or tail. Give newNode to both
            this.tail = this.head = newNode
        } else {
            // make a link from current tail to what you're adding
            this.tail.next = newNode
            // update tail
            this.tail = newNode
        }

    }

    deque(): T | undefined {

    }

    peek(): T | undefined {
        return this.head?.value
    }
}
