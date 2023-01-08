/*The Javascript code in this file is wrapped in this READY function to ensure that all
elements of the page are rendered prior to the execution of the functions below*/
$(document).ready(function () {

  // Set date to current date and sends to header
  // var currentDate = $.datepicker.formatDate ("DD MM d, yy", new Date());  
  var currentDate = dayjs().format('dddd MMMM D, YYYY');  
  $("#currentDay").text(currentDate);

  /*This FOR LOOP iterates for the 9 hours that are displayed on calendar */
  
  for (i=9; i <18; i++){
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
    /*Using the FOR LOOP above, this variable is used to display the hours of 9AM to 5PM on the calendar page the format("hA") property converts the hour from military to standard time including an indicator of AM or PM. */
  
    calendarHour = calendarHour.add([i-8],'hour').format("hA")

    /* Using the FOR LOOP above, this code block is iterated 9 times and has three variables that change with each LOOP.  NOTE the use of the escape character of "\" as this string contains HTML with needed open and close quotations*/ 
  
    var codeBlock = ("<div id=\"hour-" + [i] +'"'+ " class=\"row time-block" + tense +" \"><div class=\"col-2 col-md-1 hour text-center py-3\">" + calendarHour + "</div><textarea class=\"col-8 col-md-10 description\" rows=\"3\"> </textarea><button class=\"btn saveBtn col-2 col-md-1\" aria-label=\"save\"><i class=\"fas fa-save\" aria-hidden=\"true\"></i></button></div>");

    /* Using the FOR LOOP above, this appends the CodeBlock to the DIV with the class ".container" and essentially creates the calendar on the page.  NOTE: this did not work if the bootstrap tag of px-5 is included in the selector*/
  
    $(".container-lg").append(codeBlock);

    /*Using the FOR LOOP above, this iterates through the hours of the day displayed (9AM to 5PM) and retrieves any entries stored in LocalStorage and then renders the content associated with the hour to the webpage*/
  
    $('#hour-' + i).children().eq(1).text(JSON.parse(localStorage.getItem('hour-'+ i)))
  }

  /*This function retrieves the parent ID and text entered into the textarea of the save button that is clicked.  The function then saves the text entered into a text area to localStorage
  using the associated hour-X as the key */
  $("button").on("click", function(){
    var parentOfButton = $(this).parent().attr('id');
    var calendarEntry = $(this).prev('textarea').val();
    localStorage.setItem(parentOfButton,JSON.stringify(calendarEntry));
  })
});


