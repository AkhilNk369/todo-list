function addtask() {
    task = taskinput.value
    console.log(task);
    if (task == "") {
        alert("please fill the form")
    } else {

        let li = document.createElement('li')
        li.innerHTML =
         `<div class="flex justify-evenly  mt-6 items-center">
           <img src="https://www.freeiconspng.com/uploads/tick-icon-44.png" width="30px">                 
        ${task}
        <button type="button" onclick="edittask(this)"><img src="https://www.freeiconspng.com/thumbs/edit-icon-png/text-edit-icon-31.png" width="30px"></button>
           <button type="button" onclick="deltask(this)"><img src="https://www.freeiconspng.com/uploads/red-delete-button-png-1.png" width="30px"></button></button>
        </div>`



        tasklist.appendChild(li)
        taskinput.value=""


    }
}

function edittask(button){
    console.log(button);
    li= button.parentNode
    console.log(li);
    console.log(li.childNodes[2]);
    currentText=li.childNodes[2].textContent
    console.log(currentText);
     newText=prompt("enter Task",currentText)
     if (newText) {
        li.childNodes[2].textContent=newText
        
     } 
}
function deltask(button){
    console.log(button);
    console.log(button.closest("li"));
    let li = button.closest("li")
    li.remove()

    
    
}
