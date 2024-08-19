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
            setBinary(decimalToBinary(parseFloat(decimal)));
        } else {
            setBinary('NAN');
        }
    };

    const decimalToBinary = (num) => {
        let [integerPart, fractionalPart] = num.toString().split('.');

        let binaryInteger = parseInt(integerPart, 10).toString(2);

        if (fractionalPart) {
            let binaryFraction = '.';
            let fraction = parseFloat('0.' + fractionalPart);
            let limit = 10; 

            while (fraction > 0 && limit--) {
                fraction *= 2;
                if (fraction >= 1) {
                    binaryFraction += '1';
                    fraction -= 1;
                } else {
                    binaryFraction += '0';
                }
            }
            return binaryInteger + binaryFraction;
        } else {
            return binaryInteger;
        }
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
                            type='text' 
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
