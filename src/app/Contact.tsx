'use client';

import { Icon } from '@iconify/react';

export default function Contact() {
  return (
    <section className="relative bg-white py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left – Contact Info */}
        <div className="space-y-6 text-sm text-gray-800">
          <h2 className="text-3xl font-serif uppercase tracking-widest text-center md:text-left">
            Contatto
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Icon icon="mdi:store" className="text-black w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold">Big Spuntino</p>
                <p>Mühlenkamp 8<br />22303 Hamburg</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icon icon="mdi:phone" className="text-black w-5 h-5 mt-1" />
              <p>040 / 69 45 68 28</p>
            </div>

            <div className="flex items-start gap-3">
              <Icon icon="mdi:email-outline" className="text-black w-5 h-5 mt-1" />
              <a
                href="mailto:mail@bigspuntino.de"
                className="underline hover:text-black/80 transition"
              >
                mail@bigspuntino.de
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Icon icon="mdi:web" className="text-black w-5 h-5 mt-1" />
              <a
                href="https://bigspuntino.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black/80 transition"
              >
                bigspuntino.de
              </a>
            </div>
          </div>

          <div className="pt-6 text-xs text-gray-600">
            <p className="font-semibold mb-1">Opening Hours</p>
            <p>Wed–Fri: 11:00 – 23:00</p>
            <p>Sat: 10:00 – 23:00</p>
            <p>Sun: 10:00 – 17:00</p>
          </div>
        </div>

        {/* Right – Embedded Map */}
        <div className="w-full h-96 sm:h-96 overflow-hidden ">
          <iframe
            title="Big Spuntino Location"
            src="https://maps.google.com/maps?q=Mühlenkamp%208%2022303%20Hamburg&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
