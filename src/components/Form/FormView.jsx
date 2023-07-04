import { FormContextProvider } from "../../context/FormContext";
import ModalView from "./FormFilter";
import FormForm from "./FormForm";

function FormView() {
  return (
    <FormContextProvider>
      <ModalView />
      <FormForm />
    </FormContextProvider>
  );
}

export default FormView;
