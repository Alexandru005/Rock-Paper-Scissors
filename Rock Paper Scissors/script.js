function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1/3) {
      return 'Rock';
    } else if (randomNumber < 2/3) {
      return 'Paper';
    } else {
      return 'Scissors';
    }
  }

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
  
    if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
        result = 'Tie';
      } else if (computerMove === 'Paper') {
        result = 'Lose';
      } else {
        result = 'Win';
      }
    } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
        result = 'Win';
      } else if (computerMove === 'Paper') {
        result = 'Tie';
      } else {
        result = 'Lose';
      }
    } else if (playerMove === 'Scissors') {
      if (computerMove === 'Rock') {
        result = 'Lose';
      } else if (computerMove === 'Paper') {
        result = 'Win';
      } else {
        result = 'Tie';
      }
    }
  
    alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}`);
  }