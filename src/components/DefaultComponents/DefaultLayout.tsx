import React, { ReactNode } from "react";
import Header from "../Header";
import { Footer } from "../Footer";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  children: ReactNode;
};

const DefaultLayout = ({ isDarkMode, setIsDarkMode, children }: Props) => {
  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {children}
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default DefaultLayout;
