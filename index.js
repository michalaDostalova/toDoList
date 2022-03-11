const elFormt = document.querySelector(".form")
const elInput = document.querySelector(".input")
const elUl = document.querySelector(".list")
let list = JSON.parse(localStorage.getItem("list"))

list.forEach(task=>{
    toDoapp(task)
})


elFormt.addEventListener("submit", (e) => {
    e.preventDefault();
    toDoapp();
})

function toDoapp(task) {
    let newTask = elInput.value;
    if(task){
        newTask=task.name
    }

    const elLi = document.createElement("li")
    elLi.innerText = newTask;;
    elUl.appendChild(elLi);
    elInput.value = "";
    const elBtn = document.createElement("div");
    elBtn.innerHTML = `
  <i class="fas fa-trash"></i>
  `;
    elLi.appendChild(elBtn);
    const elBtn1 = document.createElement("div");
    elBtn1.innerHTML = ` <i class="fas fa-check-square"></i>`;
    elLi.appendChild(elBtn1);

    elBtn.addEventListener('click', () => {
        elBtn.remove()
    })

    elBtn1.addEventListener('click', () => {
        elLi.classList.toggle("checked")
        storage ()

    })


    elBtn.addEventListener('click', () => {
        elLi.remove()
        storage()
    })
    storage ()
}

function storage (){
   const elLis = document.querySelectorAll('li')
  list = []
    elLis.forEach((elLi)=>{
       list.push({
           name:elLi.innerText,
           checked:elLi.classList.contains("checked")
       }) 
    })
localStorage.setItem("list",JSON.stringify(list))
}
