/**
 * 栈
 */
// 栈是一种特殊的列表。但是栈更高效，因为栈只能栈顶添加或者删除，所以操作很快
// empty(属性) --- 栈内是否含有元素
// push(方法) --- 入栈
// pop(方法) --- 出栈
// peek(方法) --- 预览栈顶元素
// length(方法) --- 记录栈内元素个数
// clear(方法) --- 清除栈内所有元素

class Stack {
  constructor () {
    this.dataStore = []
    this.top = 0 // 指向栈顶下一个空元素位置
    this.empty = !!this.top
  }

  // 入栈
  push (element) {
    this.dataStore.push(element)
    this.top++
  }

  // 出栈
  pop () {
    if (this.top > 0) {
      this.dataStore.pop()
      this.top--
    }else {
      console.log('栈已空')
    }
  }

  // 预览栈顶元素
  peek () {
    return this.dataStore[this.top - 1]
  }

  // 获取栈内元素的个数
  length () {
    return this.top
  }

  // 清除栈内所有元素
  clear () {
    this.dataStore.length = 0
    this.top = 0
  }
}
