      let score = (JSON.parse(localStorage.getItem('score'))) || {
        Wins: 0,
        Losses: 0,
        Ties: 0
      };
      update();
      let outcome = '';
      let computerMove
      let result = '';
      function move(value) {

        computerMove = Math.random()
        if (computerMove < 1/3) {
          result = 'Rock'
        } else if (computerMove < 2/3) {
          result = 'Paper'
        } else {
          result = 'Scissors'
        }

        if (value === result) {
           outcome = "It's a Tie!";
           score.Ties++;
        } else if(
          (value === 'Rock' && result === 'Scissors') ||
          (value === 'Paper' && result === 'Rock') ||
          (value === 'Scissors' && result === 'Paper')
      )
          {
            outcome = 'YOU Win!';
             score.Wins++;
          } else {
            outcome = 'You Lose!';
            score.Losses++;
          }

          localStorage.setItem('score', JSON.stringify(score));
          
          document.querySelector('.js-move').innerHTML = `You Chose: <img src="images/${value}-emoji.png" class="move-icon">
          Computer Chose: <img src="images/${result}-emoji.png" class="move-icon">`;

          document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;

          document.querySelector('.js-result').innerHTML = outcome

      }
        function resetScore() {
          score.Wins = 0;
          score.Losses = 0;
          score.Ties = 0;
          update();
        }

        function update() {
          document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
        }
      
