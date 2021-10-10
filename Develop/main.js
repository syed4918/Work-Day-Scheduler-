console.log("Hello world");

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

// $("button").on("click", function (event) {
//   saveTask();
// });

// need empty array for local storage to add input too
var task = [];
if (localStorage.getItem("task") != null) {
  task = JSON.parse(localStorage.getItem("task"));
  renderTask();
}

$("button").on("click", function (event) {
  for (var i = 0; i < 24; i++) {
    var taskInput = $("#activity-" + i).val();
    // use val() not .value cause of jQuery
    console.log(taskInput);
    // task.push(taskInput);
    // push adds a value to the end of the array, task[i] will replace the value in the array at index i
    task[i] = taskInput
    saveTask();
  }
});

function saveTask() {
    localStorage.setItem("task", JSON.stringify(task));
  }

// will need another for loop needed to keep value on page
function renderTask(){
    for (var i = 0; i < 24; i++) {
        $("#activity-" + i).text(task[i])
    } 
}





var CurrentTime = document.getElementsByTagName("h2");
// get array of all h2 elements

function timeColor() {
  for (var i = 0; i < 24; i++) {
    // var inputText = "activity-" + i;

    // used parseInt to turn all data-time strings to integers to be compared with current time
    var timeData = parseInt(CurrentTime[i].getAttribute("data-time"));

    if (moment().format("k") > timeData) {
      console.log("past");
      $("#activity-" + i).addClass("past-time");
    } else if (moment().format("k") < timeData) {
      console.log("future");
      $("#activity-" + i).addClass("future-time");
    } else {
      console.log("present");
      $("#activity-" + i).addClass("present-time");
    }
  }
}
timeColor();

// for loop to reduce html documentation?