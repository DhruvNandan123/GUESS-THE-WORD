//FUNCTION ADD//
function add(){
   player1_name = document.getElementById("PLAYER_1_INFO").value;
   player2_name = document.getElementById("PLAYER_2_INFO").value;

   localStorage.setItem("PLAYER_1_INFO",player1_name);
   localStorage.setItem("PLAYER_2_INFO",player2_name);

   window.location = "game_page.html";
}