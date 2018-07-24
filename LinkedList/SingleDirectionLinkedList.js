/**
 * 单向链表
 */
// 链表也是一种特殊的列表，链表主要区别于数组的点是：链表靠前后关系来定位元素，不是靠位置来定位元素
// JavaScript中数组的主要问题是被实现成了对象，与其他语言的数组相比，效率很低，如果在业务中，发现使用数组效率很慢，就可以考虑使用链表
// 除了对数据的随机访问，链表几乎可以使用任何使用一维数组的地方，如果需要随机访问，数组仍然是最好的方式。

// Node类
// 链表中的每个节点
// element(属性) --- 保存节点上的数据
// next(属性) --- 指向下一个节点
class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

// LinkedList类
// 对链表进行操作的一系列方法
// inser(方法) --- 在指定位置插入元素
// remove(方法) --- 删除指定元素
class LinkedList {
  constructor () {
    this.head = new Node('head')

  }
  findItem (item) {
    let curr = this.head
    while(curr) {
      if (item === curr.element) {
        return curr
      }
      curr = curr.next
    }
  }
  findItemPrevNode (item) {
    let curr = this.head
    while(curr) {
      if (curr.next.element === item) {
        return curr
      }
      curr = curr.next
    }
  }
  insert (newElement, item) {
    let itemNode = this.findItem(item)
    if (itemNode) {
      let newElementNode = new Node(newElement)
      newElementNode.next = itemNode.next
      itemNode.next = newElementNode
    }else {
      console.log('没有找到插入位置')
    }
  }
  remove (item) {
    let itemPrevNode = this.findItemPrevNode(item)
    if (itemPrevNode) {
      itemPrevNode.next = itemPrevNode.next.next
    }else {
      console.log('没有找到要删除的元素')
    }
  }
}