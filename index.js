function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('nested.target')
}

function increaseRankBy(n){
  var l = document.querySelectorAll('ul.ranked-list')
  for (var i = 0; i < l.length; i++) {
    l[i].innerHTML = parseInt(l[i].innerHTML) + n
  }
}

function deepestChild(){
  var current = document.getElementById('grand-node')
  var next = []
  while (current){
    if (current.children.length === 0){
      return current
    }
    for (var i = 0; i < current.length; i++){
      next.push(current[i])
    }
    current = next.shift()
  }
  return null
}
