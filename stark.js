var urls = [
    { texto: "Eddard Stark", urlId: '6', elementId: 'nedStark' },
    { texto: "Arya Stark", urlId: '3', elementId: 'aryaStark' },
    { texto: "John Snow", urlId: '2', elementId: 'jonSnow' }
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

  function winter() {
    snowStorm.toggleSnow();
    alert("O inverno chegou!");
}
