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
        // if there is no head, you cannot get anything out and you're done
        if (!this.head){
            return undefined
        }
        // update the length
        this.length--

        // create a new reference to the node you're removing
        const oldHead = this.head
        // set the head to the next element
        this.head = this.head.next
        // break the link from the oldHead to the current head
        oldHead.next = undefined

        // if you started with only one element, the length is now 0
        // in this case, this.tail would have also pointed to oldHead
        // break that link
        // note, you don't have to set this.head to undefined, because
        // if oldHead is both the head and the tail, then this.head.next above
        // is already undefined, so you've already set this.head to undefined 
        if (this.length === 0){
            this.tail = undefined
        }

        // return the oldhead value
        return oldHead.value

    }

    peek(): T | undefined {
        return this.head?.value
    }
}
