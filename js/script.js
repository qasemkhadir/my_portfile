let add = document.getElementById('btn_add')
let remove = document.getElementById('btn_remove')
let update = document.getElementById('btn_update')
let serche = document.getElementById('serche')

let table = document.querySelector("#tbody")


let name = document.getElementById('name')
let age = document.getElementById('age')
let num = document.getElementById('syrial-num')

let btn = document.getElementById('btn')

let pepole = []

if(localStorage.getItem("group") != null){
    pepole = JSON.parse(localStorage.getItem('group'))
    show_table()
    remove.style.display = "block"
}else{
    pepole = []
    remove.style.display = "none"
}


add.addEventListener('click',()=> {
    if(name.value.trim() == "" || age.value.trim() =="" || num.value.trim() == "" ){
        window.alert("هناك بيانات نااقصة")
    }else{
    let person = {
        name: name.value.trim().toLowerCase(),
        age: age.value.trim(),
        num: num.value.trim(),
    }
    
    pepole.push(person)
    
    show(person)
    
     localStorage.setItem('group',JSON.stringify(pepole))
    
    reset_values()
    remove.style.display = "block"
    }
})

function reset_values(){
    name.value = ''
    age.value = ''
    num.value = ''
}

function show(x){
    table.innerHTML += `
        <tr>
            <td>${x.name}</td>
            <td>${x.age}</td>
            <td>${x.num}</td>
        </tr>
    `
}

function show_table(){
    for(i=0 ; pepole.length>i ; i++){
        table.innerHTML += `
        <tr>
            <td>${pepole[i].name}</td>
            <td>${pepole[i].age}</td>
            <td>${pepole[i].num}</td>
        </tr>
    `
    }
}
function delete_localstorage(){
    localStorage.removeItem('group')
    pepole = []

    table.innerHTML = `
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    `
    remove.style.display = "none"
}

remove.addEventListener('click',delete_localstorage)

function serche_name(){
    let resulte = name.value.toLowerCase()
    for(i=0 ; pepole.length>i ; i++){
        if(pepole[i].name == resulte){
            name.value = pepole[i].name
            age.value = pepole[i].age
            num.value = pepole[i].num
            name.style.color = "#387b00"
            age.style.color = "#387b00"
            num.style.color = "#387b00"
            return true
        }
    }
}
serche.addEventListener('click',function(){
    serche_name()
    if(serche_name() !== true){
        name.style.color = "red";
        window.alert('not Added')
    }
})
