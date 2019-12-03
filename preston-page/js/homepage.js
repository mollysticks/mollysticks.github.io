const dataSourceURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(dataSourceURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObj) {
        const towns = jsonObj['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let townName = towns[i].name.replace(/\s+/g, "");
                townName = townName.replace(/.*/, function (x) { return x.toLowerCase(); });
                let town = document.createElement('a');
                town.className = townName;
                let townInformation = document.createElement('div');
                townInformation.className = "town-info";
                let name = document.createElement('h2');
                name.className = "town-name";
                let infoOnly = document.createElement('div');
                infoOnly.className = "info-only";
                let image = document.createElement('img');
                image.className = "city-image";
                let motto = document.createElement('h3');
                motto.className = "town-motto";
                let founded = document.createElement('div');
                founded.className = "founded";
                let population = document.createElement('div');
                population.className = "town-population";
                let rainfall = document.createElement('div');
                rainfall.className = "town-rain";

                image.setAttribute('src', 'images/' + towns[i].photo);
                image.setAttribute('alt', "Image of " + towns[i].name);
                town.setAttribute('href', townName + ".html");



                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = "Founded in " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                rainfall.textContent = "Annual rainfall: " + towns[i].averageRainfall;

                infoOnly.appendChild(name);
                infoOnly.appendChild(motto);
                infoOnly.appendChild(founded);
                infoOnly.appendChild(population);
                infoOnly.appendChild(rainfall);
                townInformation.appendChild(infoOnly);
                townInformation.appendChild(image);
                town.appendChild(townInformation);
                

                document.querySelector('div.cards').appendChild(town);            
            }
        }
    });