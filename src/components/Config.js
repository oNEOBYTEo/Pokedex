import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from 'react';

const Config = () => {

  const navigate = useNavigate();

  const darkMode = useSelector(state => state.isDark)

  const dispatch = useDispatch();

  const numbers = [4,8,12,16,20]

  const setNumber = (number) => {
    dispatch({type: "SET_PAGE", payload: number})
  }

  const setMode = () => {
    dispatch({type: "SET_DARK_MODE"})
  }

  return ( 
    <section  className="config-container">
      <div className="container-page">
        <h1>Select Pokemons Per Page</h1>
        <select className="container-select" 
        onChange={e => setNumber(e.target.value) }>
          {
            numbers.map(number => <option 
              className="option" 
              key={number} 
              value={number}>{number}
            </option>)
          }
        </select>
      </div>
      <div className="container-dark-mode">
        <h2>Select Mode</h2>

        {
          !darkMode ? <button 
          className="dark" 
          onClick={setMode}>
            DARK MODE
          </button> : 
          <button 
          className="light" 
          onClick={setMode}>
            LIGHT MODE
          </button>
          
        }
      </div>
      <button 
      style={{
        width: "50%", 
        border: "none",
        borderRadius: "20px",
        background: "#dc2626d7",
        minHeight: "5vh"
        }} 
      onClick={() => navigate('../pokedex/')}>Pokedex</button>
    </section>
   );
}
 
export default Config;