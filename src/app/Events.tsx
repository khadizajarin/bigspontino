export default function EventsPage() {
  return (
    <main className="bg-white text-black px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-serif uppercase mb-6 text-center">Eventi</h1>

      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2 italic">EN</h2>
          <p>
            <strong>La vita é bella</strong> ... and there is always a reason to celebrate.
            The Big Spuntino lives Italian hospitality and coming together – and not only
            in the day bar itself, but also in its own private or business premises. Get in
            touch with our team to discuss your tailor-made events for the most special
            moments of pleasure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 italic">DE</h2>
          <p>
            <strong>La vita é bella</strong> …und es gibt immer einen Grund um zu feiern.
            Das Big Spuntino lebt die italienische Gastfreundschaft und das Zusammenkommen
            – und das nicht nur in der Tagesbar selbst, sondern auch in eigenen privaten
            oder geschäftlichen Räumlichkeiten. Nehmen Sie Kontakt mit unserem Team auf, um
            Ihre maßgeschneiderten Veranstaltungen für die besondersten Genussmomente zu
            besprechen.
          </p>
        </section>

        <section className="pt-4 border-t">
          <p>
            The Big Spuntino is already working diligently on spettacolo event series – at
            aperitif hour, dinner time, and of course, fantastico brunch. <br />
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
  );
}
