import React, { useState } from 'react';
import './Register.css'
import RegisterInput from './RegisterInput';

const Registration = () => {
    const [values, setValues] = useState({
        firstname: "",
        secondname: "",
        flastname: "",
        slastname: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "firstname",
            type: "text",
            placeholder: "Nombre",
            errorMessage:
                "Este Campo es obligatorio",
            label: "Primer Nombre",
            pattern: !values.username,
            required: true,
        },
        {
            id: 2,
            name: "secondname",
            type: "text",
            placeholder: "Segundo Nombre",
            label: "Segundo Nombre",
        },
        {
            id: 3,
            name: "flastname",
            type: "text",
            placeholder: "Primer Apellido",
            errorMessage:
                "Este Campo es obligatorio",
            label: "Primer Apellido",
            pattern: !values.username,
            required: true,
        },
        {
            id: 4,
            name: "slastname",
            type: "text",
            placeholder: "Segundo Apellido",
            label: "Segundo Apellido",
        },
        {
            id: 5,
            name: "email",
            type: "email",
            placeholder: "Correo",
            errorMessage: "El correo debe estar permitido",
            label: "Correo",
            required: true,
        },
        {
            id: 6,
            name: "Telefono",
            type: "text",
            placeholder: "Telefono",
            errorMessage: "Es Necesario un Numero de telefono",
            label: "Telefono",
            required: true,
        },
        {
            id: 7,
            name: "password",
            type: "password",
            placeholder: "Contraseña",
            errorMessage:
                "La contraseña debe tener 8-20 caracteres, dentro debe incluir 1 letra, 1 numero y 1 simbolo!",
            label: "Contraseña",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*-_])[a-zA-Z0-9!@#$%^&*-_]{8,20}$`,
            required: true,
        },
        {
            id: 8,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirmar Contraseña",
            errorMessage: "Contraseña no es la misma!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>Registro</h1>
                {inputs.map((input) => (
                    <RegisterInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Registration;