import React from "react";

type ThemeContextProps = {
    textColor: string,
    backgroundColor: string    
}

export const ThemeContext = React.createContext<ThemeContextProps>({
    textColor: "",
    backgroundColor: ""
});