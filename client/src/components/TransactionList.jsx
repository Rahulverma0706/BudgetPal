import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(BudgetContext);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full overflow-y-auto">
      <h2 className="text-xl font-bold text-center mb-4">Transaction History</h2>
      <ul>
        {transactions.length === 0 ? (
          <p className="text-center text-gray-500">No transactions yet</p>
        ) : (
          transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div className="flex items-center">
                <span
                  className={`font-semibold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {transaction.description}
                </span>
                <span
                  className={`ml-4 ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  ₹{transaction.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <button
                onClick={() => deleteTransaction(transaction.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
