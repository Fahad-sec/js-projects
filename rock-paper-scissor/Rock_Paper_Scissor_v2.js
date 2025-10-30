<!DOCTYPE html>
<html>
  <head>
    <title>Rock Paper Scissors</title>
  </head>
    <p>Rock Paper Scissor</p>
    <body>
      <button onclick="
          const randomNumber = Math.random();
          let computerMove = '';
          if (randomNumber < 1/3 ) {
            computerMove = 'Rock';
          } else if (randomNumber < 2/3 ) {
            computerMove = 'Paper';
          } else {
            computerMove = 'Scissors';
          }

          let result = '';
          if (computerMove === 'Rock') {
            result ='Tie!';
          } else if (computerMove === 'Paper') {
            result = 'YOU LOSE!'; 
          } else {
            result = 'YOU WIN!';
          }
          alert(`You Chose Rock. Computer Chose ${computerMove}. ${result}`);

      ">rock</button>

      <button onclick="
      
          const randomNumber = Math.random();
          let computerMove = '';
          if (randomNumber < 1/3 ) {
            computerMove = 'Rock';
          } else if (randomNumber < 2/3 ) {
            computerMove = 'Paper';
          } else {
            computerMove = 'Scissors';
          }
                
          let result = '';
          if (computerMove === 'Rock') {
            result ='YOU WIN!';
          } else if (computerMove === 'Paper') {
            result = 'TIE!'; 
          } else {
            result = 'YOU LOSE!';
          }
          alert(`You Chose Paper. Computer Chose ${computerMove}. ${result}`);

      ">Paper</button>

      <button onclick="
      
          const randomNumber = Math.random();
          let computerMove = '';
          if (randomNumber < 1/3 ) {
            computerMove = 'Rock';
          } else if (randomNumber < 2/3 ) {
            computerMove = 'Paper';
          } else {
            computerMove = 'Scissors';
          }
          let result = '';
          if (computerMove === 'Rock') {
            result ='YOU LOSE!';
          } else if (computerMove === 'Paper') {
            result = 'YOU WIN!'; 
          } else {
            result = 'TIE!';
          }
          alert(`You Chose Scissors. Computer Chose ${computerMove}. ${result}`);

      ">Scissors</button>
    </body>
  </html>
