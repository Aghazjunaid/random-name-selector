let data = [
    "Aghaz",
    "Ayush",
    "Arwaz",
    "Arman",
    "Rohit",
    "Bilal",
    "Pranay",
    "Farhan",
    "Aaliya",
    "Raihan",
    "Aquib",
    "Faiyaz",
    "Tausif",
    "Silpy",
    "Rishabh"
]


let newArr = []
function displayLength(){
    let count = document.getElementById('countLength')
    let data1 = localStorage.getItem('list')
    count.innerText = data1.split(',').length
}

function maintainList(i){
    newArr.push(data[i])
    localStorage.setItem('newList',newArr)
    data.splice(i,1)
    localStorage.setItem("list",data)
    displayLength()
}

function getRandomData(){
    let index = Math.floor(Math.random()*data.length)
    let selectedData = data[index];
    if(selectedData){
        let ele = document.querySelector('#selected-name');
        ele.innerText = selectedData
        maintainList(index)
    }else{
        let ele = document.querySelector('#selected-name');
        ele.innerText = "Array is Empty"
        let count = document.getElementById('countLength')
        count.innerText = 0
    }
    
}

let btn = document.querySelector("#randomBtn")
btn.addEventListener('click',getRandomData)