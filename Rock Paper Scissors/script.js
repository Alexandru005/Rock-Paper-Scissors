function pickComputerMove() 
{
    const randomNumber = Math.random();
    if (randomNumber < 1/3) {
      return 'Rock';
    } else if (randomNumber < 2/3) {
      return 'Paper';
    } else {
      return 'Scissors';
    }
  }

function displayResult(result, playerMove, computerMove)
{
    let html = `<h1>${result}</h1> 
                <br> 
                <div class="choise">
                <h3>You</h3> 
                <img src="/img/${playerMove}.png">  
                <h3>-</h3> 
                <img src="/img/${computerMove}.png"> 
                <h3>Computer</h3>
                </div>`;

      document.querySelector('.result').innerHTML =  html;

}

function playGame(playerMove) 
{
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

    displayResult(result, playerMove, computerMove);
}



