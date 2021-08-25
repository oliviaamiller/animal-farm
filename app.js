// import functions
const catImg = document.getElementById('cat');
const catSound = document.getElementById('meow');
const catSpan = document.getElementById('cat-span');

const dogImg = document.getElementById('dog');
const dogSound = document.getElementById('bark');
const dogSpan = document.getElementById('dog-span');

const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('neigh');
const horseSpan = document.getElementById('horse-span');


let catClicks = 0;
let dogClicks = 0;
let horseClicks = 0;

// reference needed DOM elements


// set event listeners 

catImg.addEventListener('click', () => {
    catSound.play();
    catClicks ++;
    catSpan.textContent = catClicks + ' meows';
});

dogImg.addEventListener('click', () => {
    dogSound.play();
    dogClicks ++;
    dogSpan.textContent = dogClicks + ' barks';
});

horseImg.addEventListener('click', () => {
    horseSound.play();
    horseClicks ++;
    horseSpan.textContent = horseClicks + ' neighs';
    
});

  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
