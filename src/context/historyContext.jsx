/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const historyContext = createContext();
historyContext.displayName = 'historyContext';

export const useHistoryContext = () => {
  const context = useContext(historyContext);
  if (!context) {
    throw new Error('useHistoryContext must be used within an HistoryProvider');
  }
  return context;
};

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState(
    localStorage.getItem('history') || [
      'Dhaka',
      'Mumbai',
      'Chennai',
      'Kolkata',
      'Delhi',
      'Bangalore',
    ],
  );

  const addHistory = (cityName) => {
    // Updating the history
    const updatedHistory = [cityName, ...history.slice(0, 9)];
    setHistory(updatedHistory);
    localStorage.setItem('history', JSON.stringify(updatedHistory));
  };

  const contextValue = { history, addHistory };

  return (
    <historyContext.Provider value={contextValue}>
      {children}
    </historyContext.Provider>
  );
};

export default HistoryProvider;
