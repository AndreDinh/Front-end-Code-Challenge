$(function() {
  $('#add').on('click', function(e) {
    e.preventDefault();
    var newText = $('input:text').val();
    $('ol').append('<li>'+newText+'</li>');

  });
  $('body').on('click','li', function() {
     $(this).closest('li').remove();
  });

});
