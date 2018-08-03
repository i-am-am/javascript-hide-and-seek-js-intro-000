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
  
}
