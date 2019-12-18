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
        let templeName = document.createElement('h4');
        let templeImage = document.createElement('img');
        let templeContact = document.createElement('div');
        let templeAddress = document.createElement('p');
        let templePhone = document.createElement('p');
        let templeEmail = document.createElement('p');
        let templeServices = document.createElement('ul');
        let templeHistory = document.createElement('p');
        let templeClosures = document.createElement('ul');
        let templeOrdinances = document.createElement('div');
        let templeBaptism = document.createElement('ul');
        let templeInitiatory = document.createElement('ul');
        let templeEndowment = document.createElement('ul');
        let templeSealing = document.createElement('ul');
        let summary = document.createElement('p');

        templeName.textContent = temples[i].name;
        templeImage.setAttribute('src', temples[i].imageurl);
        templeImage.setAttribute('alt', temples[i].name);
        templeAddress.textContent = temples[i].address.street + ', ' + temples[i].address.city + ' ' + temples[i].address.state + ' ' + temples[i].address.zip;
        templePhone.textContent = temples[i].telephone;
        templeEmail.textContent = temples[i].email;        
        
        for (let j = 0; j < 3; j++) {
            let templeServicesList = document.createElement('li');
            templeServicesList.textContent += temples[i].services[j];
            templeServices.appendChild(templeServicesList);
        } 

        for (let j = 0; j < temples[i].ordinances.baptism.length; j++) {
            let templeBaptismList = document.createElement('li');
            templeBaptismList.textContent += temples[i].ordinances.baptism[j];
            templeBaptism.appendChild(templeBaptismList);
        }       
        
        for (let j = 0; j < temples[i].ordinances.initiatories.length; j++) {
            let templeInitiatoryList = document.createElement('li');
            templeInitiatoryList.textContent += temples[i].ordinances.initiatories[j];
            templeInitiatory.appendChild(templeInitiatoryList);
        } 

        for (let j = 0; j < temples[i].ordinances.endowments.length; j++) {
            let templeEndowmentsList = document.createElement('li');
            templeEndowmentsList.textContent += temples[i].ordinances.endowments[j];
            templeEndowment.appendChild(templeEndowmentsList);
        } 

        for (let j = 0; j < temples[i].ordinances.sealings.length; j++) {
            let templeSealingsList = document.createElement('li');
            templeSealingsList.textContent += temples[i].ordinances.sealings[j];
            templeSealing.appendChild(templeSealingsList);
        } 
        
        
        templeContact.appendChild(templeAddress);
        templeContact.appendChild(templePhone);
        templeContact.appendChild(templeEmail);
        temple.appendChild(templeName);
        temple.appendChild(templeImage);
        temple.appendChild(templeContact);
        temple.appendChild(templeServices);
        templeOrdinances.appendChild(templeBaptism);
        templeOrdinances.appendChild(templeInitiatory);
        templeOrdinances.appendChild(templeEndowment);
        templeOrdinances.appendChild(templeSealing);
        temple.appendChild(templeOrdinances);


        document.querySelector('div.cards').appendChild(temple);
    }
});