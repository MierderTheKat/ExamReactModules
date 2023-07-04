import { useContext, useState, useEffect } from "react";
import { FormContext } from "../../context/FormContext";
import { ExclamationSquareFill } from "react-bootstrap-icons";

function FormForm() {
  // Trae los datos de los usuarios
  const {
    selectPerson,
    selectPersonChange,
    dataMunicipios,
    dataLocalidad,
    dataSexo,
    dataestados_mexico,
  } = useContext(FormContext);

  // Definir estado de todos los campos
  // Datos basicos
  const [claveElectorState, setClaveElector] = useState("");
  const [nombreState, setNombreState] = useState("");
  const [apellidoPaState, setApellidoPaState] = useState("");
  const [apellidoMaState, setApellidoMaState] = useState("");
  const [sexoState, setSexoState] = useState("");
  const [voluntarioState, setVoluntarioState] = useState("");
  // Datos de Nacimiento
  const [fechaNacState, setFechaNacState] = useState("");
  const [estadoNacState, setEstadoNacState] = useState("");
  // Domicilio
  const [calleState, setCalleState] = useState("");
  const [municipioState, setMunicipioState] = useState("");
  const [nExteriorState, setNExteriorState] = useState("");
  const [nInteriorState, setNInteriorState] = useState("");
  const [localidadState, setLocalidadState] = useState("");
  const [coloniaState, setColoniaState] = useState("");
  const [cpState, setCPState] = useState("");
  const [seccionState, setSeccionState] = useState("");
  // Contacto
  const [telCelularState, setTelCelularState] = useState("");
  const [telFijoState, setTelFijoState] = useState("");
  const [telMsjState, setTelMsj] = useState("");
  // Domicilio para INE
  const [ineCoincideState, setIneCoincideState] = useState("");
  const [ineCalleState, setIneCalleState] = useState("");
  const [ineMunicipioState, setIneMunicipioState] = useState("");
  const [ineNExteriorState, setIneNExteriorState] = useState("");
  const [ineNInteriorState, setIneNInteriorState] = useState("");
  const [ineLocalidadState, setIneLocalidadState] = useState("");
  const [ineColoniaState, setIneColoniaState] = useState("");
  const [ineCpState, setIneCPState] = useState("");

  // Cambiar estados (dentro de otro componente)
  // Datos basicos
  const claveElectorChange = (value) => setClaveElector(value);
  const nombreChange = (value) => setNombreState(value);
  const apellidoPaChange = (value) => setApellidoPaState(value);
  const apellidoMaChange = (value) => setApellidoMaState(value);
  const sexoChange = (value) => setSexoState(value);
  const voluntarioChange = (value) => setVoluntarioState(value);
  // Datos de Nacimiento
  const fechaNacChange = (value) => setFechaNacState(value);
  const estadoNacChange = (value) => setEstadoNacState(value);
  // Domicilio
  const calleChange = (value) => setCalleState(value);
  const municipioChange = (value) => setMunicipioState(value);
  const nExteriorChange = (value) => setNExteriorState(value);
  const nInteriorChange = (value) => setNInteriorState(value);
  const localidadChange = (value) => setLocalidadState(value);
  const coloniaChange = (value) => setColoniaState(value);
  const cpChange = (value) => setCPState(value);
  const seccionChange = (value) => setSeccionState(value);
  // Contacto
  const telCelularChange = (value) => setTelCelularState(value);
  const telFijoChange = (value) => setTelFijoState(value);
  const telMsjChange = (value) => setTelMsj(value);
  // Domicilio para INE
  const IneCoincideChange = (value) => setIneCoincideState(value);
  const IneCalleChange = (value) => setIneCalleState(value);
  const IneMunicipioChange = (value) => setIneMunicipioState(value);
  const IneNExteriorChange = (value) => setIneNExteriorState(value);
  const IneNInteriorChange = (value) => setIneNInteriorState(value);
  const IneLocalidadChange = (value) => setIneLocalidadState(value);
  const IneColoniaChange = (value) => setIneColoniaState(value);
  const IneCpChange = (value) => setIneCPState(value);

  useEffect(() => {
    if (selectPerson) {
      // Datos basicos
      claveElectorChange(selectPerson.claveElector);
      nombreChange(selectPerson.nombre);
      apellidoPaChange(selectPerson.apellidoPa);
      apellidoMaChange(selectPerson.apellidoMa);
      sexoChange(selectPerson.sexo);
      voluntarioChange(selectPerson.voluntario);
      // Datos de Nacimiento
      fechaNacChange(selectPerson.nacimiento.fecha);
      estadoNacChange(selectPerson.nacimiento.estado);
      calleChange(selectPerson.domicilio.calle);
      // Domicilio
      municipioChange(selectPerson.domicilio.municipio);
      localidadChange(selectPerson.domicilio.localidad);
      nExteriorChange(selectPerson.domicilio.nExterior);
      nInteriorChange(selectPerson.domicilio.nInterior);
      coloniaChange(selectPerson.domicilio.colonia);
      cpChange(selectPerson.domicilio.cp);
      // Contacto
      seccionChange(selectPerson.domicilio.seccion);
      telCelularChange(selectPerson.contacto.celular);
      telFijoChange(selectPerson.contacto.telefonoFijo);
      telMsjChange(selectPerson.contacto.telefonoMsj);
      // Domicilio para INE
      IneCoincideChange(selectPerson.direccionINE.coincide);
      IneCalleChange(selectPerson.direccionINE.calle);
      IneMunicipioChange(selectPerson.direccionINE.municipio);
      IneNExteriorChange(selectPerson.direccionINE.nExterior);
      IneNInteriorChange(selectPerson.direccionINE.nInterior);
      IneLocalidadChange(selectPerson.direccionINE.localidad);
      IneColoniaChange(selectPerson.direccionINE.colonia);
      IneCpChange(selectPerson.direccionINE.cp);
    }
  }, [selectPerson]);

  // Filtro de datos
  const clearForm = () => {
    // Datos basicos
    claveElectorChange("");
    nombreChange("");
    apellidoPaChange("");
    apellidoMaChange("");
    sexoChange("");
    // Datos de Nacimiento
    voluntarioChange("");
    fechaNacChange("");
    estadoNacChange("");
    // Domicilio
    calleChange("");
    municipioChange("");
    localidadChange("");
    nExteriorChange("");
    nInteriorChange("");
    coloniaChange("");
    cpChange("");
    seccionChange("");
    // Contacto
    telCelularChange("");
    telFijoChange("");
    telMsjChange("");
    // Domicilio para INE
    IneCoincideChange(true);
    IneCalleChange("");
    IneMunicipioChange("");
    IneNExteriorChange("");
    IneNInteriorChange("");
    IneLocalidadChange("");
    IneColoniaChange("");
    IneCpChange("");
  };

  const saveForm = () => {
    const user = {
      id: selectPerson.id,
      nombre: nombreState,
      apellidoPa: apellidoPaState,
      apellidoMa: apellidoMaState,
      sexo: sexoState,
      responsabilidad: selectPerson.responsabilidad,
      claveElector: claveElectorState,
      voluntario: voluntarioState,
      nacimiento: {
        fecha: fechaNacState,
        estado: estadoNacState,
      },
      domicilio: {
        calle: calleState,
        nExterior: nExteriorState,
        nInterior: nInteriorState,
        municipio: municipioState,
        localidad: localidadState,
        colonia: coloniaState,
        cp: cpState,
        seccion: seccionState,
      },
      contacto: {
        celular: telCelularState,
        telefonoFijo: telFijoState,
        telefonoMsj: telMsjState,
      },
      direccionINE: {
        coincide: ineCoincideState,
        calle: ineCalleState,
        nExterior: ineNExteriorState,
        nInterior: ineNInteriorState,
        municipio: ineMunicipioState,
        localidad: ineLocalidadState,
        colonia: ineColoniaState,
        cp: ineCpState,
      },
    };

    selectPersonChange(user);
  };

  return (
    <>
      {/* Para validar si haz seleccionado un Representante */}
      {selectPerson ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="row g-2 needs-validation"
        >
          <TextForm
            id="electorData"
            name="Clave Elector"
            value={claveElectorState}
            change={claveElectorChange}
            large={3}
            required={true}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="nombreData"
            name="Nombre(s)"
            value={nombreState}
            change={nombreChange}
            large={3}
            required={true}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="apellidoPaData"
            name="Apellido Paterno"
            value={apellidoPaState}
            change={apellidoPaChange}
            large={3}
            required={true}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="apellidoMaData"
            name="Apellido Materno"
            value={apellidoMaState}
            change={apellidoMaChange}
            large={3}
            required={false}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="fechaNacData"
            name="Fecha de Nacimiento"
            type="date"
            value={fechaNacState}
            change={fechaNacChange}
            large={4}
            required={true}
            col_type="md"
            extracss=""
          />
          <SelectForm
            id="sexoData"
            name="Sexo"
            value={sexoState}
            change={sexoChange}
            options={dataSexo}
            large={4}
            required={true}
            col_type="md"
            extracss=""
          />
          <SelectForm
            id="estadoData"
            name="Estado de Nacimiento"
            value={estadoNacState}
            change={estadoNacChange}
            options={dataestados_mexico}
            large={4}
            required={true}
            col_type="md"
            extracss=""
          />

          <TextDivider name="Domicilio donde vive" />

          <TextForm
            id="calleData"
            name="Calle"
            value={calleState}
            change={calleChange}
            large={4}
            required={true}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="nExtData"
            name="Número Ext."
            type="number"
            value={nExteriorState}
            change={nExteriorChange}
            large={2}
            required={true}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="nIntData"
            name="Número Int."
            type="number"
            value={nInteriorState}
            change={nInteriorChange}
            large={2}
            required={false}
            col_type="md"
            extracss=""
          />
          <SelectForm
            id="municipioData"
            name="Municipio Vive"
            value={municipioState}
            change={municipioChange}
            options={dataMunicipios}
            large={4}
            required={true}
            col_type="md"
            extracss=""
          />
          <SelectForm
            id="localidadData"
            name="Localidad"
            value={localidadState}
            change={localidadChange}
            options={dataLocalidad}
            large={4}
            required={true}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="coloniaData"
            name="Colonia"
            value={coloniaState}
            change={coloniaChange}
            large={4}
            required={true}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="cpData"
            name="CP"
            type="number"
            value={cpState}
            change={cpChange}
            large={2}
            required={true}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="seccionData"
            name="Sección Vota"
            value={seccionState}
            change={seccionChange}
            large={2}
            required={true}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="telCelData"
            name="Teléfono celular"
            value={telCelularState}
            change={telCelularChange}
            large={4}
            required={true}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="telFijoData"
            name="Teléfono fijo"
            value={telFijoState}
            change={telFijoChange}
            large={4}
            col_type="md"
            extracss=""
          />
          <TextForm
            id="telMsjData"
            name="Teléfono mensajes"
            value={telMsjState}
            change={telMsjChange}
            large={4}
            col_type="md"
            extracss=""
          />
          <CheckForm
            id="voluntarioData"
            name="Desea ser voluntario"
            value={voluntarioState}
            change={setVoluntarioState}
            extracss=""
          />

          <TextDivider name="Segmento" />

          <div className="gap-3 d-flex justify-content-start mt-2">
            <ButtonForm name="Mapache" color="primary" type="button" />
          </div>

          <TextDivider name="¿La dirección de la Credencial de Elector y donde vive son la misma?" />

          <div className="gap-3 d-flex justify-content-center mt-2">
            <CheckForm
              id="coincideTrueData"
              name="Si"
              type="radio"
              value={ineCoincideState}
              change={() => {
                IneCoincideChange(true);
              }}
              extracss=""
            />
            <CheckForm
              id="coincideFalseData"
              name="No"
              type="radio"
              value={ineCoincideState ? false : true}
              change={() => {
                IneCoincideChange(false);
              }}
              extracss=""
            />
          </div>

          {/* En caso de que no coincida la informacion de domicilio con la credencial */}
          {ineCoincideState ? (
            <></>
          ) : (
            <>
              <TextDivider name="Capture información de la credencial de elector" />

              <TextForm
                id="ineCalleData"
                name="Calle"
                value={ineCalleState}
                change={IneCalleChange}
                large={4}
                required={true}
                col_type="md"
                extracss=""
              />
              <TextForm
                id="ineNExtData"
                name="Número Ext."
                type="number"
                value={ineNExteriorState}
                change={IneNExteriorChange}
                large={2}
                required={true}
                col_type="md"
                extracss=""
              />
              <TextForm
                id="ineNIntData"
                name="Número Int."
                type="number"
                value={ineNInteriorState}
                change={IneNInteriorChange}
                large={2}
                required={false}
                col_type="md"
                extracss=""
              />
              <SelectForm
                id="ineMunicipioData"
                name="Municipio Vota"
                value={ineMunicipioState}
                change={IneMunicipioChange}
                options={dataMunicipios}
                large={4}
                required={true}
                col_type="md"
                extracss=""
              />
              <SelectForm
                id="ineLocalidadData"
                name="Localidad"
                value={ineLocalidadState}
                change={IneLocalidadChange}
                options={dataLocalidad}
                large={4}
                required={true}
                col_type="md"
                extracss=""
              />
              <TextForm
                id="ineColoniaData"
                name="Colonia"
                value={ineColoniaState}
                change={IneColoniaChange}
                large={4}
                required={true}
                col_type="md"
                extracss=""
              />
              <TextForm
                id="ineCpData"
                name="CP"
                type="number"
                value={ineCpState}
                change={IneCpChange}
                large={3}
                required={true}
                col_type="md"
                extracss=""
              />
            </>
          )}

          <div className="gap-3 d-flex justify-content-center mt-3 mb-4">
            <ButtonForm
              name="Limpiar"
              todo={clearForm}
              color="danger"
              type="button"
            />
            <ButtonForm
              name="Guardar"
              todo={saveForm}
              color="primary"
            />
          </div>
        </form>
      ) : (
        <div className="text-start d-flex align-items-center mt-4">
          <ExclamationSquareFill size={50} className="text-secondary" />
          <p className="h5 m-0 ms-3 text-secondary">
            No haz seleccionado ningun responsable
          </p>
        </div>
      )}
    </>
  );
}

