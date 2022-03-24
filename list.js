let selectedListCount = document.getElementById('SelectedListLength')
let data1 = localStorage.getItem('newList')
console.log(selectedListCount)
selectedListCount.innerText = data1.split(',').length

let slectedArray = data1.split(',')
const doc = document.getElementById("selected-name-list")

function createList(data){
    let createdNavElement = document.createElement("div")
    // createdNavElement.className = "div1" //used to add class to created element
    createdNavElement.innerHTML = `<ul>
        <li>${data}</li>
        </ul>
    `;
    return createdNavElement
}

for(let i=0; i<slectedArray.length; i++){
    let ele = createList(slectedArray[i])
    doc.appendChild(ele);
}