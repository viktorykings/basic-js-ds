const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null
  }
  root() {
    if(!this.rootNode){
      return null
    }else return this.rootNode
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add( data ) {
    this.rootNode = addNode(this.rootNode, data)
    function addNode(node, data){
      if(!node){
        return  new Node(data)
      }
      if(node.data === data){
        return node
      }
      if (data < node.data){
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data)
      }
      return node
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    return hasNode(this.rootNode, data)
    function hasNode(node, data){
      if(!node){
        return false
      }
      if(node.data == data){
        return true
      }
      if(data < node.data){
        return hasNode(node.left, data)
      } else return hasNode(node.right, data)
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find( data ) {
    return findNode(this.rootNode, data)
    function findNode(node, data){
      if(!node){
        return null
      }
      if(node && node.data === data){
        return node
      }
        if(data < node.data){
          return findNode(node.left, data)
        } else return findNode(node.right, data)
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    return removeNode(this.rootNode, data)
    function removeNode(node, data){
      if(!node){
        return null
      }
        if(data < node.data){
          node.left = removeNode(node.left, data)
          return node
        } else if(data > node.data){
          node.right = removeNode(node.right, data)
          return node
        }  else {
          if(!node.left && !node.right){
            return null
          }
          if(!node.left){
            node = node.right
            return node
          }
          if(!node.right){
            node = node.left
            return node
          }
          let minRight = node.right
          while(minRight.left){
            minRight = minRight.left
          }
          node.data = minRight.data
          node.right = removeNode(node.right, minRight.data)
          return node
        }
      }
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.rootNode){
      return null
    }
    let node = this.rootNode
    while(node.left){
      node = node.left
    }
    return node.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if(!this.rootNode){
      return null
    }
    let node = this.rootNode
    while(node.right){
      node = node.right
    }
    return node.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};