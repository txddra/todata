// document.querySelector('.toggle-priorities').addEventListener('click',function(){

// })

document.querySelector('.hide-complete').addEventListener('click', function(){
    
const hideME = document.querySelector('.hide-complete')
if(hideME.innerText === "Hide Complete"){
    
hideME.innerText = "Show Complete"
currentTodos = justNotComplete(currentTodos)

}else if(hideME.innerText === "Show Complete"){
    hideME.innerText = "Hide Complete"
    currentTodos = todos.slice()

}
refreshTodos()

})

document.querySelector('.hide-low-priority').addEventListener('click', function(){

})

document.querySelector('.high-priority-first').addEventListener('click',function(){

})

document.querySelector('.complete-last').addEventListener('click', function(){
    
})