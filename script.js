const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === "") {
        alert("Please enter a task");
    } else {
        // creating a variable called li and adding task in li
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        // \u00d7 is the cross icon
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else {
            e.target.parentElement.remove();
            saveData();
        }
    },
    false
);

function saveData() {

    //add data in local storage so that it remain unchanged after refresh the page
    localStorage.setItem("data", listContainer.innerHTML);
}


// functtion for getting data from local storage
function showTask() {
    //
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
