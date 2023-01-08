# work-day-scheduler

# **Table of Contents**
1. [Description](#description)
2. [Testing](#testing)
3. [Technology Used and Credits](#technology-used-and-credits)
4. [Learnings](#learnings)
5. [About the Author](#about-the-author)
6. [License](#license)

[Visit the Deployed Site](https://bradcoleman60.github.io/work-day-scheduler/)


# **Description**

The goal of this project was to add functionality to starter code that includes a calendar page of 1 day with hourly blocks associated with the standard business hours of 9AM to and including the 5PM hour.  Within each of the 9 hourly blocks (9AM to 5PM) there is a text area where the user can input appointments for the current day.  On the right of the hourly block a save icon can be pressed which executes a JavaScript function that saves the contents of the text area (ie the appointment description) to Local Storage.  Therefore, upon page reload the appointments can be retrieved and displayed in each of the respective hourly blocks.  

![screenshot](/screen-shot_1.png)

# **Highlighted Code Example**

The following is code that I created that I would like to highlight. This is the essence of the JavaScript code and performs multiple steps within one FOR LOOP statement. I observed that the HTML code for each hourly time block was almost identical with the exception of (1) the ID of the parent DIV (which ranges from hour-9 to hour-17), (2) the text that labels the hourly block (which ranges from 9AM to 5PM) and the tense of the hour (that ranges from Past to Present to Future).  

Instead of replicating, or "hardcoding" this HTML block for each of the 9 hours on the index.html page, I created a FOR LOOP that appends the container DIV with the HTML block for each hourly block.  In doing this, I was also able to change the 3 variables noted above (parent ID, tense, and time label) in each iteration of the FOR LOOP. This enables me to easily add or subtract hourly blocks if I want to lengthen or shorten the business day.  

I utilized day.js to help me with retrieving, formatting and displaying dates and times, in addition to comparing the current time to the hourly blocks that are displayed (needed to dynamically change the background color of the respective hourly block).  

Lastly, the FOR LOOP also retrieves any appointments previously stored in localStorage and renders this text to the appropriate hourly block.  

**Excerpt of JavaScript Code:**   

```
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

```
**Additional Excerpt of JavaScript Code:** 

The JavaScript code below is code that I spent a lot of time with. This was the first time that I used the jquery THIS method which I found to be very useful in traversing the DOM to ensure I was selecting the correct elements and attributes.  I researched the methods to select DOM elements including the use of ".parent()" that I used to select the parent ID of the save button clicked and the ".prev()" method that I used to get the content (or value) that was entered by the user in the text area.  NOTE: I learned that I could include in the parentheses of this prev() method the type of HTML element (in this case the 'textarea' element) to help.   

```
/*This function retrieves the parent ID and text entered into the textarea of the save button that is clicked.  The function then saves the text entered into a text area to localStorage using the associated hour-X as the key */
  $("button").on("click", function(){
    var parentOfButton = $(this).parent().attr('id');
    var calendarEntry = $(this).prev('textarea').val();
    localStorage.setItem(parentOfButton,JSON.stringify(calendarEntry));
  })
```

# **Testing** 

To test to ensure the code rendered the desired output I iterated a series of tests to ensure that all acceptance criteria were met and documented completion below:

1. WHEN I open the planner THEN the current day is displayed at the top of the calendar

 - **Completed**.  The current day and date is displayed at the top of the page within the header section.  I observed this date change during the course of the development of my code.   

2. WHEN I scroll down THEN I am presented with time blocks for standard business hours

 - **Completed**.  Scrolling down I observe there is a block for each hour in a standard business day.  The blocks start with the 9AM hour and goes through and includes the 5PM hour.  

3. WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future

 - **Completed**.  The Javascript uses an IF statement to compare the hour of the current time to the hour associated with each respective time block.  If the hour has passed the block is shaded grey.  If the hour associated with the block is the current hour of the day, then the block is shaded red.  If the hour of the block is in the future then the block is shaded green.  I observed this formatting occurring over the course of several days.   

4. WHEN I click into a time block THEN I can enter an event

 - **Completed**.  The middle column of the hourly block is a text area in which the user can enter an event.  I tested each hourly block to ensure this functionality worked.  

5. WHEN I click the save button for that time block THEN the text for that event is saved in local storage

 - **Completed**.  When the save button is clicked, a JavaScript function is executed which saves the content of the text area (in this application, an appointment or event) into local storage.  The key is set to equal the associated ID of the parent div that contains the text area.  I tested this functionality for each of the hourly blocks displayed. 

6. WHEN I refresh the page THEN the saved events persisted

- **Completed**.  Upon page reload, all previously saved appointments / events are displayed in the hourly schedule.  
    
# **Technology Used and Credits**

I used many useful references in completing this project including the following.  In particular, I found the layout of the w3schools reference materials to be extremely intuitive and helpful.  They even have a "try me" feature where elements of code can be reviewed and tested. 

- [W3Schools - Java Script Code reference:](https://www.w3schools.com/js/default.asp)


# **Learnings**

I found this project to be very interesting.  As enumerated above this was the first time I used the THIS function in traversing the DOM to select elements to retrieve or set an element on the HTML page. Additionally, I learned how to dynamically render HTML to the page using a FOR LOOP instead of hardcoding several lines of similar HTML code.  

Lastly, I learned how to use a variable in a jquery select statement.  When I first endeavored to do this, I tried to create a string with the require parent ID tag.  I set a variable that was equal to the string needed in the jquery select statement.  For example ```$("#hour-9")``` (Please note the parentheses around this argument).  This variable had to be dynamically rendered so that the entered text (appointment) could be saved to localStorage with a key that was unique to that hour. After much research, I discovered that this could be accomplished by ```$('#' + parentID)```.  Note there are NO double quotes around the ID tag required when using a variable in a jquery selector.    

# **About the Author**

My name is Brad Coleman. I am fairly new to web development but have considered it a hobby for several years and have hacked my way through learning various aspects including php, html and mysql.  I am currently enrolled in the Cal Berkeley Extension Web Development Boot camp and am excited to learn web development more holistically.  I have spent my earlier career working as a corporate controller / CPA.

- [Linkedin Profile](https://www.linkedin.com/in/brad-coleman-109529/)
- [GitHub Repos](https://github.com/bradcoleman60?tab=repositories)


# **License**

MIT License

Copyright (c) 2022 Brad Coleman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.







GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persistcd ..
