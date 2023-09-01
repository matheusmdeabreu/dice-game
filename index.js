var randomNumberUm = Math.floor(Math.random() * 6) + 1;
var randomNumberDois = Math.floor(Math.random() * 6) + 1;

var dadoUm = document.getElementsByClassName("img1")[0];
var dadoDois = document.getElementsByClassName("img1")[1];

var randomSourceImage1 = "./images/dice" + randomNumberUm + ".png";
dadoUm.setAttribute("src", randomSourceImage1);

var randomSourceImage2 = "./images/dice" + randomNumberDois + ".png";
dadoDois.setAttribute("src", randomSourceImage2)

var mainTitle = document.querySelector("h1");

if (randomNumberUm > randomNumberDois){
    mainTitle.innerHTML = "🚩Player 1 Wins!";
}else if (randomNumberUm < randomNumberDois){
    mainTitle.innerHTML = "Player 2 Wins!🚩";
}else{
    mainTitle.innerHTML = "Draw!";
}