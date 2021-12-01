player_1_name = localStorage.getItem("PLAYER_1_INFO");
player_2_name = localStorage.getItem("PLAYER_2_INFO");


player_1score = 0;
player_2score = 0;


document.getElementById("Player_1_name").innerHTML = player_1_name;
document.getElementById("Player_2_name").innerHTML = player_2_name;

document.getElementById("player_1score").innerHTML = player_1score;
document.getElementById("player_2score").innerHTML = player_2score;

document.getElementById("question_turn").innerHTML = "Question Turn -" + player_1_name;
document.getElementById("answer_turn").innerHTML =   "Answer turn -"  +  player_2_name;


function Send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    
    charAt1 = word.charAt(1);

    Word_middle = Math.floor(word.length/2);
    charAt2 = word.charAt(Word_middle);

    length_last = word.length - 1;
    charAt3 = word.charAt(length_last);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");

    question = "<h4 id='question_display'>" +remove_charAt3+ "</h4>";
    input_box = "Enter your guess:"+"<input id='input_box'>"+"<br>";
    check_button = "<button class='btn btn-sucess' onclick='check()'>CHECK</button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = " ";
}