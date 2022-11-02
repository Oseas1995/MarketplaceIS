import React, { useState } from 'react';
import './Register.css'
function RegistrationForm() {
    return (
        <form className="Registerform">
            <div className="Registerform-body">
                <h1 className='Registerheader'>Registro</h1>
                <div className="Registerform-fa">
                    <label className="Registerform__label" id="firstName">First Name </label>
                    <input className="Registerform__input" type="text" id="firstName" placeholder="First Name" />
                </div>
                <div className="Registerform-fa">
                    <label className="Registerform__label" id="lastName">Last Name </label>
                    <input className="Registerform__input" type="text" id="lastName" placeholder="LastName" />
                </div>
                <div className="Registerform-fa">
                    <label className="Registerform__label" id="email">Email </label>
                    <input className="Registerform__input" type="email" placeholder="Email" />
                </div>
                <div className="Registerform-fa">
                    <label className="Registerform__label" id="password">Password </label>
                    <input className="Registerform__input" type="password" id="password" placeholder="Password" />
                </div>
                <div className="Registerform-fa">
                    <label className="Registerform__label" id="confirmPassword">Confirm Password </label>
                    <input className="Registerform__input" type="password" id="confirmPassword" placeholder="Confirm Password" />
                </div>
                    <div class="Registerfooter">
                    <button className="BtnReg" type="submit" class="btn">Register</button>
                </div>
            </div>
        </form>
    )
}
export default RegistrationForm;