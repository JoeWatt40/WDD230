let temp = document.getElementById("temp").innerText;
let wind = document.getElementById("wind").innerText;

let chill = 35.74 + (0.6215*(temp) - (35.75*Math.pow(wind,0.16)) + (0.4275*(temp)*(Math.pow(wind,0.16))));
let wchill = chill.toFixed(0);
document.getElementById("chill").innerHTML = wchill;
console.log(chill);

