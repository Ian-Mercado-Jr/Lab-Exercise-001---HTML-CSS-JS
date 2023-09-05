function addListItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newTask").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("newTask").value = "";
} /*completed the JS function addListItem() */