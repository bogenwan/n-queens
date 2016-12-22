/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  // quick solution draw diagonal without checking for conflicts
  // for (var i = 0; i < n; i++) {
  //   solution.togglePiece(i, i);
  // }

  // check all spots on board and toggle if no conflict
  for (var rows = 0; rows < n; rows++) {
    for (var columns = 0; columns < n; columns++) {
      if (solution.rows()[rows][columns] === 0) {
        solution.togglePiece(rows, columns);
        if (solution.hasAnyRooksConflicts()) {
          solution.togglePiece(rows, columns);
        }
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var initialBoard = new Board({n: n});
  var solutionCount = 0;
  // var rowIndex = 0;
  // var colIndex = 0;

  var helper = function(board) {
    board.findNRooksSolution(n);

    // // var rows = board.rows();
    // // iterate through all rows on board
    // for (var row = rowIndex; row < n; row++) {
    //   // iterate through all positions in row
    //   for (var col = colIndex; col < n; col++) {
    //     // check if position already has a rook
    //     if (board.rows()[row][col] === 1) {
    //       rowIndex++;
    //       // colIndex++;
    //     } else {
    //       // toggle piece if spot is vacant
    //       board.togglePiece(row, col);
    //       // check if conflicts
    //       if (board.hasAnyRooksConflicts()) {
    //         // if conflicts, toggle back
    //         board.togglePiece(row, col);
    //       }
    //       // create new board with toggled piece
    //       var newBoard = board;
    //       // if no conflict after adding new piece, recall function with new board
    //       helper(newBoard, rowIndex, colIndex, n);
    //     }
    //   }
    // }
    // return newBoard;
  };

  // if (n === 1) {
  //   solution.togglePiece(0, 0);
  //   return solution.rows();
  // } else {

  // }

  helper(initialBoard);
  // helper(initialBoard, rowIndex, colIndex, n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
