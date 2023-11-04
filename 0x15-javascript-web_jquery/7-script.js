// Use jQuery to make an AJAX request to the SWAPI API
$.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
// Update the text of the #character div with the character's name
$('#character').text(data.name);
});

