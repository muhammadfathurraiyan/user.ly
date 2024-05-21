import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function Input(
  { type = "text", className = "", isFocused = false, ...props },
  ref
) {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <input
      {...props}
      type={type}
      className={
        "bg-neutral-950 border-none focus:border-green-600 focus:ring-green-600 rounded-md shadow-sm " +
        className
      }
      ref={input}
    />
  );
});

export function InputError({ message, className = "", ...props }) {
  return message ? (
    <p {...props} className={"text-sm text-red-600 " + className}>
      {message}
    </p>
  ) : null;
}
