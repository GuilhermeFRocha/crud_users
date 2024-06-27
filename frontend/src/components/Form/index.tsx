import { useRef } from "react";
import { Button, FormContainer, Input, InputArea, Label } from "./style";

export function Form({ onEdit }: any) {
  const ref = useRef<HTMLInputElement>();

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
      <Button type="submit">Salvar</Button>
    </FormContainer>
  );
}
