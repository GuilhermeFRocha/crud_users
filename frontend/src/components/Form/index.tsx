import { useEffect, useRef } from "react";
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

export function Form({ getUsers, onEdit, setOnEdit }: any) {
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;
      user!.name = onEdit.name;
    }
  }, [onEdit]);

  return (
    <Formik
      initialValues={initialValuesForm}
      // validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
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
            <Button type="submit">Salvar</Button>
          </FormContainer>
        </form>
      )}
    </Formik>
  );
}
