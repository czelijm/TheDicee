function chooseRandomDiceFile(number){
    // var randomNumber1 = Math.floor(Math.random()*6)+1;
    return('images/'.concat('dice',number,'.png'));
}

// function chooseRandomDiceFilePath(number){
//
//   return 'images/'.concat(chooseRandomDiceFile());
// }

function dice(){
  diceRandomNumerArray = [];
  for (var i = 0; i < 2; i++) {
    diceRandomNumerArray.push(Math.floor(Math.random()*6)+1);
    console.log(diceRandomNumerArray[i]);
    console.log(chooseRandomDiceFile(diceRandomNumerArray[i]));
    document.querySelectorAll(".dice img")[i].src =  chooseRandomDiceFile(diceRandomNumerArray[i]);
  }
    if(diceRandomNumerArray[0]>diceRandomNumerArray[1]){
      document.querySelector(".container h1").textContent = "Player 1 Win!!!"
    } else if(diceRandomNumerArray[0]<diceRandomNumerArray[1]){
        document.querySelector(".container h1").textContent = "Player 2 Win!!!"
    } else{
        document.querySelector(".container h1").textContent = "Draw!!!"
    }
}
 dice();

// window.addEventListener('beforeunload', function (e) {
//   dice();
//   // Cancel the event
//
//    // e.preventDefault();
//
//
//   delete e['returnValue'];
//   // Chrome requires returnValue to be set
//   // e.returnValue = '';
// });

// document.querySelectorAll(".dice img")[]
