function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode)
  if(currentNode.right){
    inOrder(currentNode.left)
  }
}
