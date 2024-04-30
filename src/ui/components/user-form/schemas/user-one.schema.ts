import * as yup from "yup";

export const UserOneSchema = yup
  .object({
    name: yup.string().required("Este campo es obligatorio"),
    status: yup.string().required("Este campo es obligatorio"),
    description: yup
      .string()
      .required("Este campo es obligatorio")
      .max(150, "No se permiten más de 150 caracteres"),
    accountType: yup.string().required("Este campo es obligatorio"),
    contacts: yup.string().required("Este campo es obligatorio"),
  })
  .required();