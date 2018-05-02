$(document).on('DOMContentLoaded', function() {

  lightbox.option({
    'showImageNumberLabel': false
  });

  $('#search').on('keyup', function(event) {
    let searchText = $(event.target)[0].value;

    $.each($('li'), function(i, item) {
      const a = $(item).children('a')[0];
      const title = $(a).attr('title');
      const caption = $(a).attr('data-title');

      if (title.indexOf(searchText) >= 0 || caption.indexOf(searchText) >= 0) {
        $(item).show();
      } else {
        $(item).hide();
      }

    }); //end each li

  }); // end #search on change

}); // end DOMContentLoaded