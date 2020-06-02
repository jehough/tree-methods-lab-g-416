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
  currentNode = rootNode.data
  if(newNode.data < rootNode.data){
    currentNode = rootNode.left
    if (currentNode){
      findOrAdd(currentNode, newNode)
    }
    else{
      currentNode = newNode
    }
  }
}
