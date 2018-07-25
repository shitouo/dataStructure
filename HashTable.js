/**
 * 散列表
 */
// 散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。散列使用的数据格式叫做散列表
// 在散列上插入、删除、取用数据都非常快，但是对于查找操作来说却比较慢，比如获取最大值或者最小值
// 散列表是通过数组来实现的。数组的长度需要预先定义，且一般要取一个合适的质数，但也可以随时增加。这个长度的选择要尽量减少碰撞情况的发生
// 散列表会将要存储的值通过散列函数生成一个数字索引，这个数字索引的范围在0到之前预定义的数组长度之间，并且尽量唯一。所以散列函数的选取就很重要，散列函数的选取要根据实际值的类型来选择。
// 但是即便选取了一个高效的散列函数，依然存在将两个值映射成同一个数字索引的情况，这种情况就叫做 碰撞 

// 碰撞处理
// 开链法 --- data存储时改为存储一个数组，形成一个二维数组[[key1,val1,key2,val2], [key3,val3,key4,val4]]
// 线性探测法 --- 将key和value分开存储在两个数组tables和values中。计算出key对应的index后，判断tables中index位置是否有数据，如果有的话，代表产生了碰撞，然后index循环加1，直到没有碰撞，然后在这个位置的values数组中存储value

class HashTable {
  constructor () {
    this.tableLength = 137
    this.table = new Array(this.tableLength)
  }

  // 散列函数 --- 散列函数的选取依赖于键值的类型。如果键值是整型，最简单的散列函数就是用数组长度对键值取余。这种散列方式称为除留余数法。
  // 在很多应用中，键值是字符串类型。乍一看，将字符串中每个字符的ASCII码相加，然后对数组长度取余似乎是一种不错的方法。
  simpleHash (data) {
     let total = Array.prototype.reduce.call(data, (total, currentValue) => total + currentValue.charCodeAt(0), 0)
     return total % this.tableLength
  }

  // 下面是更好的散列函数。
  // 因为上面的散列函数，会产生碰撞。当某些名字的ASCII码加起来相等时就产生了碰撞。
  // 为了避免碰撞，首先要确保数组的长度是个质数，这和计算散列值时取余运算有关
  // 数组的长度应该100以上，这是为了让数据在散列表中分布地更加均匀
  // 有了合适的长度后，还要有更好的散列方法。霍纳算法很好地解决了这个问题，同样也是计算每个字母的ASCII值，但是在求和时，要给每个值乘以一个质数
  betterHash (data) {
    const H = 37
    let total = Array.prototype.reduce.call(data, (total, currentValue) => total + currentValue.charCodeAt(0) * H, 0)
  }

  put (key, data) {
    let index = this.betterHash(key)
    this.table[index] = data
  }

  get (key) {
    return this.table[this.betterHash(key)]
  }
}