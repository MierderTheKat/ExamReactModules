import { createContext } from "react";

export const FilterContext = createContext();

export function FilterContextProvider(props) {
  const valor_1 = 10;

  return (
    <FilterContext.Provider
      value={{
        valor_1,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}
