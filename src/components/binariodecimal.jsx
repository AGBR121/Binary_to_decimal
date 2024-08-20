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
        if (/^[01]+(\.[01]+)?$/.test(binary)) { 
            setDecimal(binaryToDecimal(binary));
        } else {
            setDecimal('NAN');
        }
    };

    const binaryToDecimal = (binary) => {
        let [integerPart, fractionalPart] = binary.split('.');

        let decimalInteger = parseInt(integerPart, 2);

        if (fractionalPart) {
            let decimalFraction = 0;
            for (let i = 0; i < fractionalPart.length; i++) {
                decimalFraction += parseInt(fractionalPart[i], 10) * Math.pow(2, -(i + 1));
            }
            return decimalInteger + decimalFraction;
        } else {
            return decimalInteger;
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
                                type='number' 
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
