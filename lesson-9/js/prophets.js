const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let dateOfBirth = document.createElement('h3');
        let placeOfBirth = document.createElement('h4');
        let picture = document.createElement('img');
        
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        dateOfBirth.textContent = "Date of Birth: " + prophets[i].birthdate;
        placeOfBirth.textContent = "Place of Birth: " + prophets[i].birthplace;
        picture.setAttribute('src', prophets[i].imageurl);
        picture.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + " image");
        
        card.appendChild(h2);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(picture);
        document.querySelector('div.cards').appendChild(card);
    }
  });