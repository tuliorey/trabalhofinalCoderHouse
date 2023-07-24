var urls = [
    { texto: "Tywin Lannister", urlId: '42', elementId: 'tywinLannister' },
    { texto: "Cersei Lannister", urlId: '9', elementId: 'cerseiLannister' },
    { texto: "Tyrion Lannister", urlId: '14', elementId: 'tyrionLannister' }
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