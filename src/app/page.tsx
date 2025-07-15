'use client';

import Image from 'next/image';
import { Menu, Facebook, Instagram } from 'lucide-react';
import Header from './Header';
import MenuBlocks from './MenuBlocks';
import EventsPage from './Events';
import Contact from './Contact';
import Banner from './Banner';

export default function Home() {
  return (
    <div>
      <Header />

      <Banner></Banner>
      <MenuBlocks />
      <EventsPage />
      <Contact/>
    </div>
  );
}
