import { useContext, useState, useEffect } from "react";
import { TableContext } from "../../context/TableContext";
import { FileEarmarkExcelFill } from "react-bootstrap-icons";
import * as XLSX from "xlsx";

function TableTable() {
  const { dataRows, tableDataRow } = useContext(TableContext);

  const [filterRow, setFilterRow] = useState(dataRows[0].nombre); // Valor dentro del select para cambiar cuantas filas se veran
  const [showPages, setShowPages] = useState(filterRow); // Numero de filas que se veran en la tabla
  const [data, setData] = useState([]); // Toda la informacion de las tablas
  const [currentData, setCurrentData] = useState([]); // Información de cada pagina
  const [currentPage, setCurrentPage] = useState(1);  // Numero de pagina actual

  // Filtrar tabla por filas
  const filterRowChange = (value) => {
    setFilterRow(value);
    setShowPages(value);
    setCurrentPage(1);
  };

  // Obtenemos los datos por cada fila
  useEffect(() => {
    setData(tableDataRow);
  }, []);

  // Cambiamos el estado de los datos actuales de la tabla
  // cuando avanzamos o retrocedemos de pagina
  useEffect(() => {
    const Last = currentPage * showPages;
    const First = Last - showPages;
    setCurrentData(data.slice(First, Last));
  }, [data, currentPage, showPages]);

  // Retrodecemos de pagina
  const previousPageChange = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Avanzamos de pagina
  const nextPageChange = () => {
    const totalPages = Math.ceil(data.length / showPages);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="card col-sm-12 mt-4 mb-2">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <div className="row mx-0 d-flex align-items-center justify-content-between">
            <ButtonExport name="Exportar" />
            <SelectForm
              id="rowsView"
              value={filterRow}
              change={filterRowChange}
              options={dataRows}
            />
          </div>
        </h5>
        <div className="card-text">
          <TableTemplate currentData={currentData} />
        </div>
        <div className="row mx-0 gap-2 d-flex justify-content-between">
          <ButtonPages name="Anterior" todo={previousPageChange} />
          <ButtonPages name="Siguiente" todo={nextPageChange} />
          <DataInfo
            currentNPage={currentPage}
            finalNPage={Math.ceil(data.length / showPages)}
            allData={data.length}
          />
        </div>
      </div>
    </div>
  );
}

// Boton para exportar la información
function ButtonExport({ name = "" }) {
  const { tableDataRow } = useContext(TableContext);

  // Titulos de las columnas
  const columnHeaders = [
    "DISTRITO FEDERAL",
    "DISTRITO LOCAL",
    "REGIÓN",
    "MUNICIPIO",
    "POLÍGONO",
    "SECCIÓN",
    "LNOM",
    "META",
    "COMPROMISOS",
    "AVANCE",
    "DETECTADOS",
    "OTROS",
    "PORCENTAJE",
    "EFECTIVIDAD",
  ];

  // Funcion para vincular datos con su encabezado
  const addHeaderRow = (data, headers) => {
    return [headers, ...data];
  };

  // Llamar a la función para agregar la fila de encabezado
  const dataWithHeaders = addHeaderRow(tableDataRow, columnHeaders);

  // Función para convertir los datos a un libro de Excel
  const convertToExcel = (data) => {
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    const excelBuffer = XLSX.write(workbook, {
      type: "array",
      bookType: "xlsx",
    });
    saveAsExcelFile(excelBuffer, "data.xlsx");
  };

  // Función para guardar el archivo de Excel
  const saveAsExcelFile = (buffer, fileName) => {
    const data = new Blob([buffer], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Llamar a la función para exportar los datos
  const exportExcel = () => convertToExcel(dataWithHeaders);

  return (
    <button
      type="button"
      className="btn btn-success col-6 col-sm-5 col-md-4 col-lg-2 d-flex align-items-center justify-content-center"
      onClick={exportExcel}
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
        value={value}
        onChange={(e) => change(e.target.value)}
        disabled={disabled}
      >
        {options.map((data) => (
          <option key={data.id} value={data.nombre}>
            {data.nombre} rows
          </option>
        ))}
      </select>
    </div>
  );
};

// Platilla de la tabla
const TableTemplate = ({ currentData }) => {
  const { tableData } = useContext(TableContext);
  // Filtramos los titulos de las tablas
  const title = Object.keys(tableData);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped table-hover align-middle">
        <thead>
          <tr>
            {title.map((data, index) => (
              <th
                key={index}
                value={data[index]}
                scope="col"
                className="text-capitalize align-middle"
              >
                {String(data).charAt(0).toUpperCase() +
                  String(data).slice(1).toLowerCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((data, index) => (
            <tr key={index} className="text-center">
              <RowsTable value={data[0]} />
              <RowsTable value={data[1]} />
              <RowsTable value={data[2]} />
              <RowsTable value={data[3]} className="text-start" />
              <RowsTable value={data[4]} className="text-break" />
              <RowsTable value={data[5]} className="text-break" />
              <RowsTable value={data[6]} />
              <RowsTable value={data[7]} />
              <RowsTable value={data[8]} />
              <RowsTable value={data[9]} />
              <RowsTable value={data[10]} />
              <RowsTable value={data[11]} />
              <RowsTable value={data[12]} className="text-danger text-center" />
              <RowsTable value={data[13]} className="text-danger text-center" />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Plantilla para cada dato dentro de la tabla
export const RowsTable = ({ value, className = "" }) => {
  // Se limitan los numeros decimales a 3
  if (typeof value === "number") {
    value = parseFloat(value.toFixed(3));
  }
  // Se formatean los strings para tener letra capital
  const formattedValue =
    String(value).charAt(0).toUpperCase() +
    String(value).slice(1).toLowerCase();

  return (
    <th value={formattedValue} className={`${className}`}>
      {formattedValue}
    </th>
  );
};

// Boton para avanzar o retroceder en la tabla
function ButtonPages({ name = "", todo }) {
  return (
    <button
      type="button"
      onClick={todo}
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

export default TableTable;
