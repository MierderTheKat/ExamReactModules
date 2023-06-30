import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export const FormFilterCard = () => {
  const { data } = useContext(FormContext);

  return data.map((user) => (
    <div key={user.id} className="card mb-2">
      <div className="card-body">
        <h4 className="card-title">Nombre: {user.nombre}</h4>
        <p className="card-text">Celular: {user.celular}</p>
        <p className="card-text">Responsabilidad: {user.responsabilidad}</p>
        <p className="card-text">Municipio: {user.municipio}</p>
        <p className="card-text">Sección: {user.seccion}</p>
      </div>
    </div>
  ));

};

function FormOtro() {
  return <div>FormOtro</div>;
}

export default FormOtro;
