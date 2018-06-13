var high = 90;
var low = 60;
var speed = 5;
var tempF = ((high - low) / 2) + low;

var windchill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);

var windChill = Math.round(windchill);

document.getElementById("windchill").innerHTML = windChill + "&#8457";