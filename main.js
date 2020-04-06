document.querySelector('.toggle-priorities').addEventListener('click',function(){
const hideME = document.querySelector('.toggle-priorities')
if(hideME.innerText === "Show Priorities"){

    hideME.innerText = "Hide Priorities"
    currentTodos = namesAndPriorities(currentTodos)
    

}else if(hideME.innerText === "Hide Priorities"){

    hideME.innerText = "Show Priorities"
    currentTodos = todos.slice()
}
refreshTodos(currentTodos)

})

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
    
        const hideME = document.querySelector('.hide-low-priority')
        if(hideME.innerText === "Hide Low Priority"){ currentTodos = priority2Only(currentTodos)
        hideME.innerText ="Show Low Priority"
        }
        else if(hideME.innerText === "Show Low Priority"){
            hideME.innerText ="Hide Low Priority"
            currentTodos = todos.slice()
       
        }
        
        refreshTodos(currentTodos)
    })


document.querySelector('.high-priority-first').addEventListener('click',function(){
    
        const hideME = document.querySelector('.high-priority-first')
        if (hideME.innerText === "High Priority First") {
            currentTodos = priority2First(currentTodos)
            hideME.innerText = "Original Order";
        } else if (hideME.innerText === "Original Order"){hideME.innerText = "High Priority First"
            currentTodos = todos.slice()
            
    
        }
        
        refreshTodos()

})

document.querySelector('.complete-last').addEventListener('click', function(){
    const hideME = document.querySelector('.complete-last')
    if (hideME.innerText === "Complete Last") {
        currentTodos = notCompleteFirst(todos.slice())
        hideME.innerText = "Original Order"
    } else if (hideME.innerText ==="Original Order"){
        hideME.innerText = "Complete Last"
        currentTodos = todos.slice()
        
    }
    refreshTodos()

    
})

document.querySelector('.clear-all').addEventListener('click',function(){
    clearTodos()
})