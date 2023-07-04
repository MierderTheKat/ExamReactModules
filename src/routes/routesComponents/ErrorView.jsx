import { Octagon } from "react-bootstrap-icons";
import AnimatedTransition from "../AnimatedTransition";

// En caso de tener una ruta mal, o cualquier error, se redirigira aqui para mostrarlo.
function ErrorView() {
  return (
    <AnimatedTransition>
      <ErrorItem />
    </AnimatedTransition>
  );
}

export default ErrorView;

function ErrorItem() {
  return (
    <div className="position-absolute top-0 start-0">
      <div className="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
        <div className="position-absolute top-50 start-50 translate-middle">
          <Octagon size={290} />
        </div>
        <h1 className="fs-1 fw-bold m-0">404</h1>
        <h2 className="fs-3 fw-semibold m-0">Not Found</h2>
      </div>
    </div>
  );
}
