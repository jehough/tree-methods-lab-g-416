function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}


function findOrAdd(rootNode, newNode){
  let currentNode = rootNode
  if(newNode.data < rootNode.data){
    if (currentNode.left){
      findOrAdd(currentNode.left, newNode)
    }
    else{
      currentNode.left = newNode
    }
  }
  else if (newNode.data > rootNode.data) {
    if (currentNode.right){
      findOrAdd(currentNode.right, newNode)
    }
    else{
      currentNode.right = newNode
    }
  }
  else if (newNode.data === rootNode.data) {
    return true
  }
}
