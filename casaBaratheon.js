function quedaBaratheon() {
    var brasaoDiv = document.getElementById("brasao");
    brasaoDiv.classList.add("queda-Baratheon");
  
    setTimeout(function() {
      brasaoDiv.classList.remove("queda-Baratheon");
    }, 3000);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var brasaoElement = document.getElementById("brasao");
    brasaoElement.addEventListener("click", quedaBaratheon);
  });
  
function winter() {
    snowStorm.toggleSnow();
    alert("O inverno chegou!");
}

function mudarTexto(texto) {
    document.getElementById("textoMenu").innerHTML = texto;

    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < imagens.length; i++) {
        if (imagens[i].classList.contains("highlight")) {
            imagens[i].classList.remove("highlight");
            imagens[i].classList.add("custom-fade");
        }
        if (imagens[i].src === event.target.src) {
            imagens[i].classList.remove("custom-fade");
            imagens[i].classList.add("highlight");
        }
    }
}

var urls = [
  { texto: "Robert Baratheon", urlId: '34', elementId: 'robertBaratheon' },
  { texto: "Stannis Baratheon", urlId: '18', elementId: 'stannisBaratheon' }
];

document.addEventListener("DOMContentLoaded", function() {
  for (var i = 0; i < urls.length; i++) {
    var url = urls[i];
    fetchCharacterData(url);
  }
});

function fetchCharacterData(url) {
  var urlAPI = 'https://thronesapi.com/api/v2/Characters/' + url.urlId;

  fetch(urlAPI)
    .then(response => response.json())
    .then(response => exibir(response.imageUrl, url.elementId));
}

function exibir(imageUrl, elementId) {
  var characterImage = document.getElementById(elementId);
  characterImage.src = imageUrl;
}