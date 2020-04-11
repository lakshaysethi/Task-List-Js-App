const form = $("#tasks-form")
const tasklist = $(".collection")
const clearBtn = $("#clear-tasks")
const taskinput = $("#task")



loadEventListeners()

function loadEventListeners() {
    form.addEventListener("submit", addTask)
}

function addTask() {
    if(taskinput.value==="") {
        alert("")
    }

    const li = $("li.collection-item")
    
}