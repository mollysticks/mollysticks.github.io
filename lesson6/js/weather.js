
//getting current year
function displayYear(date) {
    //set the year from the date object to a new variable
    let n = date.getFullYear();
    //put the year right before the copyright symbol
    document.getElementById("currentYear").innerHTML = n;
}

function displayCurrentDate(date) {
    //set month and day names
    let monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	let weekNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day = weekNames[date.getDay()];
    let month = monthNames[date.getMonth()];
    
    let today = day + ', ' + date.getDate() + ' ' + month + ' ' + date.getFullYear();
    document.getElementById("currentDate").innerHTML = today;
    
}

function displayDates() {
    let date = new Date;
    displayYear(date);
    displayCurrentDate(date);
    toggleFriday(date);
}

function toggleFriday(date) {
    let day = date.getDay();
    if (day == 5) {
        document.getElementById("sat-banner").style.display = "block";
    }
}

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

$(function(){
    $('a').each(function() {
      if ($(this).prop('href') == window.location.href) {
        $(this).addClass('current');
      }
    });
  });

