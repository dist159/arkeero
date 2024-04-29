import { TextareaHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly register: UseFormRegisterReturn<any>;
  readonly error?: boolean | FieldError;
  readonly errorMessage?: string;
  readonly title: string;
}

const Textarea = (props: TextareaProps) => {
  const { error, register, errorMessage, title, ...textAreaProps } = props;
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {title}
      </label>
      <textarea
        className={`shadow border rounded w-full py-1 px-3 text-gray-700  focus:outline-none focus:shadow-outline ${
          error ? "border-red-500" : ""
        }`}
        {...textAreaProps}
        {...register}
        placeholder="Description"
      />
      {error && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
};

export default Textarea;
