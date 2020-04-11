const form = $("#task-form")
const tasklist = $(".collection")
const clearBtn = $(".clear-tasks")
const taskinput = $("#task")


const filter = $("#filter")
clearBtn.click(clearTasks)

tasklist.click(removeTask)

$(document).on("submit", "#task-form", function (e) {


    if (taskinput.val() === "") {
        alert("add a task please")
    } else {

        const li = $("<li class='collection-item'>")


        li.html(taskinput.val())

        const link = $("<a class='delete-item secondary-content'>").html("<i class='fa fa-remove'></i>")

        link.appendTo(li)
        tasklist.append(li)

        taskinput.val("")

        e.preventDefault()

    }


})

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm("are you sure")) e.target.parentElement.parentElement.remove()
    }
}

function clearTasks(e) {
    tasklist.html("")
}


filter.on('keyup', function (e) {
    const keyword = filter.val().toLowerCase();
    var tasks = $(".collection-item")
    tasks.toArray().forEach((task) => {
        
        try {
            $(task).children().each(() => {
                if (this.val() === keyword) {
                    tasks.hide();
                    task.show();
                }
            })
        } catch (e) {
            
        }

    })
})

