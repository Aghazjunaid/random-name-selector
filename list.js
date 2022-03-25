function getLength(){
    let selectedListCount = document.getElementById('SelectedListLength')
    let data1 = localStorage.getItem('newList')
    if(data1){
        selectedListCount.innerText = data1.split(',').length
    }else{
        selectedListCount.innerText = 0
    }
}

getLength()

let data1 = localStorage.getItem('newList')
let slectedArray = data1.split(',')
const doc = document.getElementById("selected-name-list")

function createList(data){
    let createdNavElement = document.createElement("div")
    // createdNavElement.className = "div1" //used to add class to created element
    createdNavElement.innerHTML = `<ul>
        <li>${data}  <button class="removeData">Delete</button></li>
        </ul>
    `;
    return createdNavElement
}

for(let i=0; i<slectedArray.length; i++){
    let ele = createList(slectedArray[i])
    doc.appendChild(ele);
}

const deleteBtn = document.querySelectorAll(".removeData");

deleteBtn.forEach( btn => {
    btn.addEventListener('click',deleteData)
})

function deleteData(){
    let str = String(this.parentElement.innerText).split(' ')
    let targetStr = str.filter(x=> x !=='Delete').join('')

    let data = localStorage.getItem('newList').split(',')
    let newData = data.filter(ele => ele !== targetStr)

    this.parentElement.remove()
    localStorage.setItem('newList',newData)
    getLength()
    updateOriginalList(targetStr)
    console.log(newData)

}
function updateOriginalList(targetStr){
    let data1 = localStorage.getItem('list')
    let arrData = data1.split(',')
    arrData.push(targetStr)
    localStorage.setItem('list',arrData)
    console.log(arrData)
}