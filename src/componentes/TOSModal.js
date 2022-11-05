import './TOSmodal.css'
import React from 'react';
import TosText from './TosText';

function TOSmodals({setOpenModal}){
    return(
        <form>
            <div className='backModal'>
                <div className='container'>
                    <div className='XbotonContainer'>
                        <button className='Xbtn'
                            onClick={() => {setOpenModal(false);}}>
                            X</button>
                    </div>
                    <div className='TosTitle'>
                        <h1 className='Tittles'> Terminos y Condiciones</h1>
                    </div>
                    <div className='body'>
                        <TosText />
                    </div>
                    <div className='footer'>
                        <button className='BtnAcept'
                    onClick={() => {setOpenModal(false);}}
                    >Aceptar</button>
                    </div>
                </div>  
            </div>
        </form>   
    );

}

export default TOSmodals;
