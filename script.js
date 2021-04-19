document.getElementById("btn").onmouseenter = function() {
var getName = document.getElementById("fullName");

var getYear = document.getElementById("year");
var getMonth = document.getElementById("month");
var getDay = document.getElementById("day");

var userData = new Date();

userData.setFullYear(getYear.value);
userData.setMonth((getMonth.value)-1);
userData.setDate(getDay.value);

var button = document.getElementById("btn");
button.onclick = function() {
    if (userData.getDay() === 0) {
        alert(getName.value + " was born on Sunday");
      } else if (userData.getDay() === 1) {
        alert(getName.value + " was born on Monday");
      } else if (userData.getDay() === 2) {
        alert(getName.value + " was born on Tuesday");
      } else if (userData.getDay() === 3) {
        alert(getName.value + " was born on Wednesday");
      } else if (userData.getDay() === 4) {
        alert(getName.value + " was born on Thursday");
      } else if (userData.getDay() === 5) {
        alert(getName.value + " was born on Friday");
      } else if (userData.getDay() === 6) {
        alert(getName.value + " was born on Saturday");
      }
};

var button2 = document.getElementById("btn2");
button2.onclick = function() {
  window.location.reload()
};
};