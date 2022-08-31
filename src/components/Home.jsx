import React from 'react';
import { Footer } from './Footer';
import { HowItWorks } from './HowItWorks';
import { Welcome } from './Welcome';

export const Home = () => {
  return (
    <div>
      <Welcome />
      <HowItWorks />
      <Footer />
    </div>
  );
}