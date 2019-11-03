

function colorClock() {
  
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var hexColor = '#' + hours + minutes + seconds;

  if (hours < 10) {
    minutes = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  var time = hours + ':' + minutes + ':' + seconds;

  document.getElementById('clock').innerHTML = time;
  document.body.style.background = hexColor;

  setTimeout(function() {
    colorClock();
  }, 1000);

}

colorClock();
