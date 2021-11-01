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

    // store task in local storage and convert JS into a string
    localStorage.setItem("setValue", JSON.stringify(setValue));

    // AND the information persists on page reload 
    function renderTask() {
        // get local storage updated with task and convert text into JS object
        var renderTask = JSON.parse(localStorage.getItem("setValue"));
        if (renderTask !== null) {
            $(".saveBtn").siblings(".form-control").val();   
        } else {
            return;
        }
    }
})




