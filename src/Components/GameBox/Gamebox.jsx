import React, {useState} from 'react';
import styles from './Gamebox.module.css';
import Players from './Players.jsx';
import GaneBoard from './GaneBoard.jsx';
import Log from './Log.jsx';
import {winning_Combinations} from './winning.js';
import GameOver from './GameOver.jsx';


const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function Gamebox() {
  const[players, setPlayers] = useState({X:'Player 1', O:'Player 2'});
  
  // Lift the state up - to the 'closest ancestor component' that has access to all components that need to work with
  // the state - ancestor component - state (manage) // state value that needed both by child 1 and 2 if there is 
  // child component attached with the ancestor. andancestors passesthe state values via props to the child component.
  //ancestor passes fuction that eventually changes the state via props to the child component This allows child
  //component to initiate the state change
  const[activePlayer, setActivePlayer] = useState('X');
  const[gameTurns, setGameTurns]=useState([]);

  let gameBoard = initialGameBoard.map(row => [...row]); // Create a deep copy of the initial game board
  for (const turn of gameTurns) { // Correctly iterate over 'turns'
      const { square, player } = turn; // Destructure the 'turn' object, not 'turns'
      const { row, col } = square;

      gameBoard[row][col] = player;
  }
  let Winner;

  for(const combination of winning_Combinations){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      Winner = players[firstSquareSymbol];
    }
  }
const hasDraw = gameTurns.length == 9 && !Winner;

  function handleSelectSquare(rowIndex, colIndex){
  setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X');
  setGameTurns(prevTurns => {
    let currentPlayer = 'X';
    if(prevTurns.length>0 && prevTurns[0].player==='X'){
      currentPlayer = 'O';
    }
    const updatedTurns = [
      {square:{row: rowIndex, col: colIndex},player:currentPlayer},...prevTurns];
      return updatedTurns;
  });
}

function handleRematch (){
  setGameTurns([])
}

function handlePlayerNameChange (symbol, newName){
  setPlayers(prevPlayers => {
    return {
      ...prevPlayers,
      [symbol]: newName
    }
  });
}
  return (
    <main>
     <div id={styles.container}>
        <ol id={styles.players} className={styles.highlightPlayer}>
          {/* This two players are isolated component because react make isolated instance for every component  */}
          {/* thats why when we click on edit button of player 1 only the player 1 changes not player 2 
          because of this react feature */}

              <Players initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
              <Players initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(Winner || hasDraw) && <GameOver winner={Winner} onRestart={handleRematch}/>}
        {/* <GaneBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/> */}
        <GaneBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
         </div>
         <Log turns={gameTurns}/>
         
    </main>
  )
}

export default Gamebox
