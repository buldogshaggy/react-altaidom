import React from 'react';
import { Header } from './components/Header/Header';  // Импортируем Header
import { Hero } from './components/Hero/Hero';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};
