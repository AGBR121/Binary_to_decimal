import React, { useState } from 'react';
import Navbar from './navbar';
export default function BinarioDecimal(){
    return(
        <div>
            <Navbar/>
            <h4>Pasar de sistema decimal a binario</h4>
            <div className='Form'>
                <form>
                    <label>
                        Decimal
                        <input type='number' required/>
                    </label>
                    <button type='submit'>Convertir</button>
                </form>
            </div>
            <div>
        <p>Resultado:</p>
            <input type="text" readOnly />
        </div>
        </div>
    )
}