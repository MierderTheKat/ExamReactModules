import { FormContextProvider } from "../../context/FormContext";
import AnimatedTransition from "../AnimatedTransition";
import ModalView from "../../components/Form/FormFilter";
import FormForm from "../../components/Form/FormForm";

function FormView() {
  return (
    <AnimatedTransition>
      <FormContextProvider>
        <ModalView />
        <FormForm />
      </FormContextProvider>
    </AnimatedTransition>
  );
}

export default FormView;
