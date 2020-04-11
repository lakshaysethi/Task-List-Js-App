const form = $("#tasks-form")
const tasklist = $(".collection")
const clearBtn = $("#clear-tasks")
const taskinput = $("#task")



loadEventListeners()

function loadEventListeners() {
    $(document).on("submit","#tasks-form", addTask)
}

function addTask(e) {

    if(taskinput.val()==="") {
        alert("")
    }

    const li = $("li .collection-item")
    $("<div>").val(taskinput.val()).appendTo(li)
    
    const link =$("a .delete-item .secondary-content").html("<i class='fa fa-remove'</i>")
    link.appendTo(li)
    tasklist.append(li)
    taskinput.val("")
    console.log(li)
    e.preventDefault()

}