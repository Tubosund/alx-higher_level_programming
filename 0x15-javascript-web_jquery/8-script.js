// Use jQuery to make an AJAX request to the SWAPI API
$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
// Loop through the results and add each movie title to the #list_movies ul
$.each(data.results, function(index, movie) {
$('#list_movies').append('<li>' + movie.title + '</li>');
});
});

