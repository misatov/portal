const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })


  .then(function (jsonObject) {
    console.table(jsonObject);  

    const towns = jsonObject['towns'];
    const onlyThree = towns.filter((towns => towns.name == 'Soda Springs' || towns.name == 'Fish Haven' || towns.name == 'Preston'  ));
    console.log(onlyThree);

    for(let i=0; i<towns.length; i++){
        let card = document.createElement('section'); // container
        let h3= document.createElement('h3');
        let motto = document.createElement('p');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainFall = document.createElement('p');
        let img = document.createElement('img');

        h3.textContent = onlyThree[i].name ;
        motto.textContent = onlyThree[i].motto ;
        year.textContent = "Year Founded : " + onlyThree[i].yearFounded;
        population.textContent = "Population : " + onlyThree[i].currentPopulation;
        rainFall.textContent = "Average Rain Fall: " + onlyThree[i].averageRainfall;
        img.setAttribute('src', `images/${onlyThree[i].photo}`);
        img.setAttribute('alt', `${onlyThree[i].name}`);


        card.append(h3);
        card.append(motto);
        card.append(year);
        card.append(population);
        card.append(rainFall);
        card.append(img);


        document.querySelector('div.herodiv').append(card);
    }

    });
  