const dataSourceURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(dataSourceURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObj) {
    const towns = jsonObj['towns'];
    let sodaSpringsObject = towns[5];
    for (let i = 0; i < sodaSpringsObject.events.length; i++) {
        let eventInfo = document.createElement('li');

        eventInfo.textContent = sodaSpringsObject.events[i];

        document.querySelector('div.events').appendChild(eventInfo);
    }
});

const currentWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=338e750cfb5add709c3539331450f95d&units=imperial';
const forecastWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=338e750cfb5add709c3539331450f95d&units=imperial';


//function to get the weather summary info from API
fetch(currentWeatherRequestURL)
    .then((response) => response.json())  
    .then((sodaSpringsWeatherObject) => {
        //setting the high temp and wind speed from the object to local variables
        let highTemp = sodaSpringsWeatherObject.main.temp_max;
        let windSpeed = sodaSpringsWeatherObject.wind.speed;

        //grabbing the needed stats from the API object and putting it into the html
        document.getElementById("current-weather").innerHTML = sodaSpringsWeatherObject.weather[0].main;
        document.getElementById("high-temp").innerHTML = highTemp;
        document.getElementById("humidity").innerHTML = sodaSpringsWeatherObject.main.humidity;
        document.getElementById("wind-speed").innerHTML = windSpeed;

        //checking to see if wind chill can be calculated
        if (highTemp > 50 || windSpeed < 3) {
            document.getElementById("chill").innerHTML = "N/A";
        }
        //calculating wind chill and entering into the html
        else {
            let windChill = 35.74 + (0.6215 * highTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * highTemp * Math.pow(windSpeed, 0.16));

        document.getElementById("chill").innerHTML = windChill.toFixed(1);
        }
    });

    //function to get 5 day forecast and icons
    fetch(forecastWeatherRequestURL)
    .then((response) => response.json())
    .then((forecastWeatherObject) => {
        let weatherList = forecastWeatherObject.list;
        let counter = 1;

        for (i = 0; i < weatherList.length; i++) {
            if (weatherList[i].dt_txt.includes("18:00:00")) {
                let unixTimeStamp = parseFloat(weatherList[i].dt); //get the current time stamp
                let date = new Date(unixTimeStamp * 1000); //configure the time stamp into a date object
                let dayNumber = date.getDay(); //get current day number

                let currentDay = ""

                switch(dayNumber) {
                    case 0: 
                        currentDay = "Sun";
                        break;
                    case 1:
                        currentDay = "Mon";
                        break;
                    case 2: 
                        currentDay = "Tue";
                        break;
                    case 3:
                        currentDay = "Wed";
                        break;
                    case 4:
                        currentDay = "Thu";
                        break;
                    case 5:
                        currentDay = "Fri";
                        break;
                    case 6:
                        currentDay = "Sat";
                        break;
                    default:
                        break;                    
                }
                //setting image source to a variable
                let imagesrc = "http://openweathermap.org/img/wn/" + weatherList[i].weather[0].icon + "@2x.png";
                //setting the description to a variable
                let iconDescription = "http://openweathermap.org/img/wn/" + weatherList[i].weather[0].description;
                //displaying the day properly
                document.getElementById("day" + counter + "-name").innerHTML = currentDay;
                //displaying the image properly and setting the source attribute 
                document.getElementById("day" + counter + "-icon").setAttribute('src', imagesrc);        
                //setting the alt text
                document.getElementById("day" + counter + "-icon").setAttribute('alt', iconDescription);
                //displaying the temperature for the day 
                let roundedTemp = Math.round(weatherList[i].main.temp); 
                document.getElementById("day" + counter + "-temp").innerHTML = roundedTemp;

                counter++;
            }
        }
    });