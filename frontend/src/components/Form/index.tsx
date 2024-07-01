import { useRef } from "react";
import { Button, FormContainer, Input, InputArea, Label } from "./style";

export function Form({ onEdit, setUsers }: any) {
  const ref = useRef<HTMLInputElement>();

  function handleSave () {
    setUsers()
  }

  return (
    <FormContainer>
      <InputArea>
        <Label>Name</Label>
        <Input name="name" />
      </InputArea>
      <InputArea>
        <Label>Email</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telephone</Label>
        <Input name="fone" />
      </InputArea>
      <InputArea>
        <Label>Date of Birth</Label>
        <Input name="date_birth" type="date" />
      </InputArea>
      <Button type="submit" onClick={() => {handleSave()}}>Salvar</Button>
    </FormContainer>
  );
}
