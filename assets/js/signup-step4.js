else if (type == 'radio') {
  let l = x[i].parentNode.children.length
  for (let j = 0; j < l; j++) {
    if (x[i].parentNode.children[j].type == 'radio') {
      radioButton++
    }
    if (x[i].parentNode.children[j].checked == true) {
      radioCheck++
      x[i].style.outline = '0px'
    }
  }
  if (radioButton > 0 && radioCheck == 0) {
    x[i].focus()
    x[i].style.outline = '1px solid red'
    return false
  } else {
    radioButton = 0
    radioCheck = 0
  }
