function disableButtonAndChangeStyle(id1,id2,id3,id4,id5,id6,id7,id8,id9){
  
	document.getElementById(`${id1}`).disabled = true;
	document.getElementById(`${id2}`).disabled = true;
	document.getElementById(`${id3}`).disabled = true;
	document.getElementById(`${id4}`).disabled = true;
	document.getElementById(`${id5}`).disabled = true;
	document.getElementById(`${id6}`).disabled = true;

	document.getElementById(`${id7}`).style.color = "crimson";
	document.getElementById(`${id8}`).style.color = "crimson";
	document.getElementById(`${id9}`).style.color = "crimson";
}



function myfunc() {
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("1").value;
  b2 = document.getElementById("2").value;
  b3 = document.getElementById("3").value;
  b4 = document.getElementById("4").value;
  b5 = document.getElementById("5").value;
  b6 = document.getElementById("6").value;
  b7 = document.getElementById("7").value;
  b8 = document.getElementById("8").value;
  b9 = document.getElementById("9").value;

  

  if ((b1 == "x" || b1 == "X") &&
    (b2 == "x" || b2 == "X") &&
    (b3 == "x" || b3 == "X")) {
    document.querySelector(".score").innerHTML = "Player X won🎉";
    document.querySelector(".score").classList.add("bgGreen");

    disableButtonAndChangeStyle(4,5,6,7,8,9,1,2,3);

  } else if (
    (b1 == "x" || b1 == "X") &&
    (b4 == "x" || b4 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.querySelector(".score").innerHTML = "Player X won🎉";
    document.querySelector(".score").classList.add("bgGreen");
	
    disableButtonAndChangeStyle(2,3,5,6,8,9,1,4,7);
  } else if (
    (b7 == "x" || b7 == "X") &&
    (b8 == "x" || b8 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.querySelector(".score").innerHTML = "Player X won🎉";

    disableButtonAndChangeStyle(1,2,3,4,5,6,7,8,9);
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b6 == "x" || b6 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.querySelector(".score").innerHTML = "Player X won🎉";
    document.querySelector(".score").classList.add("bgGreen");

    disableButtonAndChangeStyle(1,2,4,5,7,8,3,6,9);
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.querySelector(".score").innerHTML = "Player X won🎉";
    document.querySelector(".score").classList.add("bgGreen");
    disableButtonAndChangeStyle(2,3,4,6,7,8,1,5,9);
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.querySelector(".score").innerHTML = "Player X won🎉";
    document.querySelector(".score").classList.add("bgGreen");
    disableButtonAndChangeStyle(1,2,4,6,8,9,3,5,7);
  } else if (
    (b2 == "x" || b2 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b8 == "x" || b8 == "X")
  ) {
    document.querySelector(".score").innerHTML = "Player X won🎉";
    document.querySelector(".score").classList.add("bgGreen");
    disableButtonAndChangeStyle(1,3,4,6,7,9,2,5,8);
  } else if (
    (b4 == "x" || b4 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b6 == "x" || b6 == "X")
  ) {
    document.querySelector(".score").innerHTML = "Player X won🎉";
    document.querySelector(".score").classList.add("bgGreen");
    disableButtonAndChangeStyle(1,2,3,7,8,9,4,5,6);
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b2 == "0" || b2 == "0") &&
    (b3 == "0" || b3 == "0")
  ) {
    document.querySelector(".score").innerHTML = "Player O won🎉";
    document.querySelector(".score").classList.add("bgGreen");
    disableButtonAndChangeStyle(4,5,6,7,8,9,1,2,3);
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b4 == "0" || b4 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.querySelector(".score").innerHTML = "Player O won🎉";
    document.querySelector(".score").classList.add("bgGreen");
    disableButtonAndChangeStyle(2,3,5,6,8,9,1,4,7);
  } else if (
    (b7 == "0" || b7 == "0") &&
    (b8 == "0" || b8 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.querySelector(".score").innerHTML = "Player O won🎉";
    document.querySelector(".score").classList.add("bgGreen");
	disableButtonAndChangeStyle(1,2,3,4,5,6,7,8,9);
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b6 == "0" || b6 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.querySelector(".score").innerHTML = "Player O won🎉";
    document.querySelector(".score").classList.add("bgGreen");
	disableButtonAndChangeStyle(1,2,4,5,7,8,3,6,9);
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.querySelector(".score").innerHTML = "Player O won🎉";
    document.querySelector(".score").classList.add("bgGreen");
	disableButtonAndChangeStyle(2,3,4,6,7,8,1,5,9);
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.querySelector(".score").innerHTML = "Player O won🎉";
    document.querySelector(".score").classList.add("bgGreen");
	disableButtonAndChangeStyle(1,2,4,6,8,9,3,5,7);
  } else if (
    (b2 == "0" || b2 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b8 == "0" || b8 == "0")
  ) {
    document.querySelector(".score").innerHTML = "Player O won🎉";
    document.querySelector(".score").classList.add("bgGreen");
    	disableButtonAndChangeStyle(1,3,4,6,7,9,2,5,8);
  } else if (
    (b4 == "0" || b4 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b6 == "0" || b6 == "0")
  ) {
    document.querySelector(".score").innerHTML = "Player O won🎉";
    document.querySelector(".score").classList.add("bgGreen");
	disableButtonAndChangeStyle(1,2,3,7,8,9,4,5,6);
  } else if (
    (b1 == "X" || b1 == "0") &&
    (b2 == "X" || b2 == "0") &&
    (b3 == "X" || b3 == "0") &&
    (b4 == "X" || b4 == "0") &&
    (b5 == "X" || b5 == "0") &&
    (b6 == "X" || b6 == "0") &&
    (b7 == "X" || b7 == "0") &&
    (b8 == "X" || b8 == "0") &&
    (b9 == "X" || b9 == "0")
  ) {
    document.querySelector(".score").innerHTML = "Match Tie🏳️";
    document.querySelector(".score").classList.add("tie");
  } else {
    if (flag == 1) {
      document.querySelector(".score").innerHTML = "Player X Turn";
    } else {
      document.querySelector(".score").innerHTML = "Player O Turn";
    }
  }
}

function restartGame() {
  location.reload();
  b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = "";
}

flag = 1;

function draw(gridValue) {
  let gridBox = document.getElementById(`${gridValue}`);
  if (flag == 1) {
    gridBox.value = "X";
    gridBox.innerHTML = "X";
    flag = 0;
  } else {
    gridBox.value = "0";
    gridBox.innerHTML = "O";
    flag = 1;
  }
  gridBox.disabled = true;
}
