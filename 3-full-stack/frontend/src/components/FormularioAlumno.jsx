import { useForm } from 'react-hook-form'

function FormularioAlumno() {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const handleUsers = async (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleUsers)}>

      {/* NOMBRE */}
      <input type="text"
        placeholder="Nombre"
        {...register("nombre", {
          required: "El nombre es obligatorio",
          maxLength: {
            value: 50,
            message: "El nombre no puede tener más de 50 caracteres"
          },
          pattern: {
            value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
            message: "El nombre solo puede contener letras"
          }
        })}
      />
      {errors.nombre && <p>{errors.nombre.message}</p>}

      {/* EDAD */}
      <input type="number"
        placeholder="Edad"
        {...register("edad", {
          required: "La edad es obligatoria",
          min: {
            value: 6,
            message: "La edad debe ser mayor a 5"
          },
          max: {
            value: 99,
            message: "La edad debe ser menor a 100"
          },
          validate: (value) => {
            if (!/^\d+$/.test(value)) {
              return "La edad solo puede contener números"
            }
            return true
          }
        })}
      />
      {errors.edad && <p>{errors.edad.message}</p>}

      {/* GRUPO */}
      <input type="text"
        placeholder="Grupo"
        {...register("grupo", {
          required: "El grupo es obligatorio",
          maxLength: {
            value: 4,
            message: "El grupo no puede tener más de 4 caracteres"
          },
          pattern: {
            value: /^[A-Za-z0-9]+$/,
            message: "El grupo solo puede contener letras y números"
          }
        })}
      />
      {errors.grupo && <p>{errors.grupo.message}</p>}

      <button type="submit">Agregar Alumno</button>
    </form>
  )
}

export default FormularioAlumno;

