import { MouseEvent, ChangeEvent } from 'react';
import './styles.css';

type ButtonProps = {
  handleClick: (event: MouseEvent<HTMLButtonElement>, id?: number) => void;
};

export const Button = ({ handleClick }: ButtonProps) => {
  return (
    <button type="button" onClick={(e) => handleClick(e, 1)}>
      Click Alert
    </button>
  );
};

type InputProps = {
  value: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  
  return (
    <input
      type="text"
      value={props.value}
      onChange={handleInputChange}
      className="input"
    />
  );
};
