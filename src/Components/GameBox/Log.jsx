import React from 'react';
import styles from './Gamebox.module.css';


function Log({turns}) {
  return (
    <ol id={styles.log}>
      {turns.map(turn => (
        <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row},{turn.square.col}
        </li>))}
    </ol>
  )
}

export default Log
