import { createContext } from "react";

export const TableContext = createContext();

export function TableContextProvider(props) {
  const valor_1 = 10;

  return (
    <TableContext.Provider
      value={{
        valor_1,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
}
