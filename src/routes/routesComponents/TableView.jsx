import { TableContextProvider } from "../../context/TableContext";
import AnimatedTransition from "../AnimatedTransition";
import TableFilter from "../../components/Table/TableFilter";
import TableGraphics from "../../components/Table/TableGraphics";
import TableTable from "../../components/Table/TableTable";

function TableView() {
  return (
    <AnimatedTransition>
      <TableContextProvider>
        <TableFilter />
        <TableGraphics />
        <TableTable />
      </TableContextProvider>
    </AnimatedTransition>
  );
}

export default TableView;
