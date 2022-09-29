import React from "react"; // importamos la clase react de react


// handleChange: actualiza mi registro desde la app.js. toma la e como nuevo valor y se lo entrega a handleChange
const Form = ({profesor, setProfesor}) => {
    const handleChange = e =>{
        setProfesor({
            ...profesor,
            [e.target.name]: e.target.value
        })

    }

    let{nombre, apellidos, asignatura} = profesor
        // creamos una constante para enviar lainformacion del Boton y validaremos los datos ya que el titulo y el valor no pueden ser nulos, ni campos vacios ni igual o menos a 0
    const handleSubmit = () => {

        if (nombre === '' || apellidos ==='' || asignatura === '') {
            alert('Todos los campos deben ser llenados correctamente!')
            return
        }
        //aqui iniciamos una consulta y llamamos a la api con el fetch y su direccion localhost
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(profesor)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //Aqui reiniciamos el state del profesor 
        setProfesor({
            nombre: '',
            apellidos: '',
            asignatura: ''
        })

    }


    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre:</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>

            </div>
            <div className="mb-3">
                <label htmlFor="apellidos" className="form-label">Apellidos:</label>
                <input value={apellidos} name="apellidos" onChange={handleChange} type="text" id="apellidos" className="form-control"/>

            </div>
            <div className="mb-3">
                <label htmlFor="asignatura" className="form-label">Asignatura:</label>
                <input value={asignatura} name="asignatura" onChange={handleChange} type="text" id="asignatura" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>

    );
}

export default Form;