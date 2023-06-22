import { ReactNode, useState } from "react";

import { createContext } from "react";

type MenuContextTypes = {
  isVisible: boolean;
  handleClick: (newState: boolean) => void;
};

const InitialValue = {
  isVisible: false,
  handleClick: () => {
    ("");
  },
};

interface MenuProps {
  children: ReactNode;
}

export const MenuContext = createContext<MenuContextTypes>(InitialValue);

export const MenuContextProvider = ({ children }: MenuProps) => {
  const [isVisible, setIsVisible] = useState(InitialValue.isVisible);

  function handleClick() {
    setIsVisible(!isVisible);
  }
  console.log(isVisible);

  return (
    <MenuContext.Provider value={{ isVisible, handleClick }}>
      {children}
    </MenuContext.Provider>
  );
};
