import React, {Fragment, useState, useEffect} from "react"; // importamos la clase react de react
import Navbar from "./components/Navbar" // importamos el navegador de components
import ListaProfesores from "./components/ListaProfesores"; // importamos la lista de profesores para mostrarla en la pagina de main
import Form from "./components/Form"; // importamos el formulario para mostrarla en la pagina de main

/*
creamos esta funcion para extraer todas las funciones desde components
*/
function App() {
  
  const [profesor, setProfesor] = useState({
    nombre: '',
    apellidos: '',
    asignatura: ''

  })

  const [profesores, setProfesores] = useState([])

  const [ListUpdated, setListUpdated] = useState(false)


  useEffect(() => {
    const getProfesores = () => {
        fetch('http://localhost:9000/api')
        .then(res => res.json())
        .then(res => setProfesores(res))
    }
    getProfesores()
    setListUpdated(false)
  }, [ListUpdated])

  return (
    <Fragment>
        <Navbar brand='Testing Web'/> 
        <div className="container">
          <div className="row">
              <div className="col-7">
                <h2 style={{textAlign: "center"}}> Lista de profesores</h2>
                <ListaProfesores profesor={profesor} setProfesor={setProfesor} profesores={profesores} ListUpdated={ListUpdated} setListUpdated={setListUpdated}/>
             </div>
             <div className="col 5">
                <h2 style={{textAlign: "center"}}>Formulario para ingresar a un Profesor</h2>
                <Form profesor={profesor} setProfesor={setProfesor}/>
             </div>
          </div>

        </div>
    </Fragment>
  );
}

export default App;
