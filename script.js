const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");
const totalDisplay = document.getElementById("total");
const completedDisplay = document.getElementById("completed");

function addTask(){
    if(inputBox.value == ''){
        alert("Task Cannot Be Empty!");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        totalTask();
    }    
    inputBox.value = "";
    saveData();
}

function totalTask(){
    const total = listContainer.querySelectorAll("li");
    totalDisplay.textContent = total.length;
}

function compTask(){
    const comp = listContainer.querySelectorAll("li.checked");
    completedDisplay.textContent = comp.length;
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.add("checked");
        saveData();
        compTask();
    } else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
        totalTask();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
