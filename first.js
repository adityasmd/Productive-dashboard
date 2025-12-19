function close() {
  let elem = document.querySelectorAll(".elem");
  let finalelem = document.querySelectorAll(".finalelem");
  let elemclose = document.querySelectorAll(".finalelem .elemclose");

  elem.forEach(function (elem) {
    elem.addEventListener("click", function () {
      finalelem[elem.id].style.display = "block";
    });
  });

  elemclose.forEach(function (closebtn) {
    closebtn.addEventListener("click", function () {
      finalelem[closebtn.id].style.display = "none";
    });
  });
}
close();


  let currenttask = [];
if (localStorage.getItem("currenttask")) {
  currenttask = JSON.parse(localStorage.getItem("currenttask"));
} else {
  console.log("byee");
}


let form = document.querySelector(".task form");
let taskinput = document.querySelector(".task form input");
let taskDetails = document.querySelector(".task form textarea");
let taskdone = document.querySelector(".taskdone");
let checkbox = document.querySelector("#imp");

function renderTask() {
  let sum = "";
  currenttask.forEach(function (elem) {
    sum =
      sum +
      `<div class="alltask">
                <h5>${elem.task} <span class="${elem.imp}">imp</span></h5>
                <button>Mark as Done</button>
                </div>`;
  });
  taskdone.innerHTML = sum;
  localStorage.setItem("currenttask", JSON.stringify(currenttask));

  let deletebuttons = document.querySelectorAll(".alltask button").forEach(function (btn , indx){

  btn.addEventListener("click", function(){
    currenttask.splice(indx,1)
    renderTask();
  })
  })

  
}

renderTask();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  currenttask.push({
    task: taskinput.value,
    detail: taskDetails.value,
    imp: checkbox.checked,
  });
  taskinput.value = "";
  taskDetails.value = "";
  checkbox.checked = false;
  renderTask();
});



