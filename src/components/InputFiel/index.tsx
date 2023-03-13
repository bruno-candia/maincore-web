import { InputContainer } from "./styles";

interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  paddingRight?: number;
}

export function InputFiel({
  type,
  name,
  placeholder,
  paddingRight = 0,
}: InputProps) {
  return (
    <InputContainer
      type={type}
      name={name}
      placeholder={placeholder}
      style={{ paddingRight: paddingRight }}
    />
  );
}
