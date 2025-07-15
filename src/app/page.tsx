'use client';

import Image from 'next/image';

import Header from './Header';
import Menu from './Menu';
import Events from './Events';
import Contact from './Contact';
import Banner from './Banner';

export default function Home() {
  return (
    <div>
      {/* <Header /> */}

      <Banner></Banner>
      <Menu />
      <Events />
      <Contact/>
    </div>
  );
}
