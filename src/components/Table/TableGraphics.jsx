import { useContext } from "react";
import { TableContext } from "../../context/TableContext";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";

function TableGraphics() {
  const { tableDataRow } = useContext(TableContext);

  // Los datos de las tablas son de ejemplo

  // Configuración del gráfico de barras
  const chartOptions_1 = {
    chart: {
      type: "column", // Configuración de barras verticales
    },
    title: {
      text: "Bingo",
    },
    xAxis: {
      categories: ["R1", "R2", "R3", "R4", "R5", "R6", "R7"], // Categorías en el eje X
    },
    yAxis: {
      title: {
        text: "Cantidad", // Etiqueta del eje Y
      },
    },
    series: [
      {
        name: "LNOM",
        data: [10, 15, 20, 5, 12, 8, 18], // Datos de LNOM para cada categoría
      },
      {
        name: "META",
        data: [5, 8, 12, 3, 6, 4, 9], // Datos de META para cada categoría
      },
      {
        name: "COMPROMISOS",
        data: [8, 12, 15, 4, 10, 7, 13], // Datos de COMPROMISOS para cada categoría
      },
      {
        name: "AVANCE",
        data: [6, 10, 13, 3, 8, 5, 11], // Datos de AVANCE para cada categoría
      },
      {
        name: "SIAN",
        data: [4, 6, 9, 2, 5, 3, 7], // Datos de SIAN para cada categoría
      },
      {
        name: "OTROS",
        data: [2, 4, 6, 1, 3, 2, 5], // Datos de OTROS para cada categoría
      },
    ],
  };

  // Configuración del gráfico de tiempo
  const chartOptions_2 = {
    chart: {
      type: "spline", // Configuración de línea de tiempo
    },
    title: {
      text: "Linea de tiempo Movilización Acumulativa",
    },
    xAxis: {
      categories: [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
      ], // Categorías en el eje X (tiempo)
    },
    yAxis: {
      title: {
        text: "Cantidad", // Etiqueta del eje Y
      },
    },
    series: [
      {
        name: "R1",
        data: [0, 15, 20, 25, 30, 35, 40, 35, 30, 25],
      },
      {
        name: "R2",
        data: [0, 16, 18, 22, 25, 27, 30, 28, 25, 20],
      },
      {
        name: "R3",
        data: [0, 11, 14, 18, 22, 25, 27, 25, 22, 18],
      },
      {
        name: "R4",
        data: [0, 20, 25, 30, 35, 38, 40, 38, 35, 30],
      },
      {
        name: "R5",
        data: [0, 8, 12, 16, 20, 22, 25, 22, 18, 15],
      },
      {
        name: "R6",
        data: [0, 2, 8, 15, 18, 30, 28, 25, 20, 16],
      },
      {
        name: "R7",
        data: [0, 6, 30, 32, 30, 28, 25, 20, 16, 12],
      },
    ],
  };

  return (
    <div className="row justify-content-center mt-4 mx-0">
      <CardsGraphics chartOptions={chartOptions_1} />
      <CardsGraphics chartOptions={chartOptions_2} />
    </div>
  );
}

function CardsGraphics({ name = "", chartOptions }) {
  // Habilitar las funciones de exportación del gráfico
  HighchartsExporting(Highcharts);
  return (
    <div className="card col-md-12 col-lg-6 m-0 p-0 border-0">
      <div className="card-body px-0">
        {/*  <h5 className="card-title">{name}</h5> */}
        <div className="card-text">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default TableGraphics;
