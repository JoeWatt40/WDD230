const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];   
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" ){

        let card = document.createElement('section');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let motto = document.createElement("h3");
        let year = document.createElement("p");
        let population = document.createElement("p");
        let rain = document.createElement("p");
        let image = document.createElement("img");
        let imagealt = towns[i].name; 

        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].currentPopulation;
        rain.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
        image.setAttribute("src", "images/" + towns[i].photo);
        image.setAttribute("alt", towns[i].name);

        div.appendChild(h2);
        div.appendChild(motto);
        div.appendChild(year);
        div.appendChild(population);
        div.appendChild(rain);
        card.appendChild(div);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }
        
    }
  });