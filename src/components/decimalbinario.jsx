import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import '../styles/form.css';

export default function DecimalBinario(){
    const [decimal, setDecimal] = useState('');
    const [binary, setBinary] = useState('');

    const handleDecimalChange = (e) => {
        setDecimal(e.target.value);
    };

    const handleConvert = () => {
        if (!isNaN(decimal) && decimal !== '') {
            setBinary(decimalToBinary(Number(decimal)));
        } else {
            setBinary('NAN');
        }
    };

    const decimalToBinary = (decimal) => {
        return (decimal >>> 0).toString(2);
    };

    return(
        <div>
            <Navbar/>
            <div className='form'>
                <h4>Pasar de sistema decimal a binario</h4>
                <br/>
                <div className='Form'>
                    <label>
                        Decimal
                        <input 
                            type='number' 
                            value={decimal}  
                            onChange={handleDecimalChange} 
                            placeholder="Ingrese un número decimal" 
                            required
                        />
                    </label>
                    <div className='button-container'>
                        <button type='button' onClick={handleConvert} >Convertir</button>
                    </div>
                </div>
                <div>
                    <label>
                        Respuesta
                        <input type="text" value={binary} readOnly />
                    </label>
                </div>
            </div>
        </div>
    );
}
