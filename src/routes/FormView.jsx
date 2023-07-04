import { FormContextProvider } from "../context/FormContext";
import ModalView from "../components/Form/FormFilter";
import FormForm from "../components/Form/FormForm";

function FormView() {
  return (
    <FormContextProvider>
      <ModalView />
      <FormForm />
    </FormContextProvider>
  );
}

export default FormView;
