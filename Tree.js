/**
 * 树
 */
// 树算是一种高级的数据结构
// 链表适合取删元素，但是不适合查找元素（最大值、最小值）
// 数组适合查找元素（最大值、最小值），但是不适合取删元素
// 树既适合取用元素，也适合查找元素（最大值、最小值）

// 树由边和节点组成
// 二叉树是一种特殊的树，它的子节点数不超过2个（<=2）
// 从一个节点到另一个节点的这一组边称为路径。以某种特定的顺序访问树中所有的节点称为树的遍历

class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
  show () {
    return this.data
  }
}

// 二叉查找树
class BST {
  constructor () {
    this.root = null
  }
  insert (data) {
    let newNode = new Node(data)
    if (!this.root) {
      this.root = newNode
      return
    }
    let currNode = this.root
    while(currNode) {
      if(data < currNode.data) {
        if (!currNode.left) {
          currNode.left = newNode
          return
        }
        currNode = currNode.left
      }else {
        if(!currNode.right) {
          currNode.right = newNode
          return
        }
        currNode = currNode.right
      }
    }
  }
  // 中序遍历 --- 左中右
  inOrder (node) {
    if(node) {
      this.inOrder(node.left)
      console.log(node.data)
      this.inOrder(node.right)
    }
  }
  // 先序遍历 --- 中左右
  preOrder (node) {
    if (node) {
      console.log(node.data)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  // 后序遍历 --- 左右中
  postOrder (node) {
    if (node) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.data)
    }
  }

  // 查找最小值
  getMin () {
    this.getMinFromSubtree(this.root)
  }

  // 查找最大值
  getMax () {
    let currNode = this.root
    while (currNode) {
      if (currNode.right) {
        currNode = currNode.right
      }
    }
    return currNode.data
  }

  // 查找指定值
  find (data) {
    let currNode = this.root
    while (currNode) {
      if (currNode.data === data) {
        return currNode
      }
      if (data < currNode.data) {
        currNode = currNode.left
      }else {
        currNode = currNode.right
      }
    }
    return null
  }

  getMinFromSubtree (node) {
    if(!node) {
      return null
    }
    let currNode = node
    while(currNode) {
      if(currNode.left) {
        currNode = currNode.left
      }
    }
    return currNode
  }

  remove (data) {
    this.root = this.removeNode(this.root, data)
  }
  
  removeNode (node, data) {
    if(!node) {
      return null
    }
    if(node.data === data) {
      if(!node.left && !node.right) {
        return null
      }
      if(!node.right) {
        return node.left
      }
      if(!node.left) {
        return node.right
      }
      let minNodeFromRightSubTree = this.getMinFromSubtree(node.right)
      node.data = minNodeFromRightSubTree.data
      minNodeFromRightSubTree = null
      return node
    }
    if(node.data > data) {
      node.left = this.removeNode(node.left, data)
      return node
    }
    if(node.data < data) {
      node.right = this.removeNode(node.right, data)
      return node
    }
  }
}
