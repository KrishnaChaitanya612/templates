var score = 0;
var bonus = 300;
var image = "";
var position = 0;
var rollRandom;
var rollCount = 0;
function roll() {
  if (image == "") {
    document.querySelector("#message").style.color = "Red";
    document.querySelector("#message").innerHTML =
      "Please choose a car to proceed!";
    return;
  }
  setTimeout(function () {
    rollRandom = Math.floor(Math.random() * 6) + 1;
    //  console.log(rollRandom);
    document
      .querySelector("#diceImage")
      .setAttribute("src", "dice-" + rollRandom + ".png");
    rollCount += 1;
    document.querySelector("#rollCount").innerHTML = rollCount;
    var p = position;
    p += rollRandom;

    if (p < 18) {
      while (position < p) {
        position += 1;
        console.log(position);
        document.querySelector("#ig" + position).setAttribute("src", image);
        document.querySelector("#ig" + position).style.visibility = "visible";
        for (let i = 0; i < 18; i++) {
          if (i == position) {
            continue;
          } else {
            document.querySelector("#ig" + i).style.visibility = "hidden";
          }
        }
        if (position % 10 == 0) {
          score += 300;
        } else {
          score += 100;
        }
      }
      console.log(score);
      document.querySelector("#score").innerHTML = score;
    } else {
      if (position == 17) {
        document.querySelector("#message").style.color = "Green";
        document.querySelector("#message").innerHTML =
          "Wohoo!<br> You won the Game!!!Click on Start to start a new game";
        document.querySelector("#subm").innerHTML =
          "Click on Start to start a new game";
      } else {
        document.querySelector("#message").style.color = "Orange";
        document.querySelector("#message").innerHTML =
          "Try your luck again! <br> Re-Roll the dice.";
        p = position;
      }
    }
  }, 1000);
}
function choseImage(chosenId) {
  image = chosenId + ".png";
  document.querySelector("#ig0").setAttribute("src", chosenId + ".png");
  document.querySelector("#message").innerHTML = "GET! SET! GOO!";
}

function startOver() {
  location.reload();
  document.querySelector("#message").innerHTML = "Choose a new car to restart";
}
// var canvas = document.getElementById('canvas');
// canvas.width = canvas.getBoundingClientRect().width;
// canvas.height = canvas.getBoundingClientRect().height;
// var ctx=canvas.getContext('2d');
// ctx.fillStyle = "green";

// ctx.fillRect(10, 10, 70, 70);
// ctx.fillStyle = "red";
// ctx.font = "30px serif";
// ctx.Align="center";
// ctx.fillText('start', 20, 50);
// var img = document.getElementById("scream");
// ctx.drawImage(img, 10, 10);

// ctx.fillStyle = "green";
// ctx.fillRect(100, 10, 70, 70);
// ctx.fillStyle = "red";
// ctx.font = "30px serif";
// ctx.Align = "center";
// ctx.fillText('1', 128, 53);

// ctx.fillStyle = "green";
// ctx.fillRect(190, 10, 70, 70);
// ctx.fillStyle = "red";
// ctx.font = "30px serif";
// ctx.Align = "center";
// ctx.fillText('2', 220, 53);

// ctx.fillStyle = "green";
// ctx.fillRect(280, 10, 70, 70);
// ctx.fillStyle = "red";
// ctx.font = "30px serif";
// ctx.Align = "center";
// ctx.fillText('3', 310, 53);

// ctx.fillStyle = "green";
// ctx.fillRect(370, 10, 70, 70);
// ctx.fillStyle = "red";
// ctx.font = "30px serif";
// ctx.Align = "center";
// ctx.fillText('4', 310, 53);

// ctx.fillStyle = "green";
// ctx.fillRect(460, 10, 70, 70);
// ctx.fillStyle = "red";
// ctx.font = "30px serif";
// ctx.Align = "center";
// ctx.fillText('5', 310, 53);

// ctx.fillStyle = "green";
// ctx.fillRect(460, 100, 70, 70);
// ctx.fillStyle = "red";
// ctx.font = "30px serif";
// ctx.Align = "center";
// ctx.fillText('6', 310, 53);

// ctx.fillStyle = "green";
// ctx.fillRect(460, 190, 70, 70);
// ctx.fillStyle = "red";
// ctx.font = "30px serif";
// ctx.Align = "center";
// ctx.fillText('6', 310, 53);

// var y1=280;
// for(var i=0;i<2;i++){
//     ctx.fillStyle = "green";
//     ctx.fillRect(460, y1, 70, 70);
//     ctx.fillStyle = "red";
//     ctx.font = "30px serif";
//     ctx.Align = "center";
//     ctx.fillText('6', 310, 53);
//     y1=y1+20+70;
// }
// var x1=390-20;
// for(var i=0;i<5;i++){
//     ctx.fillStyle = "green";
//     ctx.fillRect(x1, y1-90, 70, 70);
//     ctx.fillStyle = "red";
//     ctx.font = "30px serif";
//     ctx.Align = "center";
//     ctx.fillText('6', 310, 53);
//     x1=x1-90;
// }
// x1=x1+90;
// for(var i=0;i<4;i++){
//     ctx.fillStyle = "green";
//     y1=y1-90;
//     ctx.fillRect(x1, y1, 70, 70);
//     ctx.fillStyle = "red";
//     ctx.font = "30px serif";
//     ctx.Align = "center";
//     ctx.fillText('6', 310, 53);
// }
