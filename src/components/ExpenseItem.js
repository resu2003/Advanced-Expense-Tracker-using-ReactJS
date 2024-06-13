import React, { useState } from 'react';

const ExpenseItem = ({ transaction, deleteTransaction, editTransaction }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(transaction.text);
  const [editedAmount, setEditedAmount] = useState(transaction.amount);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTransaction({ ...transaction, text: editedText, amount: editedAmount });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(transaction.text);
    setEditedAmount(transaction.amount);
  };

  const handleChangeText = (e) => {
    setEditedText(e.target.value);
  };

  const handleChangeAmount = (e) => {
    setEditedAmount(e.target.value);
  };

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={handleChangeText} />
          <input type="number" value={editedAmount} onChange={handleChangeAmount} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{transaction.text}</span>
          <span>{transaction.amount}</span>
          <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">Delete</button>
          <button onClick={handleEdit} className="edit-btn">Edit</button>
        </>
      )}
    </li>
  );
};

export default ExpenseItem;
