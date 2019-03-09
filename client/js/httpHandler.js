setInterval(function() {
  const serverUrl = 'http://127.0.0.1:3000';
  
  var getCommand = $.ajax({
    url: serverUrl,
    type: 'GET',
  })
  
  getCommand.done(function(data) {
    return SwimTeam.move(data)
  })

  getCommand.fail(function() {
    console.log('request for command failed');
  })
}, 500);