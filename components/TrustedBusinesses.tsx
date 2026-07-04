const brands = [
  'Chicken Republic',
  'ShopRite',
  'MedPlus',
  'Zara Lagos',
  'Domino\'s',
  'Justrite',
  'HealthPlus',
  'Mr Biggs',
];

export default function TrustedBusinesses() {
  const track = [...brands, ...brands];
  return (
    <section className="bg-cream py-14 border-b border-black/5">
      <p className="text-center text-xs font-semibold tracking-widest text-gray uppercase mb-8">
        Trusted by businesses across Lagos
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track gap-16 px-8">
          {track.map((brand, i) => (
            <span
              key={i}
              className="font-heading font-600 text-xl text-ink/30 whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
