import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className="aplicacion-tareas">
     <div className='freecodecamp-logo-contenedor'>

       <img src={freeCodeCampLogo} className='freecodecamp-logo'
       alt='logo freecodecamp'
       />
      </div>
      <div className='lista-tareas-principal'>
        <h1>Mis Tareas</h1>
        
      </div>
    </div>
  );
}

export default App;
