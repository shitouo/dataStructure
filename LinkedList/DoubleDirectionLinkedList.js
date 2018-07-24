/**
 * 双向链表
 */
class Node {
  constructor (element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoubleDirectionLinkedList {
  constructor () {
    this.head = new Node('heads')
  }
  findItem (item) {
    let curr = this.head
    while(curr) {
      if (curr.element === item) {
        return curr
      }
      curr = curr.next
    }
  }
  insert (newElement, item) {
    let itemNode = this.findItem(item)
    if (itemNode) {
      let newElementNode = new Node(newElement)
      newElementNode.prev = itemNode
      newElementNode.next = itemNode.next
      itemNode.next = newElementNode
    }else {
      console.log('没有找到注入的位置')
    }
  }
  remove (item) {
    let itemNode = this.findItem(item)
    if (itemNode) {
      itemNode.prev = itemNode.next
    }else {
      console.log('没有找到要删除的元素')
    }
  }
}