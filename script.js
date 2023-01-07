// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // Set date to current date and sends to header
  var currentDate = $.datepicker.formatDate ("DD MM d, yy", new Date());  
  $("#currentDay").text(currentDate);

  //Iterates for the 8 hours that are displayed on calendar
  for (i=9; i <20; i++){
    let currentHour = Number(dayjs().format("H"));
    let calendarHour = dayjs().hour(8);

    //This IF statement sets the current tense based on the current hour of the day
    if ([i] < currentHour) {
      var tense = " past"
    } else if([i] > currentHour){
      var tense = " future"
    } else {
      var tense = " present"
    }
  /*This iterates to show the hours of 9AM to 5PM on the calendar page 
  the format("hA") property converts the hour from miltary to standard time
  including an indicator of AM or PM. */
  calendarHour = calendarHour.add([i-8],'hour').format("hA")

  /* This code block is interated 9 times and has three variables that change with each 
  FOR LOOP.  NOTE the use of the escape character of "\" as this string contains HTML with 
  needed open and close quotations*/ 
  var codeBlock = ("<div id=\"hour-" + [i] +'"'+ " class=\"row time-block" + tense +" \"><div class=\"col-2 col-md-1 hour text-center py-3\">" + calendarHour + "</div><textarea class=\"col-8 col-md-10 description\" rows=\"3\"> </textarea><button class=\"btn saveBtn col-2 col-md-1\" aria-label=\"save\"><i class=\"fas fa-save\" aria-hidden=\"true\"></i></button></div>");

  /* This appends the CodeBlock to the DIV with the class ".container" and essentially
  creates the calendar on the page.  NOTE: this did not work if the bootstrap tag of 
  px-5 is included in the selector*/
  $(".container-lg").append(codeBlock);

}

  /*This function retrives the text entered into the textarea of the save button that 
  is clicked*/
  $("button").on("click", function(){
    var parentOfButton = $(this).parent().attr('id');
    var calendarEntry = $(this).prev('textarea').val();
    console.log("This is the parent of the button: " + parentOfButton);
    console.log("This is  the entry: " +calendarEntry);
    localStorage.setItem(parentOfButton,JSON.stringify(calendarEntry));
    var inlocalStorage = JSON.parse(localStorage.getItem(parentOfButton))
    console.log("this is from local storage: "+ inlocalStorage);
  })



  console.log("this is in localsytorage 9 :  " + JSON.parse(localStorage.getItem("hour-9")));
  console.log("this is in localsytorage 10:  " + JSON.parse(localStorage.getItem("hour-10")));
  console.log("this is in localsytorage 11:  " + JSON.parse(localStorage.getItem("hour-11")));
  console.log("this is in localsytorage 12:  " + JSON.parse(localStorage.getItem("hour-12")));
  console.log("this is in localsytorage 13:  " + JSON.parse(localStorage.getItem("hour-13")));
  console.log("this is in localsytorage 14:  " + JSON.parse(localStorage.getItem("hour-14")));
  console.log("this is in localsytorage 15:  " + JSON.parse(localStorage.getItem("hour-15")));
  console.log("this is in localsytorage 16:  " + JSON.parse(localStorage.getItem("hour-16")));
  console.log("this is in localsytorage 17:  " + JSON.parse(localStorage.getItem("hour-17")));






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


