import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const BalanceCard = () => {
  const { transactions } = useContext(BudgetContext);

  // Calculate total income and expense
  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = income - expense;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center">Balance Overview</h2>

      <div className="flex justify-between mb-2">
        <div className="text-sm text-gray-600">Income</div>
        <div className="text-sm text-green-600">
          ₹{income.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </div>
      </div>

      <div className="flex justify-between mb-2">
        <div className="text-sm text-gray-600">Expense</div>
        <div className="text-sm text-red-600">
          ₹{expense.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </div>
      </div>

      <div className="flex justify-between mt-4 border-t pt-2">
        <div className="text-lg font-semibold">Balance</div>
        <div
          className={`text-lg font-semibold ${
            balance >= 0 ? 'text-green-600' : 'text-red-600'
          }`}
        >
          ₹{balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
