import React from 'react';
import TosText from './TosText';

function TOSmodals({setOpenModal}){
    return(
        <div className='backModal'>
            <div className='container'>
                <div className='boton'>
                    <button 
                        color='Red'
                        onClick={() => {setOpenModal(false);}}>
                        X</button>
                </div>
                <div className='TosTitle'>
                    <h1> Terminos y Condiciones</h1>
                </div>
                <div className='body'>
                    <TosText />
                </div>
                <div className='footer'>
                    <button color='Blue'
                   onClick={() => {setOpenModal(true);}}
                   >Aceptar</button>
                </div>
            </div>  
        </div>
          
    );

}

export default TOSmodals;
