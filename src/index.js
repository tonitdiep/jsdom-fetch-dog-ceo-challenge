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
        console.log(json)
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
            console.log(json.message);
        });
}

function updatingBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    breeds.forEach(breed => addBreed(breed));
}

function addBreed(breed) {


}
// console.log(json)

// fetch('http://api.open-notify.org/astros.json') 
// .then(function(response) {
//   return response.json();
// }).then(function(json) {
//   console.log(json);
//   console.log(`Holy cow! There are ${json["number"]} humans in space.`);
// }); 