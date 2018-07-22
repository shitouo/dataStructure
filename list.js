/**
 * 列表
 */

// 列表类需要实现的属性和方法
//   listSize(属性) --- 列表的元素个数
//   pos(属性) --- 列表的当前位置
//   length(属性) --- 返回列表中元素的个数
//   clear(方法) --- 清空列表中的所有元素
//   toString(方法) --- 返回列表的字符串形式
//   getElement(方法) --- 返回当前位置的元素
//   insert(方法) --- 在现有元素后插入新元素
//   append(方法) --- 在列表的末尾添加新元素
//   remove(方法) --- 从列表中删除元素
//   front(方法) --- 将列表的当前位置移动到第一个元素
//   end(方法) --- 将列表的当前位置移动到最后一个元素
//   prev(方法) --- 将当前位置前移一位
//   next(方法) --- 将当前位置后移一位
//   currPos(方法) --- 返回列表的当前位置
//   moveTo(方法) --- 将当前位置移动到指定位置

class List {
  constructor () {
    this.arr = []
    this.listSize = this.arr.length
    this.pos = 0
    this.length = this.arr.length
  }
  // 清空所有元素
  clear () {
    this.arr.length = 0
  }
  // 返回列表的字符串形式
  toString () {
    return Array.prototype.toString.call(this.arr)
  }
  // 返回当前位置的元素
  getElement () {
    return this.arr[this.pos]
  }
  // 在现有元素后插入新元素
  insert () {
    let beforeArr = this.arr.slice()
  }
}
