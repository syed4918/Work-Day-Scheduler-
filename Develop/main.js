// time function
var currtime = moment("10/6/2021 6:00 am", "MM/DD/YYYY hh:mm a");
    var appttime = moment("10/6/2021 7:00 am", "MM/DD/YYYY hh:mm a");
    var currtimeX = parseInt(currtime.format("x")) 
    var appttimeX = parseInt(appttime.format("x"))
    var currNewTime = moment("10/6/2021 6:36 am", "MM/DD/YYYY hh:mm a");
    var currNewTimeX = parseInt(currNewTime.format("x"))

    if(appttimeX < currNewTime){
    console.log("Don't have time..."); }

    else{
    console.log("Still have time...");
    console.log( (appttimeX - currNewTimeX) / 1000 / 60 / 60 + "hours");}