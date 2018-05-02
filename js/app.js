$(document).on('DOMContentLoaded', function() {

  lightbox.option({
    'showImageNumberLabel': false
  });

  $('#search').on('keyup', function(event) {
    console.log($(event.target)[0].value);
  }); // end #search on change

}); // end DOMContentLoaded