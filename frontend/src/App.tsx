import { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "./style";
import { Form } from "./components/Form";
import { Grid } from "./components/Grid";
import axios from "axios";

interface UserProps {
  name: string;
  email: string;
  fone: string;
  id: string;
}

export function App() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [onEdit, setOnEdit] = useState(null);

  async function getUsers() {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data);
    } catch (error: any) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <h1>Users</h1>
        <Form />
        <Grid users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}
