import * as XLSX from "xlsx";

function TabEx() {
  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Obtener encabezados de columna
      const headers = jsonData.shift();

      // Crear objeto para almacenar los datos por columnas
      const columnData = {};
      for (let i = 0; i < headers.length; i++) {
        columnData[headers[i]] = [];
      }

      // Guardar los datos por columnas
      for (const row of jsonData) {
        for (let i = 0; i < headers.length; i++) {
          columnData[headers[i]].push(row[i]);
        }
      }

      // Exportar los datos en formato JSON
      exportData(columnData);
    };

    reader.readAsArrayBuffer(file);
  };

  const exportData = (data) => {
    const jsonString = JSON.stringify(data);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "datos.json";
    link.click();
  };

  return <input type="file" onChange={handleFile} />;
}

export default TabEx;
