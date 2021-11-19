// elementen voor de html
const imageContainer = document.getElementById("image-container");
const lader = document.getElementById("lader");

let fotooArray = [];

// Unsplash API
const count = 50;

//nog proberen categorien te maken
const tag = "cat";

const apiKey = "woWzSbIsxI_H6-VAClySN9uGftrG8Ng203qfpEyrs7A";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper functie om setAttribute toe te passen op de DOM elementen

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Maak elementen aan en toon ze

function toonFotoos() {
  fotooArray.forEach((fotoo) => {
    // link naar Unsplash maken in nieuw venster
    const item = document.createElement("a");

    setAttributes(item, {
      href: fotoo.links.html,
      target: "__blank",
    });
    // fotoo
    const img = document.createElement("img");

    setAttributes(img, {
      src: fotoo.urls.regular,
      alt: fotoo.alt_desription,
      title: fotoo.alt_description,
    });

    // fotoo in a element zetten en dan allebei in image-container
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Haal fotoos van Unsplash

async function getFotoos() {
  try {
    const response = await fetch(apiUrl);
    fotooArray = await response.json();
    toonFotoos();
  } catch (error) {}
}

// laden pagina

getFotoos();
