(function() {
  const serverUrl = 'http://127.0.0.1:3000';
  
  var getCommand = $.ajax({
    url: serverUrl,
    type: 'GET',
  }).done(alert('hi'))

  $( document ).load(alert('hi'));
})();