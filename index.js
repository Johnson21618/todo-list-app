let input = document.getElementById("input");
let addButton = document.getElementById("addBtn");
let list = document.getElementById("list");
addButton.addEventListener("click", function() {
    if (input.value === "") {
        alert("Enter a task...!")
    } else {
        let listItem = document.createElement("li");
        listItem.innerText = input.value;
        list.appendChild(listItem);
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        listItem.appendChild(deleteBtn);
    }
    input.value = "";
    dataSaving();
    dataRetrieve();

})
list.addEventListener("click", function(event) {
    console.log(event);
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("check");
    }
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
    dataSaving();
    dataRetrieve();
})

function dataSaving() {
    localStorage.setItem("todoData", list.innerHTML);
}

function dataRetrieve() {
    list.innerHTML = localStorage.getItem("todoData");
}
dataRetrieve();