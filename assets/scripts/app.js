'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// const USER_TOKEN = 'X'
// const CPU_TOKEN = 'Y'

$(() => {
const playerOne = "X";
const playerTwo = "O";

const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let movesMade = 0;
let currentPlayer = playerOne




  $('.tile').click(function () {
    $(this).html(currentPlayer);
    movesMade++;

    if (movesMade % 2 === 0) {
      currentPlayer = playerOne
    } else {
      currentPlayer = playerTwo
    }


const a = $(this).data('a')
const b = $(this).data('b')
grid[a][b] = currentPlayer;
console.log(grid[0][0])



    // function gameOver () {
    //   for (let a = 0; a < 3; a++) {
    //     // check for win, horizontal
    //     if (grid[0][0] !== ' ' &&
    //     grid[0][0] === grid[0][1] &&
    //     grid[0][0] === grid[0][2]) {
    //       console.log('yes')
    //       return grid[0][0]
    //
    //     }
    //   }
    //   // check vertical win
    //   for (let b = 0; b < 3; b++) {
    //     if (grid[0][b] !== ' ' &&
    //     grid[0][b] === grid[1][b] &&
    //     grid[0][b] === grid[2][b]) {
    //       return grid[0][b]
    //     }
    //   }
    //   // check diagonal win (top left bottom right)
    //   if (grid[0][0] !== ' ' &&
    //     grid[0][0] === grid[1][1] &&
    //     grid[0][0] === grid[2][2]) {
    //     return grid[0][0]
    //   }
    //   // check diagnonal win (bottom left top right)
    //   if (grid[2][0] !== ' ' &&
    //     grid[2][0] === grid[1][1] &&
    //     grid[2][0] === grid[0][2]) {
    //     return grid[2][0]
    //   }
    //
    //   return null;
    // }

});

//   const playerOne = 'X'
//   const playerTwo = 'O'
//
// let currentPlayer = playerOne
//
//   $('.tile').click(function () {
//     $(this).html(currentPlayer);
//     // a = row, b = columns
//     const a = $(this).data('a')
//     const b = $(this).data('b')
//     grid[a][b] = playerOne;
//
// function changeTurn() {
//       if (currentPlayer === playerOne) {
//         currentPlayer === playerTwo;
//       } else {
//         currentPlayer === playerOne;
//       }
// }
//
//
//
// })
//
// // funtion changeTurn() {
// // }
//
// const grid = [
//       [' ', ' ', ' '],
//       [' ', ' ', ' '],
//       [' ', ' ', ' ']
// ];
//
// function gameOver () {
//       for (let a = 0; a < 3; a++) {
//       // check for win, horizontal
//         if (grid[a][0] !== ' ' &&
//     grid[a][0] === grid[a][1] &&
//     grid[a][0] === grid[a][2]) {
//           return grid[a][0]
//         }
//       }
//       // check vertical win
//       for (let b = 0; b < 3; b++) {
//         if (grid[0][b] !== ' ' &&
//     grid[0][b] === grid[1][b] &&
//     grid[0][b] === grid[2][b]) {
//           return grid[0][b]
//         }
//       }
//       // check diagonal win (top left bottom right)
//       if (grid[0][0] !== ' ' &&
//     grid[0][0] === grid[1][1] &&
//     grid[0][0] === grid[2][2]) {
//         return grid[0][0]
//       }
//       // check diagnonal win (bottom left top right)
//       if (grid[2][0] !== ' ' &&
//     grid[2][0] === grid[1][1] &&
//     grid[2][0] === grid[0][2]) {
//         return grid[2][0]
//       }
//
//     return null;
//   }
//
//
//
//   //
//   // let currentPlayer = playerOne;
//   //
//   // const moves = []
//
//
//
//     // console.log(grid);
//
//     // if (gameOver()) {
//     //
//     // } else {
//     //
//     // }
//
//   })
// // });
//
// //   $('td').on('click', function () {
// // //     console.log(currentPlayer)
// // //   })

})
