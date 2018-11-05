'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// const USER_TOKEN = 'X'
// const CPU_TOKEN = 'Y'

$(() => {

  const playerOne = 'X'
  const playerTwo = 'O'

const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

function GameOver() {
  //check for win
  for (var a = 0; a < 3; a++) {
    if (grid[a][0] !== ' ' &&
    grid[a][0] === grid[a][1] &&
    grid[a][0] === grid[a][2]) {
      return grid[i][0]
    }
  }

  for (var b = 0; b < 3; b++) {
    if (grid[0][b] !== ' ' &&
    grid[0][b] === grid[1][b] &&
    grid[0][b] === grid[2][b]) {
      return grid[i][0]
}
  //
  // let currentPlayer = playerOne;
  //
  // const moves = []

$('.tile').click(function () {
    $(this).html(playerOne);
    const a = $(this).data('a');
    const b = $(this).data('b');
    grid[a][b] = playerOne;
    console.log(grid);

    if (GameOver()) {

    } else {

    }

    }
  });




//   $('td').on('click', function () {
//     console.log(currentPlayer)
//   })
})
