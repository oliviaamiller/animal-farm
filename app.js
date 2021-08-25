// import functions
const catImg = document.getElementById('cat');
const catSound = document.getElementById('meow');

const dogImg = document.getElementById('dog');
const dogSound = document.getElementById('bark');

const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('neigh');


// reference needed DOM elements


// set event listeners 

catImg.addEventListener('click', () => {
    catSound.play();
});

dogImg.addEventListener('click', () => {
    dogSound.play();
});

horseImg.addEventListener('click', () => {
    horseSound.play();
});

  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
