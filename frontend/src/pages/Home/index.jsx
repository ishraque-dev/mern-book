import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import { Header } from '../../components/Layout';
function Home() {
  usePageTitle('Home');
  return (
    <div className="w-full">
      <Header />
    </div>
  );
}

export default Home;
