import React, { useState, useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const TransactionForm = () => {
  const { addTransaction } = useContext(BudgetContext);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('income'); // Default to income

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount && description) {
      // Create a new transaction object
      const newTransaction = {
        id: Date.now(), // Unique ID based on time
        amount: parseFloat(amount),
        description,
        type,
      };

      // Add transaction to context
      addTransaction(newTransaction);

      // Reset form fields
      setAmount('');
      setDescription('');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md ">
      <h2 className="text-xl font-bold text-center mb-4">Add New Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter description"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Transaction Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md mt-4 hover:bg-blue-700"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
