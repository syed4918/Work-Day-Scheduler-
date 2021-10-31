//ensure that main.js in properly linked and moment is installed 
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

//display current day at the top of the calendar
var date = moment();
$("#currentDay").text(date.format("MMM Do, YYYY"));

// past, present. future times 


// save timeblock content to local storage 

// get the task that needs to be saved 
var getValue = $(".saveBtn").siblings(".form-control").val();
console.log(getValue); // ensures getValue returns a response the console


// add click function to save button 
$(".saveBtn" ).click(function() {
    var getValue = $(this).siblings(".form-control").val();
    console.log(getValue); // ensures getValue returns a response the console

    // save task to local storage
    // get local storage updated with task
    // set local storage with task
  });

// AND the information persists on page reload 
