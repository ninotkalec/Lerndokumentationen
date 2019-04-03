var para = document.getElementById('player1');

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
$("#event").on("click", function() {
  $("#verschwinden").toggle();
})