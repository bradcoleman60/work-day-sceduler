// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

// Set date to current date and sends to webpage
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
  needed open and close paraentheses*/ 
  var codeBlock = ("<div id=\"hour-" + [i] +'"'+ " class=\"row time-block" + tense +" \"><div class=\"col-2 col-md-1 hour text-center py-3\">" +calendarHour+ "</div><textarea id=\"text-area-" + [i] + '"' + "class=\"col-8 col-md-10 description\" rows=\"3\"> </textarea><button id=\"button-number-" + [i] + '"' + "class=\"btn saveBtn col-2 col-md-1\" aria-label=\"save\"><i class=\"fas fa-save\" aria-hidden=\"true\"></i></button></div>");
  
  /* This appends the CodeBlock to the DIV with the class ".container" and essentially
  creates the calendar on the page.  NOTE: this did not work if the bootstrap tag of 
  px-5 is included in the selector*/
  $(".container-lg").append(codeBlock);

}

// $("#text-area-10").text("this is brad")

// $("#button-number-9").click(function(){
//     var inputText = $("#text-area-9").val();
//     console.log(inputText);
//   })

// console.log($("#hour-8").children('textarea'));

{/* <div class="container-lg px-5">
      <div id="hour-8" class="row time-block past">
        <div class="col-2 col-md-1 hour text-center py-3">8AM</div>
        <textarea class="col-8 col-md-10 description" rows="3">TESTING</textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
    </div> */}


//Gets the text that is in the text area of hour-8. 
var xxx = $("#hour-8").children().eq(1).text()
console.log("this is it " + xxx)

var parentOfButton = $(".saveBtn").parent().attr('id');
console.log(parentOfButton);

$("button").on("click", function(){
  var parentOfButton1 = $(this).parent().attr('id')
  alert("this button was clicked  " + parentOfButton1)

})


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


