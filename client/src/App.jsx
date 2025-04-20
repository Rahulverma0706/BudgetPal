import React from 'react';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100 p-4">
      <Header/>

      {/* Top Section: Balance + Form */}
      <div className="flex-none mb-4">
        <div className="flex gap-4">
          <div className="w-1/2 bg-white shadow-md rounded-2xl p-6">
            <BalanceCard />
          </div>
          <div className="w-1/2 bg-white shadow-md rounded-2xl p-6">
            <TransactionForm />
          </div>
        </div>
      </div>

      {/* Bottom Section: Scrollable Transaction History */}
      <div className="flex-1 overflow-hidden">
        <div className="bg-white shadow-md rounded-2xl h-full overflow-y-auto ">
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default App;
