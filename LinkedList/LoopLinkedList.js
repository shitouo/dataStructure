/**
 * 循环链表
 */
// 循环列表是指在单向列表的基础上，最后一个节点的next指向head节点
// 所以判断一个链表是不是循环链表，就遍历链表，判断是否有节点的next指向head

class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LoopLinkedList {
  constructor () {
    this.head = new Node('head')
    this.head.next = this.head
  }
  
  insert (newElement, item) {
    // 同单向链表
  }

  remove (item) {
    // 同单向链表
  }
}