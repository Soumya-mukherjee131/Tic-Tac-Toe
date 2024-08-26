import React from 'react'
import styles from './Gamebox.module.css';

function GameOver({winner, onRestart}) {
  return (
    <div id={styles.gameOver}>
      <h2>Game OVer!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw</p>}
      <p><button onClick={onRestart}>Rematch!</button></p>
    </div>
  )
}

export default GameOver
