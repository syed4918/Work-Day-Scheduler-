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

    // local storage function (happens when save button is clicked)

    // store task in local storage and convert JS into a string for EACH timeblock
    for (var i = 0; i < 8 ; i++) {
    var savedTask = localStorage.setItem(i, setValue);
    
    }

})


// AND the information persists on page reload 
function renderTask() {

    // get local storage updated with tasks and convert text into JS object
    var renderTask = JSON.parse(localStorage.getItem("1"));
    $("").val(renderTask);

    if (renderTask !== null) {
        // select each individual timeblock and       
    } else {
        return;
    }
}

renderTask();





