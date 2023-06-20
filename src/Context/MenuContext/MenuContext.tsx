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

const [isVisible, setIsVisible] = useState(InitialValue.isVisible);

function handleClick() {
  setIsVisible(!isVisible);
}
setIsVisible(InitialValue.isVisible);

export const MenuContextProvider = ({ children }: MenuProps) => {
  return (
    <MenuContext.Provider value={{ isVisible, handleClick }}>
      {children}
    </MenuContext.Provider>
  );
};
