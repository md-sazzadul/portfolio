import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg transition"
    >
      {children}
    </button>
  );
};

export default Button;
