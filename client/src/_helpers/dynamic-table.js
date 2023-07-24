import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const DynamicTable = () => {
  const products = [
    // our products array
  ];

  return (
    <div className="table-wrapper">
      <h2 className="table-name">PrimeReact data table</h2>

      <DataTable value={products} responsiveLayout="scroll">
        <Column field="name" header="Name"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column field="rating" header="Rating"></Column>
      </DataTable>
    </div>
  );
};


export default DynamicTable;