import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return <div className="max-w-6xl mx-auto px-6">{children}</div>;
};

export default MainLayout;
