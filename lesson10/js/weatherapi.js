const requestURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a03b3973d266e740f6e46c6fce445207';
const dayURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a03b3973d266e740f6e46c6fce445207';

fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {

    let temp = ((jsObject.main.temp -273.15)*1.8)+32;
    let templow = ((jsObject.main.temp_min - 273.15)*1.8)+32;
    let temphigh = ((jsObject.main.temp_max - 273.15)*1.8)+32;

    let timestamp = jsObject.sys.sunset;
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let time = hours + ':' + minutes.substr(-2);

    let wind = jsObject.wind.speed;
    if (wind > 3 && temp <= 50){
      var windchill = 35.74 + (0.6215*(temp) - (35.75*Math.pow(wind,0.16)) + (0.4275*(temp)*(Math.pow(wind,0.16))));
      document.getElementById('chill').textContent = windchill.toFixed(0) + '&#176';
    } else {
      document.getElementById('chill').textContent = "N/A";
    }

    document.getElementById('temp').textContent = temp.toFixed(0);
    document.getElementById('wind').textContent = jsObject.wind.speed;
    document.getElementById('humid').textContent =jsObject.main.humidity;
    document.getElementById('high').textContent = temphigh.toFixed(0);
    document.getElementById('low').textContent = templow.toFixed(0);
    document.getElementById('time').textContent = time;

  });

  fetch(dayURL)
  .then((response) => response.json())
  .then((weatherObject) => {
  
    var days = weatherObject.list.filter(x => x.dt_text.includes('18:00:00'));
    console.table(days);
 
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (i = 0; i < days.length; i++){
      const day = new Date(forecast[i].dt_text);

      document.getElementById("day{i+1}").textContent =  weekdays[day.getDay()];
    }

  });