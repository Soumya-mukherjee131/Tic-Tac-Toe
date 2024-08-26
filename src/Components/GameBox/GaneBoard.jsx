// import React, { useState } from 'react';
import styles from './Gamebox.module.css';


// const initialGameBoard = [
//     [null,null,null],
//     [null,null,null],
//     [null,null,null]
// ]

function GaneBoard({onSelectSquare, board}) {

    // let gameBoard = initialGameBoard.map(row => [...row]); // Create a deep copy of the initial game board
    // for (const turn of turns) { // Correctly iterate over 'turns'
    //     const { square, player } = turn; // Destructure the 'turn' object, not 'turns'
    //     const { row, col } = square;

    //     gameBoard[row][col] = player;
    // }

// function GaneBoard({onSelectSquare, activePlayerSymbol}) {
//  const [gameBoard, setGameBoard] = useState(initialGameBoard);
//     function handleSelectSquare(rowIndex,colIndex){
//         setGameBoard((prevGameBoard) => {
//             // update object state immutably - object and arrys are reference values in js, so we should not mutate
//             //them directly instead create a deepcopy first
//             //const updateUser = user; user.name = 'max'; not creating a copy user = a referencevalue editing the    user directly in the memory. instead of this 
//             //  const updateUser = {...user}; updateUser.name = 'max'; creatin g a copy via the spread operator ...
//             //and editingthe copy not the original it will works faster and reduces bugs 
//             const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//             updateBoard[rowIndex][colIndex]=activePlayerSymbol;
//             return updateBoard;
//     })

//     onSelectSquare();
// }
    return (
      <ol id={styles.gameeBoard}>
            {board.map((row, rowIndex)=> (
                <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => (
                        <li key={colIndex}>
                            {/* <button onClick={() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button> */}
                            <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                            </li>
                        ))}
                </ol>
            </li>
        ))}
      </ol>
  )
}

export default GaneBoard
