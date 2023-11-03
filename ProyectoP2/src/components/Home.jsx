import React from "react";
import appFirebase from "../acceso-usuarios";
import { getAuth,signOut} from "firebase/auth";
import logo from '/images/logo.png';

const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
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
            <li><a className='nav-botonA' href="#">Perfil</a></li>
            <li><a className='nav-botonB' href="#">Favoritos</a></li>
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

    <div className="bienvenida">
            <h1>Bienvenido {correoUsuario} <button onClick={()=>signOut(auth)}>Cerrar sesion</button></h1>
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

export default Home