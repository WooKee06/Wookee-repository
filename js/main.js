fetch(`https://api.openweathermap.org/data/2.5/forecast?q=derbent&appid=2dab04f778d7b45e71094ee3177dab4b`)
    .then(function (resp) { return resp.json()})
    .then(function (data) {
      console.log(data);
      document.querySelector(".content-name").innerHTML = data.city.name
      document.querySelector(".name-city").innerHTML = data.city.name
      document.querySelector(".speed-number").innerHTML = data.list[0].wind.speed
      document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp - 273) + ' &deg;';
      document.querySelector(".content-temp").innerHTML = Math.round(data.list[0].main.temp - 273) + ' &deg;';
      
      
      document.querySelector(".Morning-temp").innerHTML = Math.round(data.list[0].main.temp - 273) + ' &deg;';
      document.querySelector(".Aftermoon-temp").innerHTML = Math.round(data.list[1].main.temp - 273) + ' &deg;';
      document.querySelector(".Evening-temp").innerHTML = Math.round(data.list[2].main.temp - 273) + ' &deg;';
      document.querySelector(".Night-temp").innerHTML = Math.round(data.list[3].main.temp - 273) + ' &deg;';
      
      
      document.querySelector(".weektemp1").innerHTML = Math.round(data.list[7].main.temp - 273) + ' &deg;';
      document.querySelector(".weektemp2").innerHTML = Math.round(data.list[15].main.temp - 273) + ' &deg;';
      document.querySelector(".wt-3").innerHTML = Math.round(data.list[23].main.temp - 273) + ' &deg;';
      document.querySelector(".wt-4").innerHTML = Math.round(data.list[31].main.temp - 273) + ' &deg;';
      document.querySelector(".wt-5").innerHTML = Math.round(data.list[39].main.temp - 273) + ' &deg;';


    })
    .catch( function () {
      // error
    })



setInterval (() => {

  let date = new Date();
  
  document.querySelector(".hours").innerHTML = date.getHours()
  document.querySelector(".time-hours").innerHTML = date.getHours()

  document.querySelector(".minutes").innerHTML = date.getMinutes()
  document.querySelector(".time-minutes").innerHTML = date.getMinutes()
  document.querySelector(".date").innerHTML = date.getDate()
},1)


let date = new Date();

document.querySelector(".d-1").innerHTML = (date.getDate() + 1)
document.querySelector(".d-2").innerHTML = (date.getDate() + 2)
document.querySelector(".d-3").innerHTML = (date.getDate() + 3)
document.querySelector(".d-4").innerHTML = (date.getDate() + 4)
document.querySelector(".d-5").innerHTML = (date.getDate() + 5)



const valentines = new Date();
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

document.querySelector(".section-time-week").innerHTML = dayNames[day]; 

document.querySelector(".w-1").innerHTML = dayNames[day + 1] ; 
document.querySelector(".w-2").innerHTML = dayNames[day + 2] ; 
document.querySelector(".w-3").innerHTML = dayNames[day + 3] ; 
document.querySelector(".w-4").innerHTML = dayNames[day + 4] ; 
document.querySelector(".w-5").innerHTML = dayNames[day + 5] ; 




document.querySelector(".yars").innerHTML = date.getFullYear(); 


const valentinesMouth = new Date();
const mouth = valentines.getMonth();
const mouthNames =  [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];


document.querySelector(".month").innerHTML = mouthNames[mouth]; 
document.querySelector(".next-day-mouth").innerHTML = mouthNames[mouth]; 




const mainImg = document.getElementById("section-main-img")


