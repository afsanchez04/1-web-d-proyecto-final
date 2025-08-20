import { useEffect, useState } from 'react';
import { api } from '../services/api';

function ListaAlumnos() {

  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    api.get('/').then(res => setAlumnos(res.data));
  }, [alumnos]); //Se puede poner [alumnos] para que el componente se actualice cada vez que un usuario nuevo entre a la base de datos

  return (

    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        {alumnos.map(alumno => (
          <li key={alumno._id}>{alumno.nombre} - Grupo: {alumno.grupo}</li>
        ))}
      </ul>
    </div>

  );

}

export default ListaAlumnos;