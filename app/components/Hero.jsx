import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0A0A0A] overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.jpg"
          alt="IronPeak Construction"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content - matches navbar px-10 + inner px-10 = 80px from edge */}
      <div className="relative z-10 w-full flex justify-center px-6 md:px-10 min-h-screen">
        <div className="w-full max-w-[1200px] px-4 md:px-10 flex flex-col justify-center">

          <div className="max-w-[580px] flex flex-col gap-7 pt-20">

            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-red-600" />
              <p className="text-red-500 text-[11px] font-bold tracking-[0.25em] uppercase">
                Delivering Quality Construction
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-white text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
              Built With <br />
              Strength And <br />
              Precision
            </h1>

            {/* Red accent bar */}
            <div className="w-14 h-[3px] bg-red-600" />

            {/* Subtext */}
            <p className="text-gray-300 text-[15px] leading-[1.8] max-w-[420px]">
              IronPeak Construction Group delivers high-quality residential and
              commercial projects across the Bay Area — on time, on budget, and
              built to last.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 mt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-[12px] font-bold tracking-[0.15em] uppercase px-7 py-4 transition-all duration-200"
              >
                Request a Quote
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </Link>

              <Link
                href="/services"
                className="flex items-center gap-2 border border-white/30 hover:border-white hover:bg-white/5 text-white text-[12px] font-bold tracking-[0.15em] uppercase px-7 py-4 transition-all duration-200"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 mt-4 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <p className="text-white text-3xl font-extrabold leading-none">10+</p>
                <p className="text-gray-500 text-[10px] tracking-[0.12em] uppercase mt-1">Years Experience</p>
              </div>
              <span className="w-px h-10 bg-white/15" />
              <div className="flex flex-col gap-1">
                <p className="text-white text-3xl font-extrabold leading-none">300+</p>
                <p className="text-gray-500 text-[10px] tracking-[0.12em] uppercase mt-1">Projects Completed</p>
              </div>
              <span className="w-px h-10 bg-white/15" />
              <div className="flex flex-col gap-1">
                <p className="text-white text-3xl font-extrabold leading-none">100%</p>
                <p className="text-gray-500 text-[10px] tracking-[0.12em] uppercase mt-1">Client Satisfaction</p>
              </div>
            </div>

          </div>


        </div>
      </div>

    </section>
  )
}