import React from 'react';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.turn = "Yellow"; //starts yellow
        this.board = new Array(42).fill(null) //fills the board with 42 slots of null

    }

    nextTurn(){ //switches between yellow red
        this.turn = this.turn === "Yellow" ? "Red": "Yellow"
    }

    move(i){ //if game is not in progress then no move. if it is go next turn
        if (!this.inProgress()){
            return;
        }   
        //board slot = this turn
        this.board[i] = this.turn;
        //if cannot find a winning combo then go next turn
        if(!this.findWin()){
            this.nextTurn();
        }
    }

    findWin(){ //This has all the possible horizontal and vertical wins
        const connect4Win = [
            //vertical winnings
            //rows 1-4
            [0,7,14,21],
            [1,8,15,22],
            [2,9,16,23],
            [3,10,17,24],
            [4,11,18,25],
            [5,12,19,26],
            [6,13,20,27],

            //rows 2-5
            [7,14,21,28],
            [8,15,22,29],
            [9,16,23,30],
            [10,17,24,31],
            [11,18,25,32],
            [12,19,26,33],
            [13,20,27,34],
            //rows 3-6
            [14,21,28,35],
            [15,22,29,36],
            [16,23,30,37],
            [17,24,31,38],
            [18,25,32,39],
            [19,26,33,40],
            [20,27,34,41],

            //horizontal winnings
            //column 1-4
            [0,1,2,3],
            [7,8,9,10],
            [14,15,16,17],
            [21,22,23,24],
            [28,29,30,31],
            [35,36,37,38],

            //column 2-5
            [1,2,3,4],
            [8,9,10,11],
            [15,16,17,18],
            [22,23,24,25],
            [29,30,31,32],
            [36,37,38,39],

             //column 3-6
             [2,3,4,5],
             [9,10,11,12],
             [16,17,18,19],
             [23,24,25,26],
             [30,31,32,33],
             [37,38,39,40],
              //column 4-7
             [3,4,5,6],
             [10,11,12,13],
             [17,18,19,20],
             [24,25,26,27],
             [31,32,33,34],
             [38,39,40,41],
            
        ]

        for (const combination of connect4Win){ //if a = b = c =d and matches a combination then winning combo is found
            const [a,b,c,d] = combination;

            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c] && this.board[a] === this.board[d])){
                return combination;
            } //if there is a value at index A and it = to the value at B and C then win;
        }
        return null;

    
    
    }
    inProgress(){ //checks is theres any winning combo or if the board is full.
        return !this.findWin() && this.board.includes(null);
    }
    
}

export default Game;