import { SelectHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type formItem = {
  name: string;
  value: string;
};

interface FormSelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  readonly items: formItem[];
  readonly register: UseFormRegisterReturn<any>;
  readonly error?: boolean | FieldError;
  readonly errorMessage?: string;
  readonly title: string;
}

const FormSelector = (props: FormSelectorProps) => {
  const { error, items, register, errorMessage, title } = props;
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {title}
      </label>
      <select
        className={`shadow  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline ${
          error ? "border-red-500" : ""
        }`}
        {...register}
        defaultValue={""}
      >
        <option value="" disabled className="">
          Seleccionar
        </option>
        {items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-xs italic mt-3">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormSelector;
