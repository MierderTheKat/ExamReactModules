import { useContext, useState, useEffect } from "react";
import { TableContext } from "../../context/TableContext";

// Aun no se desarrolla este modulo, esta en proceso
// Falta pensar en como es que se implementa la informacion en las graficas
function TableFilter() {
  const { dataView, tableData, currentData, currentDataChange } =
    useContext(TableContext);
  const [filterView, setFilterView] = useState(dataView[0].nombre);
  const dataStructure = {
    REGIÓN: [],
    MUNICIPIO: [],
    POLÍGONO: [],
    SECCIÓN: [],
    LNOM: [],
    META: [],
    COMPROMISOS: [],
    AVANCE: [],
    DETECTADOS: [],
    OTROS: [],
    PORCENTAJE: [],
    EFECTIVIDAD: [],
  };
  const [data, setData] = useState(dataStructure); // Estado para almacenar los datos filtrados

  const filterChange = (value) => setFilterView(value);

  const updateFilter = () => {
    if (filterView.toUpperCase() !== "ESTATAL") {
      // Filtra los datos según la opción seleccionada y los agrega al objeto data
      const filteredData = tableData[filterView.toUpperCase()].map(
        (value, index) => ({
          REGIÓN: tableData["REGIÓN"][index],
          MUNICIPIO: tableData["MUNICIPIO"][index],
          POLÍGONO: tableData["POLÍGONO"][index],
          SECCIÓN: tableData["SECCIÓN"][index],
          LNOM: tableData["LNOM"][index],
          META: tableData["META"][index],
          COMPROMISOS: tableData["COMPROMISOS"][index],
          AVANCE: tableData["AVANCE"][index],
          DETECTADOS: tableData["DETECTADOS"][index],
          OTROS: tableData["OTROS"][index],
          PORCENTAJE: tableData["PORCENTAJE"][index],
          EFECTIVIDAD: tableData["EFECTIVIDAD"][index],
        })
      );

      setData(dataStructure);

      setData((prevData) => ({
        ...prevData,
        REGIÓN: [
          ...prevData.REGIÓN,
          ...filteredData.map((data) => data.REGIÓN),
        ],
        MUNICIPIO: [
          ...prevData.MUNICIPIO,
          ...filteredData.map((data) => data.MUNICIPIO),
        ],
        POLÍGONO: [
          ...prevData.POLÍGONO,
          ...filteredData.map((data) => data.POLÍGONO),
        ],
        SECCIÓN: [
          ...prevData.SECCIÓN,
          ...filteredData.map((data) => data.SECCIÓN),
        ],
        LNOM: [...prevData.LNOM, ...filteredData.map((data) => data.LNOM)],
        META: [...prevData.META, ...filteredData.map((data) => data.META)],
        COMPROMISOS: [
          ...prevData.COMPROMISOS,
          ...filteredData.map((data) => data.COMPROMISOS),
        ],
        AVANCE: [
          ...prevData.AVANCE,
          ...filteredData.map((data) => data.AVANCE),
        ],
        DETECTADOS: [
          ...prevData.DETECTADOS,
          ...filteredData.map((data) => data.DETECTADOS),
        ],
        OTROS: [...prevData.OTROS, ...filteredData.map((data) => data.OTROS)],
        PORCENTAJE: [
          ...prevData.PORCENTAJE,
          ...filteredData.map((data) => data.PORCENTAJE),
        ],
        EFECTIVIDAD: [
          ...prevData.EFECTIVIDAD,
          ...filteredData.map((data) => data.EFECTIVIDAD),
        ],
      }));
      currentDataChange(data);
    } else {
      currentDataChange(tableData);
    }
  };

  return (
    <div className="card col-sm-12 mt-4">
      <div className="card-body">
        <h5 className="card-title m-0">
          <div className="row mx-0 gap-2 d-flex align-items-center justify-content-between">
            <SelectForm
              id="filterData"
              name="Vista:"
              value={filterView}
              change={filterChange}
              options={dataView}
            />
            <ButtonFilter name="Filtrar" todo={updateFilter} />
          </div>
        </h5>
        <div className="card-text"></div>
      </div>
    </div>
  );
}

export default TableFilter;

// Estructura de los tipo Select
export const SelectForm = ({
  id = "",
  name = "",
  value = "",
  change,
  options,
  disabled = false,
}) => {
  return (
    <div className={`form-floating col-md-4 col-sm-6 my-1`}>
      <select
        className="form-select"
        id={id}
        value={value}
        onChange={(e) => {
          change(e.target.value);
        }}
        disabled={disabled}
      >
        {options.map((data) => (
          <option key={data.id} value={data.nombre}>
            {data.nombre}
          </option>
        ))}
      </select>
      <label htmlFor={id} className="ms-2">
        {name}
      </label>
    </div>
  );
};

// Boton para filtrar
function ButtonFilter({ name = "", todo, type = "submit", disabled = false }) {
  return (
    <button
      type={type}
      onClick={todo}
      disabled={disabled}
      className="btn btn-primary col-6 col-sm-5 col-md-4 col-lg-2"
    >
      <p className="ps-1 m-0 fs-6 text-uppercase">{name}</p>
    </button>
  );
}
