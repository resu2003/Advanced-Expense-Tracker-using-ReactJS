import React, { useState, useEffect } from 'react';
import './style.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    const calculateAmounts = () => {
      const amounts = transactions.map(transaction => Number(transaction.amount));
      const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
      const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0)
        .toFixed(2);
      const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => acc + item, 0) * -1
      ).toFixed(2);
      
      setBalance(total);
      setIncome(income);
      setExpense(expense);
    };

    calculateAmounts();
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const editTransaction = (updatedTransaction) => {
    setTransactions(transactions.map(transaction => transaction.id === updatedTransaction.id ? updatedTransaction : transaction));
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="header">
        <img src="https://i.ibb.co/jfScDTC/budget.png" alt="Expense Tracker" />
        <div className="balance-container">
          <h2>Your Balance</h2>
          <h2 id="balance" className="balance">₹{balance}</h2>
        </div>
      </div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+₹{income}</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p id="money-minus" className="money minus">-₹{expense}</p>
        </div>
      </div>
      <h3>History</h3>
      <ExpenseList transactions={transactions} deleteTransaction={deleteTransaction} editTransaction={editTransaction} />
      <h3>Add new transaction</h3>
      <ExpenseForm addTransaction={addTransaction} />
    </div>
  );
};

export default App;
