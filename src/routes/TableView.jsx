import { TableContextProvider } from "../context/TableContext";
import { Tools } from "react-bootstrap-icons";

function TableView() {
  return (
    <TableContextProvider>
      <div className="text-center mt-5 fs-1">Estoy en Table</div>
      <div className="text-center  fs-1">Modulo en construcción</div>
      <div className="text-center mt-3">
        <Tools size={200} />
      </div>
    </TableContextProvider>
  );
}

export default TableView;
