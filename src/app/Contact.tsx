export default function Contact() {
  return (
    <section className="bg-white text-black py-12 px-4">
      <h2 className="text-2xl font-serif uppercase mb-4 text-center">Contatto</h2>
      <div className="max-w-xl mx-auto text-sm space-y-2">
        <p>Big Spuntino</p>
        <p>Mühlenkamp 8<br />22303 Hamburg</p>
        <p>Tel: 040 / 69 45 68 28</p>
        <p>
          <a href="mailto:mail@bigspuntino.de" className="underline">
            mail@bigspuntino.de
          </a>
        </p>
        <p>
          <a href="https://bigspuntino.de" className="underline" target="_blank">
            bigspuntino.de
          </a>
        </p>
        <p className="mt-6 text-xs">
          Opening Hours:<br />
          Wed–Fri: 11:00 – 23:00<br />
          Sat: 10:00 – 23:00<br />
          Sun: 10:00 – 17:00
        </p>
      </div>
    </section>
  );
}
