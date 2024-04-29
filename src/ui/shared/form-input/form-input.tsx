import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  register?: UseFormRegisterReturn<any>;
  error?: boolean | FieldError;
  errorMessage?: string;
}

const FormInput = (props: InputProps) => {
  const { register, error, title, errorMessage, ...everythingElse } = props;

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {title}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? "border-red-500" : ""
        }`}
        {...everythingElse}
        {...register}
      />
      {error && (
        <p className="text-red-500 text-xs italic mt-3">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