// Estructura de los tipo Text
export const TextForm = ({
  id = "",
  name = "",
  value = "",
  change,
  large = 4,
  extracss = "",
  type = "text",
  required = false,
  col_type = "sm",
  disabled = false,
}) => {
  return (
    <div
      className={`form-floating col-${col_type}-${large} col-sm-6 ${extracss}`}
    >
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={(e) => {
          change(e.target.value);
        }}
        required={required}
        disabled={disabled}
      />
      <LabelForm id={id} required={required} name={name} />
    </div>
  );
};

// Estructura de los tipo Select
export const SelectForm = ({
  id = "",
  name = "",
  value = "",
  change,
  options,
  extracss = "",
  large = 4,
  col_type = "sm",
  required = false,
  disabled = false,
}) => {
  return (
    <div
      className={`form-floating col-${col_type}-${large} col-sm-6 ${extracss}`}
    >
      <select
        className="form-select"
        id={id}
        value={value}
        onChange={(e) => {
          change(e.target.value);
        }}
        required={required}
        disabled={disabled}
      >
        <option value="">Seleccionar </option>
        {options.map((mun) => (
          <option key={mun.id} value={mun.nombre}>
            {mun.nombre}
          </option>
        ))}
      </select>
      <LabelForm id={id} required={required} name={name} />
    </div>
  );
};

