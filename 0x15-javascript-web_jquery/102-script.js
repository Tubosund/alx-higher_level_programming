$(document).ready(function() {
  // Event handler for the button click
  $('#btn_translate').click(function() {
    // Get the language code from the input
    var languageCode = $('#language_code').val();

    // Make an AJAX request to fetch the translation
    $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`, function(data) {
      // Update the text of the #hello div with the translation
      $('#hello').text(data.hello);
    });
  });
});

