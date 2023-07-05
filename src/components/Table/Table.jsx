import { useContext } from "react";
import { TableContext } from "../../context/TableContext";
import { FileEarmarkExcelFill } from "react-bootstrap-icons";

function Table() {
  const { tableData } = useContext(TableContext);
  return <CardTable />;
}

function CardTable() {
  return (
    <div className="card col-sm-12 mt-4">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <div className="row mx-0 d-flex align-items-center justify-content-between">
            <ButtonExport name="Exportar" />
            <SelectForm
              id="rowsView"
              value={"10"}
              change={() => {}}
              options={"opciones"}
            />
          </div>
        </h5>
        <div className="card-text">
          <TableTemplate />
        </div>
        <div className="row mx-0 gap-2 d-flex justify-content-between">
          <ButtonPages name="Anterior" />
          <ButtonPages name="Siguiente" />
          <DataInfo currentNPage="1" finalNPage="200" allData="20" />
        </div>
      </div>
    </div>
  );
}

// Boton para exportar la información
function ButtonExport({ name = "" }) {
  return (
    <button
      type="button"
      className="btn btn-primary col-6 col-sm-5 col-md-4 col-lg-2 d-flex align-items-center justify-content-center"
    >
      <FileEarmarkExcelFill />
      <p className="ps-1 m-0 fs-6 text-uppercase">{name}</p>
    </button>
  );
}

// Selecciona cuantas filas se veran en la tabla
const SelectForm = ({
  id = "",
  value = "",
  change,
  options,
  disabled = false,
}) => {
  return (
    <div className={`form col-6 col-sm-4 col-md-3 col-xl-2`}>
      <select
        className="form-select"
        id={id}
        /* value={value} */
        onChange={change}
        disabled={disabled}
      >
        <option value="10">10 rows</option>
        <option value="50">50 rows</option>
        <option value="100">100 rows</option>
        {/*{options.map((mun) => (
          <option key={mun.id} value={mun.nombre}>
            {mun.nombre}
          </option>
        ))} */}
      </select>
    </div>
  );
};

// Platilla de la tabla
const TableTemplate = () => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Boton para avanzar o retroceder en la tabla
function ButtonPages({ name = "" }) {
  return (
    <button
      type="button"
      className="btn btn-primary col-sm-5 col-md-4 col-lg-3"
    >
      <span className="ps-1 text-uppercase">{name}</span>
    </button>
  );
}

// En que lugar de la tabla se encuentra
function DataInfo({ currentNPage = "", finalNPage = "", allData = "" }) {
  return (
    <div className="fs-6 col-12 d-flex justify-content-center flex-wrap">
      <p className="m-0 text-center">
        página {currentNPage} de {finalNPage}
      </p>
      <p className="m-0 ms-1 text-center">[{allData} registros]</p>
    </div>
  );
}

export default Table;
