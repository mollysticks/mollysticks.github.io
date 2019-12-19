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
}

//toggle the menu to be seen or not, depending on the size screen
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const dataSourceURL = 'https://mollysticks.github.io/temple-page/temples.json';

fetch(dataSourceURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObj) {
    const temples = jsonObj['temples'];
    for (let i = 0; i < temples.length; i++) {
        let temple = document.createElement('div');
        temple.className = "temple-complete";
        let templeFlex = document.createElement('div');
        templeFlex.className = "temple-flex";
        let templeName = document.createElement('h4');
        let templeImage = document.createElement('img');
        templeImage.className = "temple-image";
        let templeContact = document.createElement('div');
        let templeAddress = document.createElement('p');
        let templePhone = document.createElement('p');
        let templeEmail = document.createElement('p');
        let templeServices = document.createElement('ul');
        templeServices.className = "temple-services";
        let templeHistory = document.createElement('ul');
        templeHistory.className = "temple-history";
        let templeClosures = document.createElement('ul');
        templeClosures.className = "temple-closures";
        let templeOrdinances = document.createElement('div');
        templeOrdinances.className = "ordinances";
        let templeOrdinanceHeader = document.createElement('h5');
        templeOrdinanceHeader.className = "ordinance-header";
        templeOrdinanceGrid = document.createElement('div');
        templeOrdinanceGrid.className = "ordinanceGrid";
        let templeBaptism = document.createElement('ul');
        templeBaptism.className = "baptism";
        let templeInitiatory = document.createElement('ul');
        templeInitiatory.className = "initiatories";
        let templeEndowment = document.createElement('ul');
        templeEndowment.className = "endowments";
        let templeSealing = document.createElement('ul');
        templeSealing.className = "sealings";
        templeInfoGrid = document.createElement('div');
        templeInfoGrid.className = "info-grid";
        let templeSummary = document.createElement('p');
        templeSummary.className = "temple-summary";
        // let cityWeather = document.createElement('p');

        templeName.textContent = temples[i].name;
        templeImage.setAttribute('src', temples[i].imageurl);
        templeImage.setAttribute('alt', temples[i].name);
        templeAddress.textContent = temples[i].address.street + ', ' + temples[i].address.city + ' ' + temples[i].address.state + ' ' + temples[i].address.zip;
        templePhone.textContent = "☎️" + temples[i].telephone;
        templeEmail.textContent = "✉️" + temples[i].email;  
        
        templeSummary.textContent = temples[i].summary;
      
        templeServices.textContent = "Services offered"
        for (let j = 0; j < 3; j++) {
            let templeServicesList = document.createElement('li');
            templeServicesList.textContent += temples[i].services[j];
            templeServices.appendChild(templeServicesList);
        } 

        templeOrdinanceHeader.textContent = "Ordinance Schedule";

        templeBaptism.textContent = "Baptism";
        for (let j = 0; j < temples[i].ordinances.baptism.length; j++) {
            let templeBaptismList = document.createElement('li');
            templeBaptismList.textContent += temples[i].ordinances.baptism[j];
            templeBaptism.appendChild(templeBaptismList);
        }       
        
        templeInitiatory.textContent = "Initiatory";
        for (let j = 0; j < temples[i].ordinances.initiatories.length; j++) {
            let templeInitiatoryList = document.createElement('li');
            templeInitiatoryList.textContent += temples[i].ordinances.initiatories[j];
            templeInitiatory.appendChild(templeInitiatoryList);
        } 

        templeEndowment.textContent = "Endowments";
        for (let j = 0; j < temples[i].ordinances.endowments.length; j++) {
            let templeEndowmentsList = document.createElement('li');
            templeEndowmentsList.textContent += temples[i].ordinances.endowments[j];
            templeEndowment.appendChild(templeEndowmentsList);
        } 

        templeSealing.textContent = "Sealing";
        for (let j = 0; j < temples[i].ordinances.sealings.length; j++) {
            let templeSealingsList = document.createElement('li');
            templeSealingsList.textContent += temples[i].ordinances.sealings[j];
            templeSealing.appendChild(templeSealingsList);
        } 

        templeHistory.textContent = "History";
        for (let j = 0; j < temples[i].history.length; j++) {
            let templeHistoryList = document.createElement('li');
            templeHistoryList.textContent += temples[i].history[j];
            templeHistory.appendChild(templeHistoryList);
        } 

        templeClosures.textContent = "Closures";
        for (let j = 0; j < temples[i].closures.length; j++) {
            let templeClosuresList = document.createElement('li');
            templeClosuresList.textContent += temples[i].closures[j];
            templeClosures.appendChild(templeClosuresList);
        } 

        templeSummary.textContent = temples[i].summary;

        let cityName = temples[i].city;
        console.log(cityName);
        // if (cityName == "dallas") {
        //     let currentWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-97&APPID=338e750cfb5add709c3539331450f95d&units=imperial';
        //     return currentWeatherRequestURL;
        // }
        // console.log(currentWeatherRequestURL);

        // fetch(currentWeatherRequestURL)
        // .then((response) => response.json())  
        // .then((cityWeatherObject) => {
        //     let currentWeather = Math.round(cityWeatherObject[i].main.temp);
        //     cityWeather.textContent = "The current weather is " + currentWeather + " degrees farenheit.";
        // });
        
        
        templeContact.appendChild(templeAddress);
        templeContact.appendChild(templePhone);
        templeContact.appendChild(templeEmail);
        temple.appendChild(templeName);
        templeFlex.appendChild(templeImage);
        templeFlex.appendChild(templeContact);
        temple.appendChild(templeFlex);        
        templeOrdinances.appendChild(templeOrdinanceHeader);
        templeOrdinanceGrid.appendChild(templeBaptism);
        templeOrdinanceGrid.appendChild(templeInitiatory);
        templeOrdinanceGrid.appendChild(templeEndowment);
        templeOrdinanceGrid.appendChild(templeSealing);
        templeOrdinances.appendChild(templeOrdinanceGrid);
        temple.appendChild(templeOrdinances);
        templeInfoGrid.appendChild(templeServices);
        templeInfoGrid.appendChild(templeHistory);
        templeInfoGrid.appendChild(templeClosures);
        templeInfoGrid.appendChild(templeSummary);
        temple.appendChild(templeInfoGrid);



        document.querySelector('div.cards').appendChild(temple);
    }
});