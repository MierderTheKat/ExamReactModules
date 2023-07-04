import React from "react";
import { useRouteError } from "react-router-dom";
import { Octagon } from "react-bootstrap-icons";

// En caso de tener una ruta mal, o cualquier error, se redirigira aqui para mostrarlo.
function ErrorView() {
  // Capturamos el error
  const error = useRouteError();
  return (
    <div className="position-absolute top-0 start-0">
      <div className="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
        <div className="position-absolute top-50 start-50 translate-middle">
          <Octagon size={290} />
        </div>
        <h1 className="fs-1 fw-bold m-0">{error.status}</h1>
        <h2 className="fs-3 fw-semibold m-0">{error.statusText || error.message}</h2>
      </div>
    </div>
  );
}

export default ErrorView;
