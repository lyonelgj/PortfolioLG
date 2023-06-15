const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = '../json/mr.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Ubication: ' + jsonObj['ubication'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
  }

  function showHeroes(jsonObj) {
    const heroes = jsonObj['members'];
  
    for (var i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('img')
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myPara4 = document.createElement('p');
      const myPara5 = document.createElement('p');
      const myPara6 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.src = heroes[i].imagen;
      myPara2.textContent = 'Materials: ' + heroes[i].materials;
      myPara3.textContent = 'Description: ' + heroes[i].description;
      myPara4.textContent = 'Color: ' + heroes[i].color;
      myPara5.textContent = 'Price: ' + heroes[i].price;
      myPara6.textContent = 'Stock: ' + heroes[i].stock;
  
      const superPowers = heroes[i].stock;
      for (var j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myPara5);
      myArticle.appendChild(myPara6);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }