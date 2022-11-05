import { Link } from "react-router-dom";
import TOSmodal from "../componentes/TOSModal";
import { supabase } from "../supabase/supabase";
import React, { useState } from "react"

function LogUp() {
    //Con Esto se Autentica el Correo del Usuario con un enlace
    const [modalOpen, setModalOpen] = useState(false);
    const [mail, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    const handlog = async () => {
        try {
            const { data: error } = await supabase.auth.signUpWi({
                email: mail,
                password: pass,
            })
            if (error) throw error

            alert('Revisa tu correo para la confirmacion de registro')
        } catch (e) {
            alert(e.message)
        }
    };


    return (
        <div className="Background_Login">
            <header><h1>Log Up Here</h1></header>
            <form onSubmit={e => e.preventDefault()}>
                <div className="ContainerLogin">
                    <div>
                        <label style={{ fontWeight: '700', marginRight: 5 }}>Correo:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="ejemplo@site.com"
                            value={mail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label style={{ fontWeight: '700', marginRight: 5 }}>Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="contraseña"
                            value={pass}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    onClickCapture={handlog}
                    onClick={() => setModalOpen(true)}
                >Send</button>
                {modalOpen && <TOSmodal setOpenModal={setModalOpen} />}
                <div>
                    <p>ya estas registrado?</p>
                    <Link to="/login">
                        <ul>Login</ul>
                    </Link>
                </div>
                <div>
                    <p>Volver a Homepage</p>
                    <Link to="/home">
                        <ul>Home</ul>
                    </Link>
                </div>
            </form>

        </div>
    );
}

export default LogUp;