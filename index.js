function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
}