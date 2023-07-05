import { useContext } from "react";
import { TableContext } from "../../context/TableContext";

function Graphics() {
  const { tableData } = useContext(TableContext);
  return (
    <div className="row gap-3 justify-content-center mt-4">
      <CardsGraphics name="Titulo 1"/>
      <CardsGraphics name="Titulo 2"/>
    </div>
  );
}

export default Graphics;

function CardsGraphics({name=""}) {
  return (
    <div className="card col-md-12 col-lg-5">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-text">
          <GraphicsTemplate/>
        </div>
      </div>
    </div>
  );
}

const GraphicsTemplate = ({dataTable}) => {
  return (
    <div>Plantilla de Grafica</div>
  )
}

