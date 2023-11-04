$(document).ready(function() {
  // Function to add a new <li> element to UL.my_list
  $('#add_item').click(function() {
    $('ul.my_list').append('<li>Item</li>');
  });

  // Function to remove the last <li> element from UL.my_list
  $('#remove_item').click(function() {
    $('ul.my_list li:last-child').remove();
  });

  // Function to clear all elements from UL.my_list
  $('#clear_list').click(function() {
    $('ul.my_list').empty();
  });
});

