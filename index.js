function toggler_format_func() {
   var text = document.querySelector("button");
   // var ap = document.querySelector("am_pm");
   var toggle_format = document.querySelector(".toggle");
   var val = toggle_format.getAttribute("curr_format");
   if (val == "12") {
      toggle_format.setAttribute("curr_format", "24");
      text.innerHTML = "click to see in 12-hour format";
      // ap.innerHTML = "";
   }
   else {
      toggle_format.setAttribute("curr_format", "12");
      text.innerHTML = "click to see in 24-hour format";

   }
}

function clock() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  var toggle_format = document.querySelector(".toggle");
  var val = toggle_format.getAttribute("curr_format");

  let am_pm = "AM";

  // To set am/pm depending on time
  if (hours >= 12) {
    am_pm = "PM";
  }
  // to set 12 hour format
  // var toggle_format = document.querySelector(".toggle");
  var val = toggle_format.getAttribute("curr_format");
  if (val == "12") {
    if (hours > 12) {
      hours = hours % 12;
    }
  }
  // setting extra 0s before single digit
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
//   var ap = document.querySelector("am_pm");

  document.querySelector(".hour").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".hour").innerHTML = hours;
  var toggle_format = document.querySelector(".toggle");

  // if(ap.innerHTML == "")
  
  var daynum = today.getDate();
  var year = today.getFullYear();
  var day_name = today.toLocaleString("default", { weekday: "long" });
  var mon_name = today.toLocaleString("default", { month: "short" });
  
  document.querySelector(".month").innerHTML = mon_name;
  document.querySelector(".day").innerHTML = day_name;
  document.querySelector(".day_num").innerHTML = daynum;
  document.querySelector(".year").innerHTML = year;
  if (val == "24") {
      document.querySelector(".am_pm").innerHTML = "";
   }
   else {
      document.querySelector(".am_pm").innerHTML = am_pm;
     
   }
}
var myInterval = setInterval(clock, 1000);
function myStop() {
  clearInterval(myInterval);
}