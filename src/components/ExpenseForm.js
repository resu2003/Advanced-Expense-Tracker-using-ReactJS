import React, { useState } from 'react';

const ExpenseForm = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (!text || !amount) {
      alert('Please enter a description and amount');
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);

    setText('');
    setAmount('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Description</label>
        <input 
          type="text" 
          id="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter description..." 
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount <br />
          <small>(-100 = expense, 100 = income)</small>
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
      </div>
      <button className="btn">Add transaction</button>
    </form>
  );
};

export default ExpenseForm;
