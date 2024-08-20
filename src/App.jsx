import './App.css'
import PracticaUno from './components/practicaUno/PracticaUno'
//import Table from './components/table/Table';

import React from 'react'

const App = () => {
  return (
    <>
      <PracticaUno/>
    </>
  )
}

export default App


/* const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];
  const totalIncome = netIncomes.reduce((accum, item) => accum + item.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <Table data={netIncomes} />
      <p>Promedio de ingresos netos: {averageIncome.toFixed(2)}</p>
    </div>
  );
};


export default App */