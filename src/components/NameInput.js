import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pokeball from '../images/pokeball.png'
import pikachu from '../images/pikachu.png'

const NameInput = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ name, setName ] = useState("");

    const submit = e => {
        e.preventDefault();
        dispatch({type: "SET_NAME", payload: name})
        navigate("/pokedex");
    }

    return ( 
        <div className='container-input'>
            <h1 className="title-input item-input">WELCOME POKEMON TRAINER</h1>
            <img src={pikachu} className='title-picture' alt="pikachu" />
            <form onSubmit={submit}>
                <label htmlFor="input-name" className="label-input">
                    Put your name: 
                </label>
                <input
                id="input-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                pattern="[a-zA-Z]{1,25}"
                placeholder="Ash"
                />
                <button onClick={submit}>Submit</button>
            </form>
            <img src={pokeball} alt="pokeball" className='item-pokeball'/>
        </div>
     );
}
 
export default NameInput;