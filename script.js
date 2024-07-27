function clock() {
  let a = new Date(); 
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let day = a.getDay();
  let dd = a.getDate();
  let mm = a.getMonth();
  let yyyy = a.getFullYear();
  let arrday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',][day]
  let arrmm = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",][mm]

  let Hours = document.querySelector('.box.hr .time.hr');
  let Minutes = document.querySelector('.box.min .time.min');
  let Seconds = document.querySelector('.box.sec .time.sec');
  let date = document.querySelector('.daydate');


  
  if (s < 10) {
    // If hours, minutes, and seconds are all less than 10, add leading zeros
    Hours.innerHTML = `${h}`;
    Minutes.innerHTML = `${m}`;
    Seconds.innerHTML = `0${s}`;
  } else if (m < 10) {
    Hours.innerHTML = `${h}`;
    Minutes.innerHTML = `0${m}`;
    Seconds.innerHTML = `${s}`;
  }
   else if (h < 10) {
    Hours.innerHTML = `0${h}`;
    Minutes.innerHTML = `${m}`;
    Seconds.innerHTML = `${s}`;
  }
  else {
    // If any of hours, minutes, or seconds are 10 or more, format normally
    Hours.innerHTML = `${h}`;
    Minutes.innerHTML = `${m}`;
    Seconds.innerHTML = `${s}`;
  }

//Alternate easy and precise ChatGPT approach use ternary operator
// Hours.innerHTML = h < 10 ? `0${h}` : h;
// Minutes.innerHTML = m < 10 ? `0${m}` : m;
// Seconds.innerHTML = s < 10 ? `0${s}` : s;

  date.innerHTML = `${arrday}, ${dd} ${arrmm} ${yyyy}`;
}

setInterval(clock, 1000)
clock();

