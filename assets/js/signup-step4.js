/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Step 2 form
Description: Logic for step 2 form
(c) Copyright by BRS with Nyros. 
**/

// Validation for the form 2 [radio buttons and dropdown] for signup-step2.html
function validate() {
  let plan = document.forms['myform']['plan'].value
  let radio = document.forms['myform']['radio'].value

  if (plan == '') {
    document.getElementById('error1').innerHTML = 'Please select anyone'

    return false
  } else if (plan == 'a' || plan == 'b' || plan == 'c') {
    document.getElementById('error1').innerHTML = ''
  }

  if (radioButton == 'Select an Option') {
    document.getElementById('error2').innerHTML = 'Please select anyone'
    return false
  } else if (radioButton == 'newpaper' || radioButton == 'friend' || radioButton== 'Social-media') {
    document.getElementById('error2').innerHTML = ''
  }
}else if (type == 'radio') {
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
