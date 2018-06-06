// f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16

/*function windChill(form) {
    averageTemperature = t;
    windChillFactor = f;
    windSpeed = s;
    
    f = 35.74 + 0.6125*t - Math.pow((35.75*x), .16) + Math.pow((.4275*s*t), .16)
    
    return f;
}*/

var high = 90;
var low = 60;
var speed = 5;
var tempF = ((high - low) / 2) + low;
var windchill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
windChill = Math.round(windchill);
document.getElementById("windchill").innerHTML = windChill + "&#8457";