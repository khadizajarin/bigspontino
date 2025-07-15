'use client';

const blocks = [
  { title: 'Brunch', image: '/images/brunch.jpg' },
  { title: 'Lunch', image: '/images/lunch.jpg' },
  { title: 'Dinner', image: '/images/dinner.jpg' },
  { title: 'Bar', image: '/images/bar.jpg' },
];

export default function MenuBlocks() {
  return (
    <section className="py-12 bg-white text-black">
      <h2 className="text-center text-3xl font-serif mb-6 uppercase">A Tavola</h2>
      <p className="max-w-2xl mx-auto text-sm text-center mb-10">
        {/* Add English or German menu description here */}
        The menu at Big Spuntino is a warm tribute to Italy’s culinary heritage...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {blocks.map((block) => (
          <div key={block.title} className="text-center">
            <img src={block.image} alt={block.title} className="rounded-lg w-full h-48 object-cover mb-2" />
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
