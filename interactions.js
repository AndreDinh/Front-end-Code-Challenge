// $('.add').on('click', function(){
//   $('ol').add('<li> with this random thing</li>');
// });
$(function() {
$('#add').on('click', function(e){
    e.preventDefault();
    var newText = $('input:text').val();
    $('li:last').after('<li>' + newText + '</li>');
    $textInput.val('');

  });
$('li').on('click',function(){
  (this).remove();
  });

});
