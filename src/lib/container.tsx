import { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
      {children}
    </div>
  );
};

export default Container;
