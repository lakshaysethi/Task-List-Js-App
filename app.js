const form = $("#task-form")
const tasklist = $(".collection")
const clearBtn = $("#clear-tasks")
const taskinput = $("#task")


$(document).on("submit","#task-form", function (e){
    

        if(taskinput.val()==="") {
            alert("")
        }
    
        const li = $("<li class='collection-item'>")
        console.log(li)
        var string = $("<div>").html(taskinput.val())
        console.log(string)
        string.appendTo(li)
        
        const link =$("<a class=delete-item secondary-content>").html("<i class='fa fa-remove'</i>")
        console.log(li)
        link.appendTo(li)
        tasklist.append(li)
        console.log(li)
        taskinput.val("")
        console.log(li)
        e.preventDefault()
    
    
})
