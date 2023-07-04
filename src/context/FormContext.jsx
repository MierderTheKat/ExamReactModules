import { createContext, useState } from "react";
import { dataUsers, dataMunicipios, dataSeccion, dataSexo, dataestados_mexico, dataLocalidad } from "../data/formData";

export const FormContext = createContext();

export function FormContextProvider(props) {
  const [selectPerson, setSelectPerson] = useState("");

  // Persona seleccionada del modal
  const selectPersonChange = (value) => {
    setSelectPerson(value);
  };

  return (
    <FormContext.Provider
      value={{
        selectPerson,
        selectPersonChange,
        dataUsers,
        dataMunicipios,
        dataSeccion,
        dataSexo,
        dataestados_mexico,
        dataLocalidad,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
