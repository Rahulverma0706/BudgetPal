import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const BudgetGoals = () => {
  const { budgetGoal, setBudgetGoal, transactions } = useContext(BudgetContext);
  const [newGoal, setNewGoal] = useState(budgetGoal);

  // Calculate progress toward goal
  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = income - expense;
  const progress = (balance / newGoal) * 100;

  // Handle goal submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newGoal > 0) {
      setBudgetGoal(newGoal);
    } else {
      alert('Please enter a valid goal amount');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-6 mx-4">
      <h2 className="text-xl font-bold text-center mb-4">Set Your Budget Goal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Budget Goal</label>
          <input
            type="number"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your goal"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md mt-4 hover:bg-blue-700"
        >
          Set Goal
        </button>
      </form>

      {budgetGoal > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Current Goal: ${budgetGoal.toFixed(2)}</h3>
          <div className="my-2">
            <div className="text-sm text-gray-600">Progress</div>
            <div className="bg-gray-200 rounded-full h-2.5 w-full">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="mt-2 text-sm">{progress.toFixed(2)}% toward goal</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetGoals;
