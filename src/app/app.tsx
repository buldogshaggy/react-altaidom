import React from 'react';
import { Header } from './components/Header/Header';  // Импортируем Header

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main />
    </div>
  );
};
