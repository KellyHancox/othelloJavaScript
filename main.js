/*******************************************************************
 * Othello
 * Javascript project for CIS 343.
 * Command-line version of Othello.
 * @author: Kelly Hancox
 ********************************************************************/

// Import board definitions
const board = require('./board.js');
// Import a synchronous prompt library
const prompt = require('prompt-sync')();

 /**********************************************************************
 	* SYNCHRONOUS (blocking) file save function.
 	* @param file - The full filename path we want to save to.
 	* @param contents - The object we wish to save as a JSON file.
  **********************************************************************/
function saveFile(file, contents){
	let fs = require('fs');
	fs.writeFileSync(file, JSON.stringify(contents));
}

 /**********************************************************************
	* loadFile
	* SYNCHRONOUS (blocking) file read function.
  * @param file - The full filename path we wish to load an object from.
  * @return contents - The object converted from JSON.
	**********************************************************************/
function loadFile(file){
	let fs = require('fs');
			let content = fs.readFileSync(file);
			let obj = JSON.parse(content);
			return obj;
}

 /**********************************************************************
  * Driver function.  "main" method, if you will.
  **********************************************************************/
function start(){
 	// Local variables
	let height = prompt('What height for your board? ');
	let width = prompt('What width for your board? ');

	// SYNCHRONOUSLY read from keyboard
	console.log('Creating a board with size ' + height + ' x ' + width + ' y');
	// Create new board object
	let myBoard = new board(height, width);

	// Print board
	myBoard.printBoard();

	//start us off with B
  //let turn = 1;

	let currentDisc = 'B';
	let row;
	let col;

	// Loop, asking user input, calling appropriate functions.
	while (myBoard.isGameOver() == false) {

		// if (turn == 1){
		// 	currentDisc = 'B';
		// }else{
		// 	currentDisc = 'W';
		// }

			if (myBoard.isValidMoveAvailable(currentDisc) == false) {
				console.log('No valid moves available for player ' + turn + '. You lose your turn.');
			} else {
				do {
					var location = prompt("Enter location to place your disc (row col): ")
					location1 = location.split(' ');
					row = location1[0];
					col = location1[1];

					if (row < 1 || row > myBoard.height || col < 1 || col > myBoard.width) {
						console.log("Sorry, invalid input. Try again.\n");
						continue;
					}
					row--;	// adjust it for zero-indexed array of board
					col--;  // adjust it for zero-indexed array of board
					if (myBoard.isValidMove(row, col, currentDisc) == false) {
						console.log("Sorry, that is not a valid move. Try again.\n");
						continue;
					}
					break;
				} while (true);
				console.log("main 89: current disc is: " + currentDisc);
				myBoard.placeDiscAt(row,col,currentDisc);
			}

			// if(turn == 1){
			// 	turn = 2;
			// 	console.log('turn is now ' + turn);
			// }else{
			// 	turn = 1;
			// 	console.log('turn is now ' + turn);
			// }


			myBoard.printBoard();

			if(currentDisc == 'B'){
				currentDisc = 'W';
				console.log('main 106: current disc has now changed to: ' + currentDisc);
			}else if(currentDisc == 'W'){
				currentDisc = 'B';
				console.log('main 109: current disc has now changed to: ' + currentDisc);
			}

		}

		console.log(myBoard.checkWinner() + 'Wins!');
	// Save board example code.
	saveFile("test.json", myBoard);
}

console.clear();
start();
