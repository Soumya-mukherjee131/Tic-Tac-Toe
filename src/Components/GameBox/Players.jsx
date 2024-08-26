import React, {useState} from 'react';
import styles from './Gamebox.module.css';

function Players({initialName, symbol, isActive,onChangeName}) {

const [isEditing, setisEditing] = useState(false);
const [playerName, setPlayerName] = useState(initialName);

const handleChange = (event)=>{
    setPlayerName(event.target.value);

}
const handleClick = () =>{
    // if the new state is depends on your previous state value we should not update like this !isEditing
    // setisEditing(!isEditing) //instead of these put a function here suggested by react team because if there
    //  is a function it will automatically called by react and it will receive the guaranteed latest state value 
    // the problem of using this !isEditing is that if react state updating schedule i.e. 
    // state updates are not perform instantly but at some point in future (react set the time for it)
    setisEditing((editing)=> !editing) // it is a little bit more complex but its worked fast
    // this is a simple case so we can go with the !isEditing but forcomplex structure the function is best.
    // setisEditing(isEditing? false : true); // both of the method works same just reduces the complexity.
    if(isEditing)
    {
        onChangeName(symbol, playerName);
    }
}

let editPlayerName = <span className={styles.playerName}>{playerName}</span>;
// let butCaption ='Edit';

if(isEditing){
    editPlayerName = <input id={styles.inputName} type="text" required value={playerName} onChange={handleChange}/>;
    // butCaption = 'Save';
}
  return (
    <li className={isActive ? styles.active : ''} >
                <span id={styles.player}>
                    {/* <span className={styles.playerName}>{name}</span> */}
                    {editPlayerName}
                    <span className={styles.playerSymbol}>{symbol}</span>
                </span>
                <button onClick={handleClick}>{isEditing? "Save" : "Edit"}</button>
             </li>
  )
}

export default Players
