import React from "react"; // importamos la clase react de react


/*
creamos una constante para para extrar la informacion de la base de datos por medio de la api
le indicamos los parametros a extraer y por el todo map los agregamos a una raid y los ordenamos mediante js {} dentro de una tabla y la exportamos a app.js
*/
const ListaProfesores = ({profesor, setProfesor, profesores, setListUpdated}) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)

    }

    
    let{nombre, apellidos, asignatura} = profesor
    const handleUpdate = id => {
            if (nombre === '' || apellidos ==='' || asignatura === '') {
                alert('Todos los campos deben ser llenados correctamente!')
                return
            }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(profesor)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setProfesor({
            nombre: '',
            apellidos: '',
            asignatura: ''
        })

        setListUpdated(true)
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Asignatura</th>
                </tr>
            </thead>
            <tbody>
                {profesores.map(profesor => (
                     <tr key={profesor.id}>
                        <td>{profesor.id}</td>
                        <td>{profesor.nombre}</td>
                        <td>{profesor.apellidos}</td>
                        <td>{profesor.asignatura}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(profesor.id)} className="btn btn-danger">Eliminar</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(profesor.id)} className="btn btn-dark">Actualizar</button>
                            </div>
                        </td>
                        
                    </tr>

                ))}                    
            </tbody>
           
        </table>

    );

}

export default ListaProfesores;