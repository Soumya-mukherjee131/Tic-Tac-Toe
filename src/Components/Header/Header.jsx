import React from 'react';
import './Header.module.css';
import Img from './pattern3.jpg'

function Header() {
  return (
    <>
     <header>
      <img src={Img} alt="" />
      <h1>Tic-Tac-Toe</h1>
    </header>
    </>
  )
}
export default Header