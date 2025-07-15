'use client';

import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Il Menu', href: '/menu' },
  { label: 'Events', href: '/events' },
  { label: 'La Storia', href: '/history' },
  { label: 'Impressions', href: '/gallery' },
  { label: 'Contatto', href: '/contact' },
  { label: 'Jobs', href: '/jobs' },
];

export default function Header() {
  return (
    <header className="w-full bg-black/60 text-white px-20 py-4 fixed top-0 z-50 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
        <nav className="flex flex-wrap gap-4 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:underline uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-xs text-center md:text-right">
          Wed–Fri: 11:00 – 23:00 | Sat: 10:00 – 23:00 | Sun: 10:00 – 17:00
        </div>
      </div>
    </header>
  );
}
