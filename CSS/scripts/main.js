



// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === "https://www.mozilla.org/media/img/home/2023/mozilla-dino.3affc2229c70.svg") {
    myImage.setAttribute ('src',"https://t1.uc.ltmcdn.com/es/posts/1/9/1/como_eliminar_el_historial_de_firefox_1191_600.webp");
  } else {
    myImage.setAttribute ('src',"https://www.mozilla.org/media/img/home/2023/mozilla-dino.3affc2229c70.svg");
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
