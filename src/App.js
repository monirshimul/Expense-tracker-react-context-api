import React from 'react';
import Header from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpences } from './components/IncomeExpences'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState'



const state = {
  title: "Expense Tracker"
}

function App() {


  return (
    <div className="container">
      <GlobalProvider>
        <Header title={state.title} />

        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />

      </GlobalProvider>
    </div>

  );
}

export default App;
