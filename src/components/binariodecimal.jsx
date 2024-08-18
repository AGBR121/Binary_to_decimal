import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import '../styles/form.css';

export default function BinarioDecimal() {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');

    const handleBinaryChange = (e) => {
        setBinary(e.target.value);
    };

    const handleConvert = (e) => {
        e.preventDefault();
        if (/^[01]+$/.test(binary)) { 
            setDecimal(parseInt(binary, 2));
        } else {
            setDecimal('NAN');
        }
    };

    return (
        <div>
            <Navbar />
            <div className='form'>
                <h4>Pasar de sistema binario a decimal</h4>
                <br />
                <div className='Form'>
                    <form onSubmit={handleConvert}>
                        <label>
                            Binario
                            <input 
                                type='text' 
                                value={binary} 
                                onChange={handleBinaryChange} 
                                placeholder="Ingrese un número binario" 
                                required
                            />
                        </label>
                        <div className='button-container'>
                            <button type='submit'>Convertir</button>
                        </div>
                    </form>
                </div>
                <div>
                    <label>
                        Respuesta
                        <input type="text" value={decimal} readOnly />
                    </label>
                </div>
            </div>
        </div>
    );
}
