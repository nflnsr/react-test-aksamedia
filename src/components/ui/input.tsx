import React from "react";

export type InputType = {
  inputFor?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
} & React.HTMLProps<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputType>(
    ({ inputFor, type, placeholder, required, ...rest }, ref) => {
      return (
        <>
          <label htmlFor={inputFor}>
            {(inputFor ?? "").charAt(0).toUpperCase() + (inputFor ?? "").slice(1)}
          </label>
          <input
            id={inputFor}
            name={inputFor}
            type={type}
            placeholder={placeholder}
            required={required}
            ref={ref} // Pastikan ref diteruskan
            {...rest} // Sebarkan properti lainnya
            className="my-auto h-8 w-64 px-2 ring-1 ring-cyan-500"
          />
        </>
      );
    }
  );

