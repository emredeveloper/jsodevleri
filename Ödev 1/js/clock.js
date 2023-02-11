//Setting variable for username on prompt screen.
let userName = prompt("write your name");
document.getElementById("myName").innerHTML = userName;

//Find the timezone of user and set it into variable.
let timeDisplay = document.getElementById("myClock");
let currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function refreshTime() {
  let dateString = new Date().toLocaleString("en-US", {timeZone: currentTimeZone });
  let formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);