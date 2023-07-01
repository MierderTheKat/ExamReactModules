import { createContext } from "react";
import { dataUsers, dataMunicipios, dataSeccion } from "../data/filterData";

export const FormContext = createContext();

export function FormContextProvider(props) {
  return (
    <FormContext.Provider
      value={{
        dataUsers,
        dataMunicipios,
        dataSeccion
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
