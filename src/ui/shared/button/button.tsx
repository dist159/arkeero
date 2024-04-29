import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  const { children, ...elseProps } = props;
  return (
    <button
      className="bg-arkeero-blue hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded"
      {...elseProps}
    >
      {children}
    </button>
  );
};

export default Button;
