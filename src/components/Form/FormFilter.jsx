import { useContext, useState } from "react";
import { FormContext } from "../../context/FormContext";
import { TextForm, SelectForm, ButtonForm, NotFound } from "../Form/FormForm";
import { Search } from "react-bootstrap-icons";

// Modal normal de Bootstrap
export const ModalView = () => {
  const { selectPerson } = useContext(FormContext);

  return (
    <>
      {/* <!-- Boton para abrir modal --> */}
      <div className="row">
        <div className="col-md-6">
          <div
            className="input-group mb-3 mt-1"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#filterModal"
          >
            <TextForm
              id="nameResponsable"
              name="Responsable"
              value={
                selectPerson
                  ? selectPerson.nombre +
                    " " +
                    selectPerson.apellidoPa +
                    " " +
                    selectPerson.apellidoMa
                  : ""
              }
              required={true}
              disabled={true}
            />
            <button className="btn btn-warning d-flex align-items-center px-3">
              <Search size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal modal-xl fade"
        id="filterModal"
        tabIndex="-1"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2
                className="modal-title fs-4 w-100 text-center"
                id="filterModalLabel"
              >
                Busqueda de Responsable
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <FilterUsersCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Información dentro del modal
const FilterUsersCard = () => {
  // Trae los datos de los usuarios
  const { dataUsers, dataMunicipios, dataSeccion } = useContext(FormContext);

  // Definir estado de los filtros
  const [searchResponsable, setSearchResponsable] = useState("");
  const [searchMunicipio, setSearchMunicipio] = useState("");
  const [searchSeccion, setsearchSeccion] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // Cambiar estados (dentro de otro componente)
  const handleSearchResponsableChange = (value) => setSearchResponsable(value);
  const handleSearchMunicipioChange = (value) => setSearchMunicipio(value);
  const handleSearchSeccionChange = (value) => setsearchSeccion(value);

  // Filtro de datos dependiendo de los filtros
  const filterResults = () => {
    if (searchResponsable || searchMunicipio || searchSeccion) {
      const filtered = dataUsers.filter((item) => {
        const nombre = item.nombre + " " + item.apellidoPa + item.apellidoMa;
        const nameMatch = nombre
          .toLowerCase()
          .startsWith(searchResponsable.toLowerCase());
        const municipalityMatch = item.domicilio.municipio === searchMunicipio;
        const sectionMatch = item.domicilio.seccion === searchSeccion;
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="row g-3 mb-2 needs-validation"
        noValidate
      >
        <TextForm
          id="nameFilter"
          name="Responsable"
          value={searchResponsable}
          change={handleSearchResponsableChange}
          large={4}
          col_type="xl"
        />
        <SelectForm
          id="municipalityFilter"
          name="Municipio"
          value={searchMunicipio}
          change={handleSearchMunicipioChange}
          options={dataMunicipios}
          large={4}
          col_type="xl"
        />
        <SelectForm
          id="sectionFilter"
          name="Sección"
          value={searchSeccion}
          change={handleSearchSeccionChange}
          options={dataSeccion}
          large={4}
          col_type="xl"
        />
        <div className="gap-3 d-flex justify-content-center">
          <ButtonForm name="Buscar" todo={filterResults} color="primary" />
          <ButtonForm
            name="Limpiar"
            todo={clearfilterResults}
            color="danger"
            type="button"
          />
        </div>
      </form>
      {filteredResults.length ? (
        <FilterContainerData data={filteredResults} />
      ) : (
        <NotFound
          name="No se encontro ningun resultado"
          size={30}
          align="center"
          space="2"
        />
      )}
    </div>
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
  const { selectPersonChange } = useContext(FormContext);

  return data.map((user) => (
    <button
      key={user.id}
      className="card col-12 col-lg-5 text-start py-0 px-1 btn btn-light"
      onClick={() => {
        selectPersonChange(user);
      }}
      data-bs-dismiss="modal"
    >
      <div className="card-body text-secondary">
        <p className="card-text mb-2">
          Nombre:{" "}
          <span className="text-primary fw-bold text-uppercase">
            {user.nombre + " " + user.apellidoPa + " " + user.apellidoMa}
          </span>
        </p>
        <p className="card-text m-0">Celular: {user.contacto.celular}</p>
        <p className="card-text m-0">Responsabilidad: {user.responsabilidad}</p>
        <p className="card-text m-0">Municipio: {user.domicilio.municipio}</p>
        <p className="card-text m-0">Sección: {user.domicilio.seccion}</p>
      </div>
    </button>
  ));
};

export default ModalView;
