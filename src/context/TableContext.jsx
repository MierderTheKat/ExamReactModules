import { createContext, useState } from "react";
import { tableData } from "../data/tableData";

export const TableContext = createContext();

export function TableContextProvider(props) {
  return (
    <TableContext.Provider
      value={{
        tableData,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
}
