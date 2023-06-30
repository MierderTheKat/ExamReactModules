import { FormContextProvider } from "../../context/FormContext";
import FormOtro, { FormFilterCard } from "./FormFilter";

function FormView() {
  return (
    <FormContextProvider>
      <FormFilterCard />
      <FormOtro />
    </FormContextProvider>
  );
}

export default FormView;
