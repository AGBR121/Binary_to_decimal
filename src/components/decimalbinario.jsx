import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import '../styles/form.css';
export default function DecimalBinario(){
    return(
        <div>
            <Navbar/>
            <div className='form'>
            <h4>Pasar de sistema decimal a binario</h4>
            <br></br>
            <div className='Form'>
                <form>
                    <label>
                        Decimal
                        <input type='number' required/>
                    </label>
                    <div className='button-container'>
                    <button type='submit'>Convertir</button>
                    </div>
                </form>
            </div>
            <div>
        <label>
            Respuesta
            <input type="text" readOnly />
        </label>
        </div>
        </div>
        </div>
    )
}