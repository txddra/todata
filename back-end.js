

/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todo) {
  return todo.text
}

const getCompleteness = function (todo) {
  return todo.complete
}

const getPriority = function (todo) {
  return todo.priority
}

const isComplete = function(todo) {
  return todo.complete
}

const isNotComplete = function(todo) {
  return !isComplete(todo)
}

const isHighPriority = function(todo) {
  return todo.priority === 2
}

const isLowPriority = function(todo) {
  return todo.priority === 1
}
const preNotComplete = function(param,paramA){
  if (getCompleteness(param) > getCompleteness(paramA)){
    return 1
  } else if(getCompleteness(param) < getCompleteness(paramA)){
    return -1
  } 
    return 0
  }

  const prePriority2 = function(param,paramA){
    if (getPriority(param) > getPriority(paramA)){
      return -1
    } else if(getPriority(param) < getPriority(paramA)){
      return 1
    } 
      return 0
  }
  

/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function (todos) {
  return todos.map(getTodoName)
}

const namesAndPriorities = (todos) => todos.map((todo) => {
    const priority = todo.priority === 2 ? 'High' : 'Low';

    todo.text = `${todo.text} - ${priority}`
    return todo
})

const justNotComplete = function (todos) {
  return todos.filter(isNotComplete)
}

const justComplete = function (todos) {
  return todos.filter(isComplete)
}

const priority2Only = function (todos) {
  return todos.filter(isHighPriority)
}

const priority1Only = function (todos) {
  return todos.filter(isLowPriority)

}
 const notCompleteFirst = function(todos){
  return todos.filter(preNotComplete)
 }

const priority2First = function(todos){
  return todos.filter(prePriority2)
}


if (typeof notCompleteFirst === 'undefined') {
  notCompleteFirst = undefined;
}

if (typeof priority2First === 'undefined') {
  priority2First = undefined;
}

module.exports = {
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}
