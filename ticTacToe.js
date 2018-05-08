//GLOBALS
// Initialize whose turn it is
let whosTurn = 1;
let gameOver = false;
const messageDiv = document.getElementById('message');
// A place to kee the squares each player has for checkWin
let player1Squares = [];
let player2Squares = [];
let computerSquares = [];
let isComputerPlayer = false;


const winningCombos = [
    ['A1','B1','C1'], //ROW 1
    ['A2','B2','C2'], //ROW 2
    ['A3','B3','C3'], //ROW 3
    ['A1','A2','A3'], //COLUMN 1
    ['B1','B2','B3'], //COLUMN 2
    ['C1','C2','C3'], //COLUMN 3
    ['A1','B2','C3'], //DIAG 1
    ['A3','B2','C1'] //DIAG 2
];


//Go get everything with a class
const squares = document.getElementsByClassName('square');
// console.log(squares);
for(let i = 0; i < squares.length; i++){
	// console.log(squares[i]);
	squares[i].addEventListener('click', function(event){
		// console.log(event);
		markSquare(squares[i]);
	})
}

function markSquare(clickedSquare){
	// console.log("User clicked a sqaure");
	// console.log(squareID)
	// const clickedSquare = document.getElementById(squareID);
	//Two things happen when someone clicks on a square:
	//1. We change the DOM ... this part is for the user.
		//a. Check to see if the user can mark that square.
	//2. We change variables for JS
		//a. give control of the board to the other player.

	//Check to see if there is already a letter in square.


	if(clickedSquare.innerHTML !== `-`){
		//if there isn't a dash, someone has already 
		//taken this square. Goodbye.
		messageDiv.innerHTML = `Sorry, that square is already taken.`;
	}else if(whosTurn === 1){
		clickedSquare.innerHTML = `X`;
		whosTurn = 2;
		player1Squares.push(clickedSquare.id);
		console.log(player1Squares);
		checkWin(1, player1Squares);
		
		if(isComputerPlayer === true){			
			squaresIndex = Math.ceil(Math.random() * 8);			
			console.log(squaresIndex);
			markSquare(squares[squaresIndex]);
		}
	}else{
		clickedSquare.innerHTML = `O`;
		whosTurn = 1;
		console.log(player2Squares);
		player2Squares.push(clickedSquare.id);
		checkWin(2, player2Squares);
		
	}

	
}

function onePlayer(){
	isComputerPlayer = true;

}

function twoPlayer(){
	isComputerPlayer = false;
}

function checkWin(whoJustMarkded, playersSquares){
	// What do we need to know to check if someone won?
	// 1. What squares they have
	// 2. Are there 3 in a row
	// 3. Who is this?
	//if the player has all three squares in any row in winningCombos
	//then they win!
	//Outer Loop - Check each winning combination
		for(let i = 0; i < winningCombos.length; i++){
			//Keep track of how many of this combo player has
			let squareCount = 0;

		//InnerLoop - Check each square inside each winning combination.
			for(let j = 0; j < winningCombos.length; j++){
				const currentWinningSquare = winningCombos[i][j];
				//we need to check to see if the player has this square.
				//indexOf, finds the first index of the given element.
				//If it can't find it, it returns -1
				if(playersSquares.indexOf(currentWinningSquare) > -1){
					//I FOUND IT!!!  It's in the array! Don't care where
					//... but the player has it.
					squareCount++;

				}
			}//end of j/inner loop we have check all this row.
				if(squareCount === 3){
					//The user had all 3 of the j squares in i combo. 
					// We don't care where they are, we just know they are.
					messageDiv.innerHTML = `Player ${whoJustMarkded} has won the game!`;

					for(let w = 0; i < winningCombos[i].length; w++){
						const thisSquare = document.getElementById(winningCombos[i][w]);
						thisSquare.className += ' winning-square';
					}
				}
		}
}


