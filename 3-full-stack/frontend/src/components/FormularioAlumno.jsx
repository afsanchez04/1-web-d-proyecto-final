import { useForm } from 'react-hook-form'
import { api } from '../services/api';

function FormularioAlumno() {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const handleUsers = async (data) => {
    const { nombre, edad, grupo } = data
    await api.post('/', { nombre, edad, grupo });
    //window.location.reload(); //Se puede comentar esta línea para que no actualice cada vez que se envíe un usuario a la base de datos.
  }

  return (

    <form onSubmit={handleSubmit(handleUsers)}>

      <input 
      type="text" 
      placeholder="Nombre" 
      {...register("nombre", {required: "El nombre es obligatorio"})}
      />
      {errors.nombre && <p>{errors.nombre.message}</p>}

      <input 
      type="number" 
      placeholder="Edad" 
      {...register("edad", {required: "La edad es obligatorio"})}
      />
      {errors.edad && <p>{errors.edad.message}</p>}

      <input 
      type="text" 
      placeholder="Grupo" 
      {...register("grupo", {required: "El grupo es obligatorio"})} 
      />
      {errors.grupo && <p>{errors.grupo.message}</p>}

      <button type="submit">Agregar Alumno</button>

    </form>

  );

}

export default FormularioAlumno;