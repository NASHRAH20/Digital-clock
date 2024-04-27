function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = timeString;
  }

  function padZero(num) {
    return (num < 10) ? "0" + num : num;
  }

  setInterval(updateClock, 1000);
  updateClock();