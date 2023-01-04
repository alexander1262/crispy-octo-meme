// sets dayjs to the variable today to be used in the display code below
var today = dayjs();
// takes the id currentDay from the HTML and assigns it the text for dayjs in a format that shows day of the week, month, day of the month, and year
$('#currentDay').text(today.format('dddd, MMM D YYYY'));
$(function () {
  // takes the class saveBtn from the HTML and gives it the on click function below
  $('.saveBtn').on('click', function() {
    // uses the this object in jquery to alter the sibling element textarea's value and assigns it to the variable siblingArea
    var siblingArea = $(this).siblings('textarea').val()
    // uses this to take the parent attribute of id in the HTML which has the text hour-# and assigns it to the variable parentId
    var parentId = $(this).parent().attr('id')
    // sets these items to locaStorage
    localStorage.setItem(parentId, siblingArea)
  })
  // creates a variable for the current hour of the day in dayjs
  var currentHour = dayjs().hour()
  // this each function is used to highlight the boxes a color depending on the time of day compared to the time of the block
  $('.time-block').each(function() {
    // sets a variable for the current block the each function is on
    var currentBlock = $(this)
    // this parseInt breaks the id of hour-# into an array at the - and then asks for the 2nd object in the array which is the number and changes it to an integer
    var blockHour = parseInt(currentBlock.attr('id').split('-')[1])
    // if statement that adds the class from the css file to a block depending if it is greater than, equal to, or less than the dayjs hour
    if (blockHour < currentHour) {
      currentBlock.children('textarea').addClass('past')
    } else if (blockHour == currentHour) {
      currentBlock.children('textarea').addClass('present')
      } else {
        currentBlock.children('textarea').addClass('future')
      }
  })
  // lines 33 through 41 are used to retrieve the items from localStorage so the text displays on page reloads
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-16 .description").val(localStorage.getItem("hour-17"));
});

