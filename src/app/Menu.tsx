'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blocks = [
  { title: 'Brunch', image: '/images/brunch.png' },
  { title: 'Lunch', image: '/images/lunch.png' },
  { title: 'Dinner', image: '/images/dinner.png' },
  { title: 'Bar', image: '/images/bar.png' },
];

export default function Menu() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 bg-[#ffece3] text-black">
      <h2 className="text-center text-3xl font-serif mb-6 uppercase">A Tavola</h2>

      <p className="max-w-4xl mx-auto text-sm text-center mb-10">
        The menu at Big Spuntino is a warm tribute to Italy’s culinary heritage...
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {blocks.map((block, index) => (
          <div
            key={block.title}
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={block.image}
              alt={block.title}
              className="rounded-lg w-full h-48 object-cover mb-2"
            />
            <h3 className="uppercase tracking-wider text-sm">{block.title}</h3>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/menu.pdf"
          target="_blank"
          className="inline-block border px-6 py-2 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
        >
          View Full Menu (PDF)
        </a>
      </div>
    </section>
  );
}
