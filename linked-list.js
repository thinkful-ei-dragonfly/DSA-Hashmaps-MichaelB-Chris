class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  
  insertFirst(item) {
    this.head = new _Node(item, this.head)
}

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  insertBefore(item, key) {
    let tempNode = this.head
    if (this.head === null) {
      this.insertFirst(item)
    } else if (tempNode.value === key) {
      this.head = new _Node(item, this.head)
    } else {
      while (tempNode.next !== null && tempNode.next.value !== key) {
        tempNode = tempNode.next
      }
      let newNode = new _Node(item, tempNode.next)
      tempNode.next = newNode
    }
  }

  insertAfter(item, key) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head
      while (tempNode.value !== key) {
        tempNode = tempNode.next
      }
      let newNode = new _Node(item, tempNode.next)
      tempNode.next = newNode
    }
  }

  insertAt(item, position) {
    let currNode = this.head
    if (!this.head) {
      return null
    }

    if (position === 0) {
      this.insertFirst(item)
    } else {
      for (let i=0;i<position-1;i++) {
        if (currNode.next === null) {
          currNode.next = new _Node(item, null)
          return
        }
        currNode = currNode.next
      }
  
      let newNode = new _Node(item, currNode.next)
      currNode.next = newNode
    }
  }

  find(item) {
    let currNode = this.head
    if (!this.head) {
      return null
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null
      }
      else {
        currNode = currNode.next
      }
    }
    return currNode
  }

  remove(item) {
    if (!this.head) {
      return null
    }
    if (this.head.value === item) {
      this.head = this.head.next
      return
    }
    let currNode = this.head
    let prevNode = this.head

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      console.log('Item not Found')
      return
    }
    prevNode.next = currNode.next
  }
}

let SLL = new LinkedList()

SLL.insertFirst('Apollo')
SLL.insertLast('Boomer')
SLL.insertLast('Helo')
SLL.insertLast('Husker')
SLL.insertLast('Starbuck')
SLL.insertLast('Tauhida')

// console.log(SLL.head)

SLL.insertBefore('Athena', 'Boomer')
SLL.insertAfter('Hotdog', 'Helo')
SLL.insertAt('Kat', 2)
SLL.remove('Tauhida')

function display(list) {
  let currNode = list.head
  if (!list.head) {
    return null
  }

  while (currNode !== null) {
    console.log(currNode.value)
    currNode = currNode.next
  }
}

function size(list) {
  let counter = 1
  if (list.head === null) {
    return null
  }
  else {
    let tempNode = list.head
    while (tempNode.next !== null) {
      counter ++
      tempNode = tempNode.next
    }
    return counter
  }
}

function isEmpty(list) {
  if (list.head === null) {
    return true
  }
  else {
    return false
  }
}

function reverse(list) {
  if (!list.head || !list.head.next) {
    return null
  }
  let aNode = list.head
  let bNode = list.head.next
  aNode.next = null

  while (bNode.next !== null) {
    let tempNode = bNode.next
    bNode.next = aNode
    aNode = bNode
    bNode = tempNode
  }
  list.head = new _Node(bNode.value, aNode)
}


display(SLL)
console.log()
console.log(size(SLL))
console.log()
console.log(isEmpty(SLL))
console.log()
reverse(SLL)
display(SLL)