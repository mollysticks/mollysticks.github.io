const dataSourceURL = 'https://mollysticks.github.io/temple-page/temples.json';

fetch(dataSourceURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObj) {
    const dallasTemple = jsonObj['temples'];
    if (dallasTemple.city == "dallas") {
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

        templeName.textContent = dallasTemple.name;
        templeImage.setAttribute('src', dallasTemple.imageurl);
        templeImage.setAttribute('alt', dallasTemple.name);
        templeAddress.textContent = dallasTemple.address.street + ', ' + dallasTemple.address.city + ' ' + dallasTemple.address.state + ' ' + dallasTemple.address.zip;
        templePhone.textContent = "☎️" + dallasTemple.telephone;
        templeEmail.textContent = "✉️" + dallasTemple.email;  
        
        templeSummary.textContent = dallasTemple.summary;
      
        templeServices.textContent = "Services offered"
        for (let j = 0; j < 3; j++) {
            let templeServicesList = document.createElement('li');
            templeServicesList.textContent += dallasTemple.services[j];
            templeServices.appendChild(templeServicesList);
        } 

        templeOrdinanceHeader.textContent = "Ordinance Schedule";

        templeBaptism.textContent = "Baptism";
        for (let j = 0; j < dallasTemple.ordinances.baptism.length; j++) {
            let templeBaptismList = document.createElement('li');
            templeBaptismList.textContent += dallasTemple.ordinances.baptism[j];
            templeBaptism.appendChild(templeBaptismList);
        }       
        
        templeInitiatory.textContent = "Initiatory";
        for (let j = 0; j < dallasTemple.ordinances.initiatories.length; j++) {
            let templeInitiatoryList = document.createElement('li');
            templeInitiatoryList.textContent += dallasTemple.ordinances.initiatories[j];
            templeInitiatory.appendChild(templeInitiatoryList);
        } 

        templeEndowment.textContent = "Endowments";
        for (let j = 0; j < dallasTemple.ordinances.endowments.length; j++) {
            let templeEndowmentsList = document.createElement('li');
            templeEndowmentsList.textContent += dallasTemple.ordinances.endowments[j];
            templeEndowment.appendChild(templeEndowmentsList);
        } 

        templeSealing.textContent = "Sealing";
        for (let j = 0; j < dallasTemple.ordinances.sealings.length; j++) {
            let templeSealingsList = document.createElement('li');
            templeSealingsList.textContent += dallasTemple.ordinances.sealings[j];
            templeSealing.appendChild(templeSealingsList);
        } 

        templeHistory.textContent = "History";
        for (let j = 0; j < dallasTemple.history.length; j++) {
            let templeHistoryList = document.createElement('li');
            templeHistoryList.textContent += dallasTemple.history[j];
            templeHistory.appendChild(templeHistoryList);
        } 

        templeClosures.textContent = "Closures";
        for (let j = 0; j < dallasTemple.closures.length; j++) {
            let templeClosuresList = document.createElement('li');
            templeClosuresList.textContent += dallasTemple.closures[j];
            templeClosures.appendChild(templeClosuresList);
        } 

        templeSummary.textContent = dallasTemple.summary;

        
        
        // cityWeather.textContent = "The current temperature is " + cityWeatherFetch.toString();

        // //cityWeather.appendChild(getCurrentWeather());
        
        
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
        //temple.appendChild(cityWeather);

        document.querySelector('div.cards').appendChild(temple);
    }
});

// function getCurrentWeather() {
//     let currentWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-97&APPID=338e750cfb5add709c3539331450f95d&units=imperial';
//     fetch(currentWeatherRequestURL)
//         .then((response) => response.json())
//         .then(function(cityWeatherObject) {
//             let currentWeatherFetch = Math.round(cityWeatherObject.main.temp);
//             document.getElementById("weather-fetch").innerHTML = currentWeatherFetch;
//             console.log(currentWeatherFetch);
//         });
// }
// getCurrentWeather();


// // //getting the current weather information
// async function getCurrentWeather() {
// let currentWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-97&APPID=338e750cfb5add709c3539331450f95d&units=imperial';
//     await fetch(currentWeatherRequestURL)
//         .then(function (response) {
//         return response.json();
//         })
//         .then(function(cityWeatherObject) {
//             let currentWeatherFetch = Math.round(cityWeatherObject.main.temp);
//             console.log(currentWeatherFetch);            
//         })
        
//         }
// console.log(getCurrentWeather());
        