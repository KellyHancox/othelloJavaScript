 /**********************************************************************
 	* Board
 	* Defines a board "class" for an Othello game.
  **********************************************************************/
module.exports = class Board {


 /**********************************************************************
	* constructor
	* Construct the object with required state
	**********************************************************************/
	constructor(height, width){
		this.height = height;
		this.width = width;
		this.board = [];
		for(let i=0; i<this.height; ++i){
			let tmp = [];
			for(let j=0; j<this.width; ++j){
				tmp.push('-');
			}
			this.board.push(tmp);
		}

		this.board[(this.width/2)-1][(this.height/2)-1] = 'W';
		this.board[this.width/2][this.height/2] = 'W';
    this.board[this.width/2][(this.height/2)-1] = 'B';
    this.board[(this.width/2)-1][this.height/2] = 'B';
	}

 /**********************************************************************
	* PrintBoard
	* Print a representation of the board to the terminal.
	**********************************************************************/
	printBoard(){
		for(let i=0; i<this.height; ++i){
			for(let j=0; j<this.width; ++j){
				if(this.board[i][j] == '-'){
					process.stdout.write('-\t')
				} else {
					process.stdout.write(this.board[i][j] + "\t")
				}
			}
			console.log();
		}
	}

	/* ****************************************************
 * This method is one of 8 and checks the upper
 * left discs to count how many opposite discs
 * there are in a row until you
 * reach the original disc or a blank
 * @param row the row of the input
 * @param col the column of the input
 * @param disc the player's disc
 * @param oppositeDisc the other player's disc
 * ***************************************************/
checkUpLeft(row, col, disc, oppositeDisc){

    let oppositeCount = 0;

    if(this.board[row-1][col-1] == oppositeDisc){

        while(row - 1 >= 0 && col-1 >= 0){

            oppositeCount++;

            if(this.board[row-1][col-1] == disc){
                return oppositeCount;
            }
            else if(this.board[row-1][col-1] != disc &&
                    this.board[row-1][col-1] != oppositeDisc){
                return 0;
            }

            row--;
            col--;

        }
    }

    return 0;
}

/* ****************************************************
 * This method is one of 8 and checks the upper
 * discs to count how many opposite discs
 * there are in a row until you
 * reach the original disc or a blank
 * @param row the row of the input
 * @param col the column of the input
 * @param disc the player's disc
 * @param oppositeDisc the other player's disc
 * ***************************************************/
checkUp(row, col, disc, oppositeDisc) {

    let oppositeCount = 0;

    if (this.board[row-1][col] == oppositeDisc) {

        while (row - 1 >= 0){

            oppositeCount++;

            if(this.board[row-1][col] == disc){

                return oppositeCount;
            }
            else if(this.board[row-1][col] != disc &&
                    this.board[row-1][col] != oppositeDisc){
                return 0;
            }

            row--;
        }
    }
    return 0;
}

/* ****************************************************
 * This method is one of 8 and checks the upper
 * right discs to count how many opposite discs
 * there are in a row until you
 * reach the original disc or a blank
 * @param row the row of the input
 * @param col the column of the input
 * @param disc the player's disc
 * @param oppositeDisc the other player's disc
 * ***************************************************/
checkUpRight(row, col, disc, oppositeDisc){

    let oppositeCount = 0;

    if(this.board[row-1][col+1] == oppositeDisc){

        while (row - 1 >= 0 && col + 1 < this.height){

            oppositeCount++;

            if(this.board[row-1][col+1] == disc){
                return oppositeCount;
            }
            else if(this.board[row-1][col+1] != disc &&
                    this.board[row-1][col+1] != oppositeDisc){
                return 0;
            }

            row--;
            col++;

        }
    }
    return 0;
}

/* ****************************************************
 * This method is one of 8 and checks the right
 * discs to count how many opposite discs
 * there are in a row until you
 * reach the original disc or a blank
 * @param row the row of the input
 * @param col the column of the input
 * @param disc the player's disc
 * @param oppositeDisc the other player's disc
 * ***************************************************/
checkRight(row, col, disc, oppositeDisc){

    let oppositeCount = 0;

    if(this.board[row][col+1] == oppositeDisc){

//changed back to <=
        while(col + 1 <= this.height){

            oppositeCount++;

            if(this.board[row][col+1] == disc){
                return oppositeCount;
            }
            else if(this.board[row][col+1] != disc &&
                    this.board[row][col+1] != oppositeDisc){
                return 0;
            }

            col++;
            //}
        }
    }
    return 0;
}

/* ****************************************************
 * This method is one of 8 and checks the lower
 * right discs to count how many opposite discs
 * there are in a row until you
 * reach the original disc or a blank
 * @param row the row of the input
 * @param col the column of the input
 * @param disc the player's disc
 * @param oppositeDisc the other player's disc
 * ***************************************************/
checkDownRight(row, col, disc, oppositeDisc){

    let oppositeCount = 0;

    if(this.board[row+1][col+1] == oppositeDisc){

//changed back to <= for checkRight
        while (row + 1 < this.width && col + 1 <= this.height){

            oppositeCount++;

            if(this.board[row+1][col+1] == disc){
                return oppositeCount;
            }
            else if(this.board[row+1][col+1] != disc &&
                    this.board[row+1][col+1] != oppositeDisc){
                return 0;
            }

            row++;
            col++;
        }
    }
    return 0;
}

/* ****************************************************
 * This method is one of 8 and checks the lower
 * discs to count how many opposite discs
 * there are in a row until you
 * reach the original disc or a blank
 * @param row the row of the input
 * @param col the column of the input
 * @param disc the player's disc
 * @param oppositeDisc the other player's disc
 * ***************************************************/
checkDown(row, col, disc, oppositeDisc){

    let oppositeCount = 0;

    if(this.board[row+1][col] == oppositeDisc){

        while (row + 1 < this.width){

            oppositeCount++;

            if(this.board[row+1][col] == disc){
                return oppositeCount;
            }
            else if(this.board[row+1][col] != disc &&
                    this.board[row+1][col] != oppositeDisc){
                return 0;
            }

            row++;
        }
    }
    return 0;
}

/* ****************************************************
 * This method is one of 8 and checks the lower
 * left discs to count how many opposite discs
 * there are in a row until you
 * reach the original disc or a blank
 * @param row the row of the input
 * @param col the column of the input
 * @param disc the player's disc
 * @param oppositeDisc the other player's disc
 * ***************************************************/
checkDownLeft(row, col, disc, oppositeDisc){

		let oppositeCount = 0;

		if(this.board[row+1][col-1] == oppositeDisc){

			//changd to < this.width
				while (row + 1 < this.width && col - 1 >= 0){
					//console.log('row is: ' + row);
					//console.log('col is: ' + col);

						oppositeCount++;

						//console.log('oppcount is: ' + oppositeCount);

						if(this.board[row+1][col-1] == disc){

							//console.log('oppcount now is: ' + oppositeCount);
								return oppositeCount;
						}
						else if(this.board[row+1][col-1] != disc &&
										this.board[row+1][col-1] != oppositeDisc){
								return 0;
						}

						row++;
						col--;
						//console.log('row now is: ' + row);
						//console.log('col now is: ' + col);
				}
		}
		return 0;

}

/* ****************************************************
 * This method is one of 8 and checks the
 * left discs to count how many opposite discs
 * there are in a row until you
 * reach the original disc or a blank
 * @param row the row of the input
 * @param col the column of the input
 * @param disc the player's disc
 * @param oppositeDisc the other player's disc
 * ***************************************************/
checkLeft(row, col, disc, oppositeDisc){

    let oppositeCount = 0;

    if(this.board[row][col-1] == oppositeDisc){

        while (col - 1 >= 0){

            oppositeCount++;

            if(this.board[row][col-1] == disc){
                return oppositeCount;
            }

            else if(this.board[row][col-1] != disc &&
                    this.board[row][col-1] != oppositeDisc){
                return 0;
            }
            col--;
        }
    }
    return 0;
}

	 /**********************************************************************
	 * isValidMove checks if move is valid
	 * @param row An integer row number.
	 * @param col An integer column number.
	 * @param disc A character for the disc color.
	 * @return boolean Whether valid move or not
	 **********************************************************************/
	isValidMove(row, col, disc){

		//console.log("inside isValidMove");
		//console.log("board 346: params: " + row + " " + col + " " + disc);

		if(this.board [row][col] != '-'){
		        return false;
		    }

		    let opposite = null;

		    if(disc == 'W'){
		        opposite = 'B';
		    }else{
		        opposite = 'W';
		    }
				//console.log("board 359: opposite: " + opposite);
				//console.log("board 359: disc: " + disc);

		    //if the placement is in the middle
		    if(row < this.height-1 && row > 0 && col > 0 && col < this.width-1){

		        if(this.checkUpLeft(row, col, disc, opposite) > 0 ||
		        this.checkUp(row, col, disc, opposite) > 0 ||
		                this.checkUpRight(row, col, disc, opposite) > 0 ||
		                this.checkRight(row, col, disc, opposite) > 0 ||
		                this.checkDownRight(row, col, disc, opposite) > 0 ||
		                this.checkDown(row, col, disc, opposite) > 0 ||

										//console.log("board 371: right before call of checkDownLeft");
		                this.checkDownLeft(row, col, disc, opposite) > 0 ||
		                this.checkLeft(row, col, disc, opposite) > 0){
		        return true;
		        }
		    }

		    //checking bottom right corner
		    else if(row == this.height-1 && col == this.width-1){

		        if(this.checkUp(row, col, disc, opposite) > 0 ||
		        this.checkUpLeft(row, col, disc, opposite) > 0 ||
		        this.checkLeft(row, col, disc, opposite) > 0){
		            return true;
		        }
		    }

		    //check top right corner
		    else if(row == 0 && col == this.width-1){

		        if(this.checkDown(row, col, disc, opposite) > 0 ||
		        this.checkDownLeft(row, col, disc, opposite) > 0 ||
		                this.checkLeft(row, col, disc, opposite) > 0){
		            return true;
		        }
		    }

		    //check top left corner
		    else if(row == 0 && col == 0){

		        if(this.checkDown(row, col, disc, opposite) > 0 ||
		        this.checkDownRight(row, col, disc, opposite) > 0 ||
		           this.checkRight(row, col, disc, opposite) > 0){
		            return true;
		        }
		    }

		    //checking bottom Left corner
		    else if(row == this.height-1 && col == 0){

		        if(this.checkUp(row, col, disc, opposite) > 0 ||
		        this.checkUpRight(row, col, disc, opposite) > 0 ||
		           this.checkRight(row, col, disc, opposite) > 0){
		            return true;
		        }
		    }

		    //if we're from the bottom row but not in a corner
		    else if(row == this.height-1){

		        if(this.checkLeft(row, col, disc, opposite) > 0 ||
		        this.checkUpLeft(row, col, disc, opposite) > 0 ||
		                this.checkUp(row, col, disc, opposite) > 0 ||
		                this.checkUpRight(row, col, disc, opposite) > 0 ||
		                this.checkRight(row, col, disc, opposite) > 0){
		            return true;
		        }
		    }

		    //if we're from the top row but not in a corner
		    else if(row == 0){

		        if(this.checkLeft(row, col, disc, opposite) > 0 ||
		        this.checkDownLeft(row, col, disc, opposite) > 0 ||
		           this.checkDown(row, col, disc, opposite) > 0 ||
		           this.checkDownRight(row, col, disc, opposite) > 0 ||
		           this.checkRight(row, col, disc, opposite) > 0){
		            return true;
		        }
		    }

		    //if we're in furthest left row but not in a corner
		    else if(col == 0){

		        if(this.checkUp(row, col, disc, opposite) > 0 ||
		        this.checkUpRight(row, col, disc, opposite) > 0 ||
		           this.checkRight(row, col, disc, opposite) > 0 ||
		           this.checkDownRight(row, col, disc, opposite) > 0 ||
		           this.checkDown(row, col, disc, opposite) > 0){
		            return true;
		        }
		    }

		    //if we're in furthest right row but not in a corner
		    else if(col == this.width-1){

		        if(this.checkUp(row, col, disc, opposite) > 0 ||
		        this.checkUpLeft(row, col, disc, opposite) > 0 ||
		           this.checkLeft(row, col, disc, opposite) > 0 ||
		           this.checkDownLeft(row, col, disc, opposite) > 0 ||
		           this.checkDown(row, col, disc, opposite) > 0){
		            return true;
		        }
		    }
			return false;
	}

	/********************************************************
	 * This method flips discs in the upper left from the
	 * input to the current disc
	 * @param row row of the input
	 * @param col column of input
	 * @param disc current player's disc
	 * @param opposite opposite disc
	 * @param upLeft how many discs to flip
	 ******************************************************/
  changeUpLeftDisc(row, col, disc, opposite, upLeft) {
	    for (let i = 1; i <= upLeft; i++) {
	        this.board[row - i][col - i] = disc;
	    }
	}


	/********************************************************
	 * This method flips discs in the above the input to
	 * the current disc
	 * @param row row of the input
	 * @param col column of input
	 * @param disc current player's disc
	 * @param opposite opposite disc
	 * @param upLeft how many discs to flip
	 ******************************************************/
	changeUpDisc(row, col, disc, opposite, up) {
	    for (let j = 1; j <= up; j++) {
	        this.board[row - j][col] = disc;
	    }
	}

	/********************************************************
	 * This method flips discs from the upper right of  the
	 * input to the current disc
	 * @param row row of the input
	 * @param col column of input
	 * @param disc current player's disc
	 * @param opposite opposite disc
	 * @param upLeft how many discs to flip
	 ******************************************************/
	changeUpRightDisc(row, col, disc, opposite, upRight) {
	    for (let k = 1; k <= upRight; k++) {
	        this.board[row - k][col + k] = disc;
	    }
	}

	/********************************************************
	 * This method flips discs to the right of the input to
	 * the current disc
	 * @param row row of the input
	 * @param col column of input
	 * @param disc current player's disc
	 * @param opposite opposite disc
	 * @param upLeft how many discs to flip
	 ******************************************************/
	changeRightDisc(row, col, disc, opposite, right) {
	    for (let l = 1; l <= right; l++) {
	        this.board[row][col + l] = disc;
	    }
	}

	/********************************************************
	 * This method flips discs to the lower right of the
	 * input to the current disc
	 * @param row row of the input
	 * @param col column of input
	 * @param disc current player's disc
	 * @param opposite opposite disc
	 * @param upLeft how many discs to flip
	 ******************************************************/
	changeDownRightDisc(row, col, disc, opposite, downRight) {
	    for (let m = 1; m <= downRight; m++) {
	        this.board[row + m][col + m] = disc;
	    }
	}

	/********************************************************
	 * This method flips discs below the input to
	 * the current disc
	 * @param row row of the input
	 * @param col column of input
	 * @param disc current player's disc
	 * @param opposite opposite disc
	 * @param upLeft how many discs to flip
	 ******************************************************/
	changeDownDisc(row, col, disc, opposite, down) {
	    for (let n = 1; n <= down; n++) {
	        this.board[row + n][col] = disc;
	    }
	}

	/********************************************************
	 * This method flips discs down right of the input to
	 * the current disc
	 * @param row row of the input
	 * @param col column of input
	 * @param disc current player's disc
	 * @param opposite opposite disc
	 * @param upLeft how many discs to flip
	 ******************************************************/
	changeDownLeftDisc(row, col, disc, opposite, downLeft) {
	    for (let r = 1; r <= downLeft; r++) {
	        this.board[row + r][col - r] = disc;
	    }
	}

	/********************************************************
	 * This method flips discs left of the input to
	 * the current disc
	 * @param row row of the input
	 * @param col column of input
	 * @param disc current player's disc
	 * @param opposite opposite disc
	 * @param upLeft how many discs to flip
	 ******************************************************/
	changeLeftDisc(row, col, disc, opposite, left) {
	    for (let s = 1; s <= left; s++) {
	        this.board[row][col - s] = disc;
	    }
	}

	 /********************************************************
		* placeDiscAt This method flips discs left of the
		* input to the current disc
		* @param row An integer number for row.
 	 	* @param col An integer number for column.
 	 	* @param disc A character standing for disc color.
		******************************************************/
	placeDiscAt(row, col, disc){

		//console.log("inside placeDiscAt");
		let opposite = null;

	     if (disc == 'W') {
	         opposite = 'B';
	     } else {
	         opposite = 'W';
	     }

	         this.board[row][col] = disc;

	         //changed the disc within the middle
	         if (row < this.height - 1 && row > 0 && col > 0 && col < this.width - 1) {

	             let upLeft = this.checkUpLeft(row, col, disc, opposite);
	             let up = this.checkUp(row, col, disc, opposite);
	             let upRight = this.checkUpRight(row, col, disc, opposite);
	             let right = this.checkRight(row, col, disc, opposite);
	             let downRight = this.checkDownRight(row, col, disc, opposite);
	             let down = this.checkDown(row, col, disc, opposite);
	             let downLeft = this.checkDownLeft(row, col, disc, opposite);
	             let left = this.checkLeft(row, col, disc, opposite);

	             this.changeUpLeftDisc(row, col, disc, opposite, upLeft);
	             this.changeUpDisc(row, col, disc, opposite, up);
	             this.changeUpRightDisc(row, col, disc, opposite, upRight);
	             this.changeRightDisc(row, col, disc, opposite, right);
	             this.changeDownRightDisc(row, col, disc, opposite, downRight);
	             this.changeDownDisc(row, col, disc, opposite, down);
	             this.changeDownLeftDisc(row, col, disc, opposite, downLeft);
	             this.changeLeftDisc(row, col, disc, opposite, left);

	         }

	             //checking bottom right corner
	         else if (row == this.height - 1 && col == this.width - 1) {

	             let upLeft = this.checkUpLeft(row, col, disc, opposite);
	             let up = this.checkUp(row, col, disc, opposite);
	             let left = this.checkLeft(row, col, disc, opposite);

	             this.changeUpLeftDisc(row, col, disc, opposite, upLeft);
	             this.changeUpDisc(row, col, disc, opposite, up);
	             this.changeLeftDisc(row, col, disc, opposite, left);
	         }

	             //check top right corner
	         else if (row == 0 && col == this.width - 1) {

	             let down = this.checkDown(row, col, disc, opposite);
	             let downLeft = this.checkDownLeft(row, col, disc, opposite);
	             let left = this.checkLeft(row, col, disc, opposite);

	             this.changeDownDisc(row, col, disc, opposite, down);
	             this.changeDownLeftDisc(row, col, disc, opposite, downLeft);
	             this.changeLeftDisc(row, col, disc, opposite, left);
	         }

	             //check top left corner
	         else if (row == 0 && col == 0) {

	             let downRight = this.checkDownRight(row, col, disc, opposite);
	             let down = this.checkDown(row, col, disc, opposite);
	             let right = this.checkRight(row, col, disc, opposite);

	             this.changeRightDisc(row, col, disc, opposite, right);
	             this.changeDownRightDisc(row, col, disc, opposite, downRight);
	             this.changeDownDisc(row, col, disc, opposite, down);
	         }

	             //checking bottom Left corner
	         else if (row == this.height - 1 && col == 0) {

	             let upRight = this.checkUpRight(row, col, disc, opposite);
	             let up = this.checkUp(row, col, disc, opposite);
	             let right = this.checkRight(row, col, disc, opposite);

	             this.changeUpRightDisc(row, col, disc, opposite, upRight);
	             this.changeRightDisc(row, col, disc, opposite, right);
	             this.changeUpDisc(row, col, disc, opposite, up);

	         }

	             //if we're from the bottom row but not in a corner
	         else if (row == this.height - 1) {

	             let right = this.checkRight(row, col, disc, opposite);
	             let upRight = this.checkUpRight(row, col, disc, opposite);
	             let up = this.checkUp(row, col, disc, opposite);
	             let upLeft = this.checkUpLeft(row, col, disc, opposite);
	             let left = this.checkLeft(row, col, disc, opposite);

	             this.changeUpLeftDisc(row, col, disc, opposite, upLeft);
	             this.changeUpDisc(row, col, disc, opposite, up);
	             this.changeUpRightDisc(row, col, disc, opposite, upRight);
	             this.changeRightDisc(row, col, disc, opposite, right);
	             this.changeLeftDisc(row, col, disc, opposite, left);
	         }

	             //if we're from the top row but not in a corner
	         else if (row == 0) {

	             let left = this.checkLeft(row, col, disc, opposite);
	             let downLeft = this.checkDownLeft(row, col, disc, opposite);
	             let down = this.checkDown(row, col, disc, opposite);
	             let downRight = this.checkDownRight(row, col, disc, opposite);
	             let right = this.checkRight(row, col, disc, opposite);

	             this.changeRightDisc(row, col, disc, opposite, right);
	             this.changeDownRightDisc(row, col, disc, opposite, downRight);
	             this.changeDownDisc(row, col, disc, opposite, down);
	             this.changeDownLeftDisc(row, col, disc, opposite, downLeft);
	            this. changeLeftDisc(row, col, disc, opposite, left);
	         }

	             //if we're in furthest left row but not in a corner
	         else if (col == 0) {

	             let up = this.checkUp(row, col, disc, opposite);
	             let upRight = this.checkUpRight(row, col, disc, opposite);
	             let right = this.checkRight(row, col, disc, opposite);
	             let downRight = this.checkDownRight(row, col, disc, opposite);
	             let down = this.checkDown(row, col, disc, opposite);

	             this.changeUpDisc(row, col, disc, opposite, up);
	             this.changeUpRightDisc(row, col, disc, opposite, upRight);
	             this.changeRightDisc(row, col, disc, opposite, right);
	             this.changeDownRightDisc(row, col, disc, opposite, downRight);
	             this.changeDownDisc(row, col, disc, opposite, down);
	         }

	             //if we're in furthest right row but not in a corner
	         else if (col == this.width - 1) {

	             let up = this.checkUp(row, col, disc, opposite);
	             let upLeft = this.checkUpLeft(row, col, disc, opposite);
	             let left = this.checkLeft(row, col, disc, opposite);
	             let downLeft = this.checkDownLeft(row, col, disc, opposite);
	             let down = this.checkDown(row, col, disc, opposite);

	             this.changeUpLeftDisc(row, col, disc, opposite, upLeft);
	             this.changeUpDisc(row, col, disc, opposite, up);
	             this.changeDownDisc(row, col, disc, opposite, down);
	             this.changeDownLeftDisc(row, col, disc, opposite, downLeft);
	             this.changeLeftDisc(row, col, disc, opposite, left);
	         }
	}


	 /**********************************************************************
	 * isValidMoveAvailable checks if any move is available
	 * @param disc A character pertaining to a disc color.
	 * @return bool A boolean telling the user whether there are
	 *	 	valid moves availabe for that disc.
	 **********************************************************************/
	isValidMoveAvailable(disc){
		//only need to find first one

		//console.log("inside validMoveAvailable");
		// console.log("disc is: " + disc);
		// console.log("this.height is: " + this.height);
		// console.log("width is: " + this.width);

	     for(let i = 0; i < this.height; i++){
	         for(let j = 0; j < this.width; j++){
	             if(this.board [i][j] == '-'){
	                 if(this.isValidMove(i, j, disc) == true){
											 return true;
	                 }
	             }
	         }
	     }
	 	return false;
	}


	 /**********************************************************************
	 * isBoardFull
	 * @return boolean Whether or not the board is full.
	 **********************************************************************/
	isBoardFull()
	{
		let boardIsFull = false;

		    let boardCount = 0;

		    //checks if the board is full
		    for (let i = 0; i < this.height - 1; ++i) {
		        for(let j  = 0; j < this.width - 1; j++){
		            if(this.board[i][j] == 'B' || this.board[i][j] == 'W'){
		                boardCount++;
										//console.log(boardCount);
		            }
		            if(boardCount === this.height*this.width){
		                boardIsFull = true;
		            }
		        }
		    }

			return boardIsFull;
	}


	 /**********************************************************************
	 * isGameOver
	 * @return bool Whether or not the game is over.
	 **********************************************************************/
	isGameOver(){

		    //if the board is full, or no valid moves then game is over
		    if(this.isBoardFull() === true ||
				(this.isValidMoveAvailable('B') === false &&
		    this.isValidMoveAvailable('W')===false)){
		        return true;
		    }

			return false;
	}

	 /**********************************************************************
	 * checkWinner
	 * @return char Which player has won.  Return null if
	 * 		a tie exists.
	 **********************************************************************/
	checkWinner(){
		let blackCount = 0;
	  let whiteCount = 0;

	     for(let i = 0; i < this.height; i++){
	         for(let j = 0; j< this.width; j++){
	             if (this.board[i][j] == 'B'){
	                 blackCount++;
	             }
	             else if(this.board[i][j] == 'W'){
	                 whiteCount++;
	             }
	         }
	     }
	     if(blackCount > whiteCount){
	         return 'B';
	     }
	     if(whiteCount > blackCount){
	         return 'W';
	     }
			   return 'Nobody';

	}
}

//let board = new Board(10, 10);
//board.printBoard();
