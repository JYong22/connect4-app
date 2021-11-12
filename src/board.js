import React from 'react';
import Game from './Game';

let game = new Game();


class BoardSlot extends React.Component{ //board slot, each board has a class name for the grid, caption for the array and onclick func
    render(){
        return(
            <div className = {this.props.className} caption = {this.props.caption} onClick = {this.props.onClick} >
                
            </div>
        
        );
    }
}

class Board extends React.Component{

    renderBoardSlot(boardSlot,num){ //renders a board slot, updates the game based on the click, and if it is in progress
        return(
            <BoardSlot className = {boardSlot} caption= {num} onClick = {()=>{   
                                                        
                                                        let winningCombo = game.findWin();
                                                        let inProg = game.inProgress();

                                                        if (inProg){ //if game is inprogress then if selected game slot is empty
                                                                     // then run the game.move method. Slot is now either yellow or red
                                                                     // then change the header's turn into the current turn and colour.
                                                                     //the background color of slot changes to the player(colour) that clicked on the slot.
                                                            if (game.board[num] ==null){
                                                                game.move(num);
                                                                document.getElementById("header_Turn").textContent = game.turn +"'s turn";
                                                                document.getElementById("header_Turn").style.color = game.turn;
                                                                document.getElementsByClassName("board_Slot")[num].style.background = game.board[num];
                                                                winningCombo = game.findWin();
                                                                inProg = game.inProgress();
                                                            }
                                                        }
                                                        //if not in progress, find winning combo throughout the board
                                                        //if winningcombination is found then the player that won is displayed on the header
                                                        if (!inProg){
                                                            if(winningCombo){
                                                                    for (let i = 0; i<game.board.length; i++){
                                                                    
                                                                    if (winningCombo && winningCombo.includes(i)){
                                                                        document.getElementById("header_Turn").textContent = "Winner: " + game.board[i];
                                                                        document.getElementById("header_Turn").style.color = game.board[i];
                                                                    }   
                                                                }
                                                            }
                                                            //if no winner is found then it is a tie.
                                                            else{
                                                                document.getElementById("header_Turn").textContent = "TIE";
                                                                
                                                            }
                                                            
                                                        }                                                                                                                                                                           
                                                    }}/>

        );

    }

    render(){ //renders the html also allows game to restart with button.
        let num = 0;
        let boardSlot = "board_Slot";
        //App body
            //header
            //board
            //footer/restart button
        return(
            <div id = 'app'> 
                <div id = 'header'> Connect 4 
                    <div id = "header_Space"></div>
                    <div id = "header_Turn">
                        Yellow's turn
                    </div>
                    

                </div>
            
                <div className= "board"> 
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}

                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}

                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}

                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}

                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                    {this.renderBoardSlot(boardSlot, num++)}
                </div>
                <div id ="footer">
                    <div id = "footer_Restart" onClick = {() =>{game = new Game();
                                                                document.getElementById("header_Turn").textContent = game.turn +"'s turn";
                                                                for (let i = 0; i<game.board.length; i++){
                                                                    document.getElementsByClassName("board_Slot")[i].style.background = "#ffffff"
                                                                }
                                                            }}>
                            Restart Game
                    </div>
                </div>
            </div>
        
            
        );
    }
}

export default  Board;


