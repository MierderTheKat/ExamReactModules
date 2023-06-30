import { createContext } from "react";
import { data } from "../data/usersData";

export const FormContext = createContext();

export function FormContextProvider(props) {
  return (
    <FormContext.Provider
      value={{
        data,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
