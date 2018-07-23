/**
 * 队列
 */
//队列也是一种特殊的列表。不同的是，只能在队尾插入元素，在队首删除元素
// enquene(方法) --- 入队
// dequene(方法) --- 出队
// front(方法) --- 读取队首元素
// end(方法) --- 读取队尾元素
// toString(方法) --- 显示队列中所有元素
// empty(方法) --- 判断队列是否为空

class Quene {
  constructor () {
    this.dataStore = []
  }

  // 入队
  enquene (element) {
    this.dataStore.push(element)
  }

  // 出队
  dequene () {
    this.dataStore.shift()
  }

  // 读取队首元素
  front () {
    return this.dataStore[0]
  }

  // 读取队尾元素
  end () {
    return this.dataStore[this.dataStore.length - 1]
  }

  // 显示列表中所有元素
  toString () {
    this.dataStore.toString()
  }

  // 判断队列是否为空
  empty () {
    return this.dataStore.length <= 0
  }
}