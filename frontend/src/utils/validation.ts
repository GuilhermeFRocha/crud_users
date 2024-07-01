import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  fone: Yup.string()
    .matches(/^[0-9]+$/, "Telefone deve conter apenas números")
    .min(10, "Telefone deve ter no mínimo 10 dígitos")
    .required("Telefone é obrigatório"),
  date_birth: Yup.date()
    .required("Data de nascimento é obrigatória")
    .max(new Date(), "Data de nascimento não pode ser no futuro"),
});
