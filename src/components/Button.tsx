import React from "react";
interface buttonProps {
  label?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
  children?: any;
}

const Button: React.FC<buttonProps> = ({
  label,
  onClick,
  type,
  className,
  disabled,
  children,
}) => {
  return (
    <div className="w-full p-0 m-0">
      <button
        onClick={onClick}
        type={type ?? "submit"}       
        className={className}
        disabled={disabled}
      >
        {children ? children : label}
      </button>
    </div>
  );
};

export default React.memo(Button);
