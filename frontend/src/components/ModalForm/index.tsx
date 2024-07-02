import { Formik } from "formik";
import Modal from "react-modal";
import { SignupSchema } from "../../utils/validation";
import {
  Button,
  ErrorMessageInput,
  FormContainer,
  Input,
  InputArea,
  Label,
} from "../Form/style";

Modal.setAppElement("#root");

export const ModalForm = ({ modalIsOpen, setModalIsOpen, userEdit }: any) => {
  console.log(userEdit);

  const initialValuesFormEdits = {
    name: userEdit.name,
    email: userEdit.email,
    fone: userEdit.fone,
    date_birth: userEdit.date_birth,
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  async function handleConfirmEdit(values: any) {
    console.log(values);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            color: "lightsteelblue",
          },
        }}
      >
        <Formik
          initialValues={initialValuesFormEdits}
          validationSchema={SignupSchema}
          onSubmit={(values) => handleConfirmEdit(values)}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
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
                <Button type="submit" disabled={!(dirty && isValid)}>
                  Salvar
                </Button>
              </FormContainer>
            </form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
