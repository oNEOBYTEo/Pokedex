import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <h1>BIENVENIDO ENTRENADOR</h1>
            <form onSubmit={submit}>
                <label htmlFor="input-name" className="">
                    Coloca tu nombre 
                </label>
                    <input
                    id="input-name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    pattern="[a-zA-Z]{1,25}"
                    placeholder="Ash"
                    />
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default NameInput;