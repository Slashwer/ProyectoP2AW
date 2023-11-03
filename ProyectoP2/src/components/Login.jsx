import { useState } from 'react'
import React from "react";
import appFirebase from "../acceso-usuarios";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import logo from '/images/logo.png';

const auth = getAuth(appFirebase);

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const functAutenticacion = async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        
        if(registrando){
            try{
                await createUserWithEmailAndPassword(auth, correo, contraseña)
            }catch(error){
                alert("El correo o la contraseña son incorrectos")
            } 
            
        }
        else{
            try{
                await signInWithEmailAndPassword(auth, correo, contraseña)
            }catch(error){
                alert("El correo o la contraseña son incorrectos")
            } 
        }
    }

    return(
        <div class="container">

            <div class="logo">
            <img src={logo}/>
            <h1>
                Sistema universitario de informacion
                <br/>
                en linea para revistas cientificas
                <br />
                de la universidad ULEAM
            </h1>
            <h1 class="text">
                Soporte 123-245-545(ec)
            </h1>
            </div>

            <div class="nav-usuario">
        <ul>
            <li><a className='nav-botonA' href="#">Cuenta</a></li>
        </ul>
    </div>

    <div class="nav-menu">
        <ul class="menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Envianos tus opiniones</a></li>
        </ul>
    </div>

    <div class="estadisticas">
        <span>
            <b>1,004 Revistas en linea |</b>
            <b>31 Paises |</b>
            <b>Soporte 24 horas |</b>
        </span>
    </div>

            <div className="Login">
                <form onSubmit={functAutenticacion}>
                <h1>Iniciar sesion o registrarse</h1>
                    <label for="email">Correo electronico:</label>
                    <input type="text" placeholder="usuario@gmail.com" id='email'/>
                    <br />
                    <label for="password">Contraseña:</label>
                    <input type="password" id='password'/>
                    <br />
                    <button>{registrando ? "Registro": "Iniciar sesion"}</button>
                </form>
                <h4 className='BotonC'>{registrando ? "Inicia sesion con tu cuenta" : "Crear cuenta"}<button className='boton' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registro"}</button></h4>
            </div> 


    <footer class="footer">
        <div class="container-footer">
            <div class="footer-row">
                <div class="footer-links">
                    <h4>Informacion</h4>
                    <ul>
                        <li><a href="#">Terminos y condiciones</a></li>
                        <li><a href="#">Nuestros servicios</a></li>
                        <li><a href="#">Politica de privacidad</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Ayuda</h4>
                    <ul>
                        <li><a href="#">Preguntas</a></li>
                        <li><a href="#">Boletin</a></li>
                        <li><a href="#">Mi cuenta</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Informacion de contacto</h4>
                    <p>
                        Teléfono: 123-245-545 <br />
                        Fax: 23435677 <br />
                        Email: revistas@support.com
                    </p>
                </div>
                <div class="footer-links">
                    <h4>Boletín informativo</h4>
                    <p>
                        Suscríbete a nuestros boletines ahora y mantente al
                        día con informes academicos y actualizaciones de nuestra
                        pagina web.
                    </p>
                    <div class="footer-correo">
                        <input type="email" id="correo-footer" name="correo-footer" placeholder="usuario@hotmail.com"/>
                        <input type="submit" value="Enviar" onclick="return validarSuscripcion()"/>
                    </div>
                </div>
            </div>
            </div>
            </footer>
        </div>
    )
}

export default Login