import {
  Button,
  FormContainer,
  Input,
  InputArea,
  Label,
  ErrorMessageInput,
} from "./style";
import { Formik } from "formik";
import { SignupSchema } from "../../utils/validation";
import { initialValuesForm } from "../../utils/initialValuesForm";
import axios from "axios";
import { toast } from "react-toastify";

export function Form({ setUsers, users }: any) {
  async function handleAdd(values: any) {
    try {
      await axios.post("http://localhost:8800", values);
      const newUsers = [...users, values];
      setUsers(newUsers);
      toast.success("Created user success");
    } catch (error: any) {
      toast.error(error);
    }
  }

  return (
    <Formik
      initialValues={initialValuesForm}
      // validationSchema={SignupSchema}
      onSubmit={(values) => handleAdd(values)}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <InputArea>
              <Label>Name</Label>
              <Input
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <ErrorMessageInput name="name" component="div" />
            </InputArea>
            <InputArea>
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessageInput name="email" component="div" />
            </InputArea>
            <InputArea>
              <Label>Telephone</Label>
              <Input
                name="fone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fone}
              />
              <ErrorMessageInput name="fone" component="div" />
            </InputArea>
            <InputArea>
              <Label>Date of Birth</Label>
              <Input
                name="date_birth"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date_birth}
              />
              <ErrorMessageInput name="date_birth" component="div" />
            </InputArea>
            <Button type="submit" disabled={!(dirty && isValid)}>
              Salvar
            </Button>
          </FormContainer>
        </form>
      )}
    </Formik>
  );
}
