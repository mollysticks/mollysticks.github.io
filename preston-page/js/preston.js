const currentWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=338e750cfb5add709c3539331450f95d&units=imperial';
const forecastWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=338e750cfb5add709c3539331450f95d&units=imperial';


//function to get the weather summary info from API
fetch(currentWeatherRequestURL)
    .then((response) => response.json())  
    .then((prestonWeatherObject) => {
        //setting the high temp and wind speed from the object to local variables
        let highTemp = prestonWeatherObject.main.temp_max;
        let windSpeed = prestonWeatherObject.wind.speed;

        //grabbing the needed stats from the API object and putting it into the html
        document.getElementById("current-weather").innerHTML = prestonWeatherObject.weather[0].main;
        document.getElementById("high-temp").innerHTML = highTemp;
        document.getElementById("humidity").innerHTML = prestonWeatherObject.main.humidity;
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

                document.getElementById("day" + counter + "-name").innerHTML = currentDay;
                document.getElementById("day" + counter + "-icon").src = "http://openweathermap.org/img/wn/" + weatherList[i].weather[0].icon + "@2x.png";

                document.getElementById("day" + counter + "-temp").innerHTML = weatherList[i].main.temp;

                counter++;
            }
        }
    });