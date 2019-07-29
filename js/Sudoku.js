/**
 * Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board,
 * and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's,
 * which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.
 */

 function validSolution(board) {
   let checker;
   const check = (group) => {
     let s = new Set(group);
    //  if (s.size == 9) {
    //    console.log("true");
    //   } else {
    //     console.log("something isn't right!");
    //     checker = false;
    //   };
    if (s.size != 9) checker = false;
   }
   for (let i = 0; i < board.length; i++) {
     let column = [];
     board.forEach(col => {
      column.push(col[i]);
     });
     check(column);
     check(board[i]);
   }
   return (checker == undefined ? true : false);
 }

 // passed 5/6

validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
              [6, 7, 2, 1, 9, 5, 3, 4, 8],
              [1, 9, 8, 3, 4, 2, 5, 6, 7],
              [8, 5, 9, 7, 6, 1, 4, 2, 3],
              [4, 2, 6, 8, 5, 3, 7, 9, 1],
              [7, 1, 3, 9, 2, 4, 8, 5, 6],
              [9, 6, 1, 5, 3, 7, 2, 8, 4],
              [2, 8, 7, 4, 1, 9, 6, 3, 5],
              [3, 4, 5, 2, 8, 6, 1, 7, 9]]);