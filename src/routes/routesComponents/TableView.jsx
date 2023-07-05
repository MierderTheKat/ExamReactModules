import { TableContextProvider } from "../../context/TableContext";
import AnimatedTransition from "../AnimatedTransition";
import Graphics from "../../components/Table/Graphics";
import Table from "../../components/Table/Table";

function TableView() {
  return (
    <AnimatedTransition>
      <TableContextProvider>
        <Graphics/>
        <Table/>
      </TableContextProvider>
    </AnimatedTransition>
  );
}

export default TableView;
