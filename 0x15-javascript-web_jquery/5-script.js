// Use jQuery to add a click event listener to the #add_item div
$('#add_item').click(function() {
// Create a new <li> element with the text "Item"
var newItem = $('<li>Item</li>');
    
// Append the new <li> element to the <ul> element with class "my_list"
$('ul.my_list').append(newItem);
});

