'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Events() {
  return (
    <section className="relative bg-[#fdeee6] overflow-hidden py-20 px-4 sm:px-8 lg:px-0">
      {/* Left Static Reveal Image with overlay */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="hidden lg:block absolute left-0 top-0 h-full w-[30rem] z-0"
      >
        <Image
          src="/images/event1.png"
          alt="Left Decoration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </motion.div>

      {/* Right Static Reveal Image with overlay */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="hidden lg:block absolute right-0 top-0 h-full w-[30rem] z-0"
      >
        <Image
          src="/images/event2.png"
          alt="Right Decoration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </motion.div>

      {/* Main Content */}
      <main className="relative z-20 max-w-3xl mx-auto text-black">
        <h1 className="text-3xl font-serif uppercase mb-6 text-center">Eventi</h1>

        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2 italic">EN</h2>
            <p>
              <strong>La vita é bella</strong> ... and there is always a reason to celebrate.
              The Big Spuntino lives Italian hospitality and coming together – and not only
              in the day bar itself, but also in its own private or business premises.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 italic">DE</h2>
            <p>
              <strong>La vita é bella</strong> …und es gibt immer einen Grund um zu feiern.
              Das Big Spuntino lebt die italienische Gastfreundschaft...
            </p>
          </section>

          <section className="pt-4 border-t">
            <p>
              The Big Spuntino is already working diligently on spettacolo event series…
              <br />
              <strong>Soon to come – stay tuned.</strong>
            </p>
          </section>

          <div className="pt-6">
            <a
              href="mailto:mail@bigspuntino.de"
              className="inline-block border border-black px-6 py-2 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition rounded-full"
            >
              Contatto
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}
