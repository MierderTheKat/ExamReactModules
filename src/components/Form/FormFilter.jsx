import { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";

export const FilterUsersCard = () => {
  // Trae los datos de los usuarios
  const { dataUsers, dataMunicipios, dataSeccion } = useContext(FormContext);

  // Definir estado de los filtros
  const [searchResponsable, setSearchResponsable] = useState("");
  const [searchMunicipio, setSearchMunicipio] = useState("");
  const [searchSeccion, setsearchSeccion] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // Cambiar estados (dentro de otro componente)
  const handleSearchResponsableChange = (value) => {
    setSearchResponsable(value);
  };
  const handleSearchMunicipioChange = (value) => {
    setSearchMunicipio(value);
  };
  const handleSearchSeccionChange = (value) => {
    setsearchSeccion(value);
  };

  // Filtro de datos dependiendo de los filtros
  const filterResults = () => {
    if (searchResponsable || searchMunicipio || searchSeccion) {
      const filtered = dataUsers.filter((item) => {
        const nameMatch = item.nombre
          .toLowerCase()
          .startsWith(searchResponsable.toLowerCase());
        const municipalityMatch = item.municipio === searchMunicipio;
        const sectionMatch = item.seccion === searchSeccion;
        // Validacion para cada situacion de uso del filtro
        if (searchResponsable && searchMunicipio && searchSeccion) {
          return nameMatch && municipalityMatch && sectionMatch;
        } else if (searchResponsable && searchMunicipio) {
          return nameMatch && municipalityMatch;
        } else if (searchResponsable && searchSeccion) {
          return nameMatch && sectionMatch;
        } else if (searchMunicipio && searchSeccion) {
          return municipalityMatch && sectionMatch;
        } else if (searchResponsable) {
          return nameMatch;
        } else if (searchMunicipio) {
          return municipalityMatch;
        } else if (searchSeccion) {
          return sectionMatch;
        } else {
          return true;
        }
      });
      setFilteredResults(filtered);
    } else {
      clearfilterResults();
    }
  };

  // Limpiar los filtros y resultados
  const clearfilterResults = () => {
    setFilteredResults([]);
    setSearchResponsable("");
    setSearchMunicipio("");
    setsearchSeccion("");
  };

  return (
    <div className="row g-2">
      <h2 className="text-center mb-2">Busqueda de Responsable</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="row g-3 mb-2 needs-validation"
        novalidate
      >
        <TextFilter
          id="nameFilter"
          name="responsable"
          value={searchResponsable}
          change={handleSearchResponsableChange}
          large={4}
        />
        <SelectFilter
          id="municipalityFilter"
          name="municipio"
          value={searchMunicipio}
          change={handleSearchMunicipioChange}
          options={dataMunicipios}
          large={4}
        />
        <SelectFilter
          id="sectionFilter"
          name="section"
          value={searchSeccion}
          change={handleSearchSeccionChange}
          options={dataSeccion}
          large={4}
        />
        <div className="gap-3 d-flex justify-content-center">
          <ButtonFilter name="Buscar" todo={filterResults} color="primary" />
          <ButtonFilter
            name="Limpiar"
            todo={clearfilterResults}
            color="danger"
          />
        </div>
      </form>
      <FilterContainerData data={filteredResults} />
    </div>
  );
};

// Estructura de los tipo Text
const TextFilter = ({
  id = "",
  name = "",
  value = "",
  change,
  large = 4,
  type = "text",
  necessary = false,
}) => {
  return (
    <div className={`form-floating col-sm-${large}`}>
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={(e) => {
          change(e.target.value);
        }}
        required={necessary}
      />
      <LabelFilter id={id} necessary={necessary} name={name} />
    </div>
  );
};

// Estructura de los tipo Select
const SelectFilter = ({
  id = "",
  name = "",
  value = "",
  change,
  options,
  large = 4,
  necessary = false,
}) => {
  return (
    <div className={`form-floating col-sm-${large}`}>
      <select
        className="form-select"
        id={id}
        value={value}
        onChange={(e) => {
          change(e.target.value);
        }}
        required={necessary}
      >
        <option value="">Seleccionar {name}</option>
        {options.map((mun) => (
          <option key={mun.id} value={mun.nombre}>
            {mun.nombre}
          </option>
        ))}
      </select>
      <LabelFilter id={id} necessary={necessary} name={name} />
    </div>
  );
};

// Saber si es necesario o no (agregar el * de obligatorio)
const LabelFilter = ({ id, necessary, name }) => {
  return (
    <label htmlFor={id} className="text-capitalize ms-2">
      {necessary && <span className="text-danger fw-bold">* </span>}
      {name}
    </label>
  );
};

// Botones de Filtros
const ButtonFilter = ({ name, todo, color }) => {
  return (
    <button
      className={`btn btn-${color} py-2 px-4 fw-medium text-uppercase`}
      type="submit"
      onClick={todo}
    >
      {name}
    </button>
  );
};

// Contenedor de los Cards (para mostrarlo 2 columnas)
const FilterContainerData = ({ data }) => {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center">
      <FilterUsersData data={data} />
    </div>
  );
};

// Cards de los datos filtrados obtenidos
const FilterUsersData = ({ data }) => {
  return data.map((user) => (
    <div key={user.id} className="card col-12 col-lg-5 text-start py-0 px-1 btn btn-light">
      <div className="card-body text-secondary">
        <p className="card-text mb-2">
          Nombre:{" "}
          <span className="text-primary fw-bold text-uppercase">
            {user.nombre}
          </span>
        </p>
        <p className="card-text m-0">Celular: {user.celular}</p>
        <p className="card-text m-0">Responsabilidad: {user.responsabilidad}</p>
        <p className="card-text m-0">Municipio: {user.municipio}</p>
        <p className="card-text m-0">Sección: {user.seccion}</p>
      </div>
    </div>
  ));
};

export default FilterUsersCard;
