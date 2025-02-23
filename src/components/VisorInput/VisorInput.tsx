import { VisorInputStyles } from "./VisorInputStyles";

interface VisorInputProps {
  value: string;
  [key: string]: string;
}

const VisorInput = ({ value, ...props }: VisorInputProps) => {
  return (
    <VisorInputStyles>
      <input
        type="text"
        disabled
        value={value}
        {...props} 
      />
    </VisorInputStyles>
  );
};

export default VisorInput;
