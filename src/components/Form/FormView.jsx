import { FormContextProvider } from "../../context/FormContext";
import FilterUsersCard from "./FormFilter";

function FormView() {
  return (
    <FormContextProvider>
      <ModalView />
    </FormContextProvider>
  );
}

export default FormView;

// Este componente aun no lo refactorizo, solo es una prueba para abrir el modal

const ModalView = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="input-group mb-3 mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del responsable"
              aria-label="Nombre del responsable"
              disabled
            />
            {/* <!-- Boton para abrir --> */}
            <button
              className="btn btn-warning"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#filterModal"
            >
              ICON
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal modal-xl fade"
        id="filterModal"
        tabindex="-1"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="filterModalLabel">
                Busqueda de Responsable
              </h1>
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
