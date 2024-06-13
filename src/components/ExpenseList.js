import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ transactions, deleteTransaction, editTransaction }) => {
  return (
    <ul id="list" className="list">
      {transactions.map(transaction => (
        <ExpenseItem key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} editTransaction={editTransaction} />
      ))}
    </ul>
  );
};

export default ExpenseList;
