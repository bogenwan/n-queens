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
  var solution = undefined; //fixme
  var board = new Board({n: n});
  var numberOfRooks = n;

  var helper = function(board) {
    var rows = board.rows();
    // iterate through all rows on board
    for (var i = 0; i < rows.length; i++) {
      // iterate through all positions in row
      for (var j = 0; j < rows[i].length; j++) {
        // check if position already has a rook
        if (rows[i][j] === 0) {
          // create new board with toggled piece
          var newBoard = board.togglePiece(i, j);
          // check if conflicts after adding new piece
          if (newBoard.hasAnyRooksConflicts) {
            // toggle off if it has a conflict
            newBoard.togglePiece(i, j);
          } else {
            // if no conflict after adding new piece, recall function with new board
            helper(newBoard);
          }
        }
      }
    }
  };

  helper(board);




  // iterate through each row
    // toggle first pieces
    // toggle second piece
    // check if has conflict
        // if yes, toggle back 2nd piece
        // if no, continue to next piece

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

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
