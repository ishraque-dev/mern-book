import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import { Header, LeftSidePanel } from '../../components/Layout';
function Home() {
  usePageTitle('Home');
  return (
    <div className="w-full">
      <Header />
      <main className="flex w-full justify-between p-5 ">
        <LeftSidePanel />

        <div className="w-50% ">middle</div>
        <div className="w-[25%]">right</div>
      </main>
    </div>
  );
}

export default Home;
