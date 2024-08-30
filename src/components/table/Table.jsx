import React from "react";

const Table = ({data}) => {
  return (
    <>
      <table className = "table table-dark">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingresos netos</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
