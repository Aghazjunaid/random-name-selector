let selectedListCount = document.getElementById('SelectedListLength')
let data1 = localStorage.getItem('newList')
console.log(selectedListCount)
selectedListCount.innerText = data1.split(',').length