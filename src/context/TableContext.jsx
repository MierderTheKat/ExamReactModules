import { createContext, useState, useEffect } from "react";
import { tableData, tableDataRow, dataView, dataRows } from "../data/tableData";

export const TableContext = createContext();

export function TableContextProvider(props) {
  const [currentData, setCurrentData] = useState();

  const currentDataChange = (value) => setCurrentData(value);

  useEffect(() => {
    currentDataChange(tableDataRow);
  }, []);

  return (
    <TableContext.Provider
      value={{
        tableData,
        tableDataRow,
        dataView,
        dataRows,
        currentData,
        currentDataChange,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
}
