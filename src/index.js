console.log('%c HI', 'color: firebrick')
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

let breeds = []

document.addEventListener("DOMContentLoaded", function() {
   
    loadImages();
    loadBreedOptions();
  }); 

function loadImages() {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl)
    .then(response => response.json())
    .then(json => { 
        
            
    //   arrow notation ^  
        json.message.forEach(image => addImage(image))
        // console.log(json)
    });

// function notation
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(json){
    //     console.log(json);
    //     console.log(`hello`);
    // });
}

function addImage(dogPicUrl) {

    let container = document.querySelector("#dog-image-container");
    let newImg = document.createElement('img');
    newImg.src = dogPicUrl;
    container.appendChild(newImg)
    
}


function loadBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
    fetch(breedUrl)
        .then (response => response.json())
        .then(function(json){
            updatingBreedList(json.message);
            addingBreedSelectListener();
            // console.log(json.message);
        });
}

function updatingBreedList(breeds) {
    
    for (const property in breeds) {
        console.log(property)
        addBreed(property)
    }
}

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li')
    li.innerHTML = breed
    li.style.cursor = 'pointer';
    ul.appendChild(li)
    li.addEventListener('click', updateColor);

}

function updateColor(event) {
    event.target.style.color = 'red';
}


function selectBreedsStartingWith(letter) {
    updatingBreedList(breeds.filter(breed => breed.startsWith(letter)));
    
  }

function addingBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function(event) {
      selectBreedsStartingWith(event.target.value);

    });
  }
// console.log(json)

// fetch('http://api.open-notify.org/astros.json') 
// .then(function(response) {
//   return response.json();
// }).then(function(json) {
//   console.log(json);
//   console.log(`Holy cow! There are ${json["number"]} humans in space.`);
// }); 