// class: audio
// class: album
// id: innerspeaker id: solitude
// id: lonerism id: backwards
//id: currents id: happen
// id: slow id: borderline

let audioClass = document.querySelectorAll('.audio');
let albumClass = document.querySelectorAll('.album');

//function that hides audio class

function hideAll() {
  audioClass.forEach(function(el) {
    el.style.display = "none";
  });
}
//run fuction
hideAll();

let players = document.querySelectorAll('audio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });


albumClass.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();
  players.forEach(function(el){
    el.pause();
    el.currentTIme = 0;
  switch (e.target.getAttribute('id')) {
    case 'innerspeaker':
      document.querySelector('#solitude').style.display = 'block';
      break;
    case 'lonerism':
      document.querySelector('#backwards').style.display = 'block';
      break;
    case 'currents':
      document.querySelector('#happen').style.display = 'block';
      break;
    case 'slow':
      document.querySelector('#borderline').style.display = 'block';
      break;
     }
   });
  }
});
