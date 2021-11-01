//ensure that main.js in properly linked and moment is installed 
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

//display current day at the top of the calendar
var date = moment();
$("#currentDay").text(date.format("MMM Do, YYYY"));

// past, present. future times 

// get the task that needs to be saved 
var setValue = $(".saveBtn").siblings(".form-control").val();
console.log(setValue); // ensure setValue has a valid output

// when save button is clicked
$(".saveBtn").click(function () {
    // get respective text and show in console
    var setValue = $(this).siblings(".form-control").val();
    console.log(setValue);
var getTime = $(this).siblings(".form-control").attr("id");
    console.log(getTime);
    localStorage.setItem(getTime,setValue)

    // local storage function (happens when save button is clicked)

    // store task in local storage and convert JS into a string for EACH timeblock
    

})


// AND the information persists on page reload 
function renderTasks() {

// retrieve data from local storage  and convert text into JS object for each timeblock
var render9AM = localStorage.getItem("9AM"); 
$("#9AM").val(render9AM);

var render10AM = localStorage.getItem("10AM"); 
$("#10AM").val(render10AM);

var render11AM = localStorage.getItem("11AM"); 
$("#11AM").val(render11AM);

var render12PM = localStorage.getItem("12PM"); 
$("#12PM").val(render12PM);

var render1PM = localStorage.getItem("1PM"); 
$("#1PM").val(render1PM);

var render2PM = localStorage.getItem("2PM"); 
$("#2PM").val(render2PM);

var render3PM = localStorage.getItem("3PM"); 
$("#3PM").val(render3PM);

var render4PM = localStorage.getItem("4PM"); 
$("#4PM").val(render4PM);

var render5PM = localStorage.getItem("5PM"); 
$("#5PM").val(render5PM);
    

    // if (renderTask !== null) {
          
    // } else {
    //     return;
    // }
}

renderTasks();