// Estructura de los tipo Check
export const CheckForm = ({
  id = "",
  name = "",
  type = "checkbox",
  value = false,
  change,
  required = false,
  disabled = false,
  extracss = "",
}) => {
  return (
    <div className="form-check d-flex justify-content-center">
      <input
        className="form-check-input"
        type={type}
        id={id}
        onChange={(e) => {
          change(e.target.checked);
        }}
        required={required}
        disabled={disabled}
        checked={value}
      />
      <label className="form-check-label ms-2" htmlFor={id}>
        {name}
      </label>
    </div>
  );
};

// Saber si es necesario o no (agregar el * de obligatorio)
export const LabelForm = ({ id = "", required = "false", name = "" }) => {
  return (
    <label htmlFor={id} className="ms-2">
      {required && <span className="text-danger fw-bold">* </span>}
      {name}
    </label>
  );
};

// Botones de Filtros
export const ButtonForm = ({
  name,
  todo,
  color,
  type = "submit",
  extracss = "",
  disabled = false,
}) => {
  return (
    <button
      className={`btn btn-${color} py-2 px-4 fw-medium text-uppercase ${extracss}`}
      type={type}
      onClick={todo}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

// Estructura de los subtitulos del Form
const TextDivider = ({ name }) => {
  return <div className="text-center fw-bold text-primary mt-3">{name}</div>;
};

export default FormForm;
