// Use jQuery to make an AJAX request to the specified URL
$.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function(data) {
// Update the text of the #hello div with the translation of "hello"
$('#hello').text(data.hello);
});

