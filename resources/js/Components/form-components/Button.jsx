export const buttonClass = {
  primary:
    "px-3 py-2 bg-green-600 rounded hover:bg-green-800 transition-colors",
  secondary: "px-3 py-2 bg-neutral-800 rounded hover:bg-neutral-800/80 transition-colors",
  danger: "px-3 py-2 bg-red-600 rounded hover:bg-red-800 transition-colors",
};

export function Button({
  children,
  variants = "primary",
  disabled,
  className,
  ...props
}) {
  const variant = buttonClass;
  return (
    <button
      {...props}
      className={`${variant[variants]} ${
        disabled && "opacity-25"
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
