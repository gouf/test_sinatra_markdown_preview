$(function() {
  var formatted_string = 'hoge';
  // $('#text_output').text(formatted_string);
  $('#text_input').bind('keyup', function(e) {
    var text = $('#text_input').val();
    console.log(text);
    parse(text);
  });
});

function update(formatted_string) {
  $('#text_output').html(formatted_string);
}

function parse(text) {
  $.ajax({
    url: 'http://localhost:9292/parse/',
    method: 'POST',
    crossDomain: true,
    data: {'text': text}
  }).error(function() {
    console.log('Error');
  }).done(function(text) {
    console.log(text);
    update(text);
  });
}
