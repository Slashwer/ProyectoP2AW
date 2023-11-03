import { useState } from 'react'
import appFirebase from '../src/acceso-usuarios'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Login from '../src/components/Login';
import Home from '../src/components/Home';
const auth = getAuth(appFirebase)
import './App.css'

function App() {

  const[usuario, setUsuario]=useState(null);
  
  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })

  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>}
    </div>
  )
}

export default App
