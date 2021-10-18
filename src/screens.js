import React from "react";
import Board from "./board";

//home page
function Home(props){
    return(
        <h1>
            Connect Four
        </h1>
    );
}
//game page
function GamePage(props){
    
    return(
        <div>
            <Board/>
        </div>
    );      
}


export {Home, GamePage}