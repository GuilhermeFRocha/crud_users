import { Table, Tbody, Td, Th, Thead, Tr } from "./style";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

interface UsersProps {
  users: UserProps[];
  setUsers: (users: UserProps[]) => void;
  setOnEdit: (users: any) => void
}

interface UserProps {
  name: string;
  email: string;
  fone: string;
  id: string;
}

export function Grid({ users, setUsers, setOnEdit }: UsersProps) {

  function handleEdit (users: UserProps) {
    setOnEdit(users)
  }

  async function handleDelete(id: any) {
    await axios
      .delete(`http://localhost:8800/${id}`)
      .then(({ data }) => {
        const newUsers = users.filter((user: any) => user.id !== id);
        setUsers(newUsers);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
  }

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>

      <Tbody>
        {users.map((user: UserProps, i: number | any) => (
          <Tr id={i}>
            <Td width="30%">{user.name}</Td>
            <Td width="30%">{user.email}</Td>
            <Td width="20%" onlyWeb>
              {user.fone}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(user)}/>
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(user.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
