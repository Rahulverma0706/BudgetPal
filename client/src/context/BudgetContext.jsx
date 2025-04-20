import React, { createContext, useState, useEffect } from 'react';

// Create context
export const BudgetContext = createContext();

// Provider component
export const BudgetProvider = ({ children }) => {
  // State for transactions and budget goals
  const [transactions, setTransactions] = useState([]);
  const [budgetGoal, setBudgetGoal] = useState(0);

  // Fetch from localStorage on component mount
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const storedBudgetGoal = JSON.parse(localStorage.getItem('budgetGoal')) || 0;
    setTransactions(storedTransactions);
    setBudgetGoal(storedBudgetGoal);
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('budgetGoal', JSON.stringify(budgetGoal));
  }, [transactions, budgetGoal]);

  // Function to add transaction
  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  // Function to delete transaction
  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
  };

  // Provide context value
  return (
    <BudgetContext.Provider
      value={{
        transactions,
        budgetGoal,
        setBudgetGoal,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
