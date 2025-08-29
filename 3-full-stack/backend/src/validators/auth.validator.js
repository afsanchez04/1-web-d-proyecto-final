import { body } from "express-validator" 

export const registerValidator = [
  //Debe existir y tener al menos 3 caracteres
  body("username")
  .notEmpty().withMessage('Nombre de usuario requerido')
  .isLength({min: 3}).withMessage('Username debe tener mínimo 3 caracteres'),

  //Email debe ser válido
  body("email")
  .notEmpty().withMessage('Email es obligatorio')
  .isEmail().withMessage('Debe ser un correo válido'),

  //Debe existir y tener al menos 6 caracteres
  body("password")
  .notEmpty().withMessage('Password es obligatorio')
  .isLength({min: 6}).withMessage('Password debe tener mínimo 6 caracteres')

]

export const loginValidator = [

  //Email debe ser válido
  body("email")
  .notEmpty().withMessage('Email es obligatorio')
  .isEmail().withMessage('Debe ser un correo válido'),

  //Debe existir y tener al menos 6 caracteres
  body("password")
  .notEmpty().withMessage('Password es obligatorio')

]