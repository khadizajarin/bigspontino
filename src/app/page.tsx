'use client';

import Image from 'next/image';
import { Menu, Facebook, Instagram } from 'lucide-react';
import Header from './Header';
import MenuBlocks from './MenuBlocks';
import EventsPage from './Events';
import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <Header />

      <div className="relative h-screen w-full text-white overflow-hidden">
      {/* Fixed background image visible ONLY within this section */}
        <div className="fixed top-0 left-0 w-full h-screen -z-20">
          <Image
            src="/images/bg-01.png"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4">
            <Menu className="w-6 h-6 text-white" />
            <h1 className="font-serif text-4xl tracking-[0.35em] uppercase">Basilico</h1>
            <div className="flex items-center gap-3 text-sm uppercase">
              <span className="tracking-widest">ENG</span>
              <div className="flex gap-2">
                <Facebook className="w-4 h-4" />
                <Instagram className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase mb-6">
              We have a <br /> table for you
            </h2>
            <button className="rounded-full border-2 border-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition">
              Make a <span className="underline">Reservation</span>
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-[5rem] z-10">
          {/* Centered borders */}
          <div className="absolute top-0 left-1/2 w-[90.5%] border-t-2 border-white -translate-x-1/2" />
          <div className="absolute bottom-0 left-1/2 w-[90.5%] border-b-2 border-white -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 h-[79.5%] border-l-2 border-white -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 h-[79.5%] border-r-2 border-white -translate-y-1/2" />

          {/* Reverse Quarter Circles with white borders */}
          {/* Top-left */}
          <div className="absolute top-0 left-0 w-20 h-20 border-b-2 border-r-2 border-white rounded-br-full z-10" />

          {/* Top-right */}
          <div className="absolute top-0 right-0 w-20 h-20 border-b-2 border-l-2 border-white rounded-bl-full z-10" />

          {/* Bottom-left */}
          <div className="absolute bottom-0 left-0 w-20 h-20 border-t-2 border-r-2 border-white rounded-tr-full z-10" />

          {/* Bottom-right */}
          <div className="absolute bottom-0 right-0 w-20 h-20 border-t-2 border-l-2 border-white rounded-tl-full z-10" />
        </div>






      </div>

      {/* Other sections */}
      <MenuBlocks />
      <EventsPage />
      <Contact/>
    </div>
  );
}
