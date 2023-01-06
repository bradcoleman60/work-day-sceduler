// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

// Set date to current date and sends to webpage
var currentDate = $.datepicker.formatDate ("DD MM d, yy", new Date());  
$("#currentDay").text(currentDate);


//Iterates for the 8 hours that are displayed on calendar
for (i=9; i <18; i++){

  let currentHour = dayjs().format("HH");
  let calendarHour = dayjs().hour(8);
  
  //This IF statement sets the current tense based on the current hour of the day
  if ([i] === currentHour) {
    var tense = " present"
  } if([i] < currentHour){
    var tense = " past"
  } else {
    var tense = " future"
  }
  //This iterates to show the hours of 9AM to 5PM on the calendar page
  calendarHour = calendarHour.add([i-8],'hour').format("hA")



var codeBlock = ("<div id=\"hour-" + [i] +'"'+ " class=\"row time-block" + tense +" \"><div class=\"col-2 col-md-1 hour text-center py-3\">" +calendarHour+ "</div><textarea class=\"col-8 col-md-10 description\" rows=\"3\"> </textarea><button class=\"btn saveBtn col-2 col-md-1\" aria-label=\"save\"><i class=\"fas fa-save\" aria-hidden=\"true\"></i></button></div>");

$(".container-lg").append(codeBlock);

}


for (i=9;i<18;i++){
let calendarHour = dayjs().hour(8);
calendarHour = calendarHour.add([i-8],'hour').format("hA")
console.log(calendarHour);

}



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
