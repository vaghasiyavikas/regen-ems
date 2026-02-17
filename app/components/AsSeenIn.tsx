import Image from "next/image";

export default function AsSeenIn() {
  return (
    <section className="bg-black border-b border-gray-900" style={{ padding: '0' }}>
      <div>
        <h3 className="text-white text-center text-xl font-bold tracking-[0.3em] uppercase" style={{ marginBottom: '3rem' }}>As Seen In</h3>
        <div className="flex flex-wrap items-center justify-center gap-24 md:gap-40">
          <div className="relative w-40 h-16">
            <Image src="/images/forbes.webp" alt="Forbes" fill className="object-contain" />
          </div>
          <div className="relative w-36 h-16">
            <Image src="/images/nike.webp" alt="Nike" fill className="object-contain" />
          </div>
          <div className="relative w-48 h-16">
            <Image src="/images/telegraph.webp" alt="The Telegraph" fill className="object-contain" />
          </div>
          <div className="relative w-40 h-16">
            <Image src="/images/skysports.avif" alt="Sky Sports" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
