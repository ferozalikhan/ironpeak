import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section className="w-full bg-white py-32 flex justify-center items-center">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* LEFT - Image */}
        <div className="relative flex-shrink-0 w-full lg:w-[480px] h-[400px] lg:h-[520px]">

          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/about.jpg"
              alt="IronPeak Construction Team"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -right-6 bg-red-600 text-white px-8 py-6 shadow-2xl">
            <p className="text-4xl font-extrabold leading-none">10+</p>
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase mt-2 text-red-200">
              Years of Excellence
            </p>
          </div>

          {/* Red accent border */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-600" />

        </div>

        {/* RIGHT - Content */}
        <div className="flex flex-col gap-7 flex-1 min-w-0">

          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-red-600" />
            <p className="text-red-600 text-[11px] font-bold tracking-[0.25em] uppercase">
              About IronPeak Construction
            </p>
          </div>

          {/* Headline - no forced breaks, flows naturally */}
          <h2 className="text-[#0A0A0A] text-4xl xl:text-[42px] font-extrabold leading-[1.1] tracking-tight w-full">
            Bay Area's Trusted Construction Partner Since 2014
          </h2>

          {/* Divider */}
          <div className="w-14 h-[3px] bg-red-600" />

          {/* Body text */}
          <p className="text-gray-500 text-[15px] leading-[1.9]">
            IronPeak Construction Group is a full-service construction company
            delivering high-quality residential and small commercial projects
            across the Bay Area. We are known for dependable timelines, clear
            communication, and solid workmanship.
          </p>

          <p className="text-gray-500 text-[15px] leading-[1.9]">
            Our primary clients are homeowners, real estate investors, and small
            business owners who want reliable construction without surprises.
            We position ourselves as a modern, no-nonsense builder that values
            structure, planning, and execution.
          </p>

          {/* Feature points */}
          <div className="grid grid-cols-2 gap-4 my-2">
            {[
              "Dependable Timelines",
              "Clear Communication",
              "Licensed & Insured",
              "Serving the Full Bay Area",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-4 h-4 bg-red-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[13px] font-semibold text-gray-700 tracking-wide">{item}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-100" />

          {/* CTA */}
          <div className="flex items-center gap-6 mt-2">
            <Link
              href="/about"
              className="group relative flex items-center gap-3 bg-[#0A0A0A] text-white text-[11px] font-extrabold tracking-[0.18em] uppercase px-8 py-4 overflow-hidden transition-all duration-200"
            >
              <span className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
              <span className="relative z-10 flex items-center gap-3">
                Discover More
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </Link>

            {/* Phone CTA */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-400 tracking-wide uppercase">Call Us Today</p>
                <p className="text-[14px] font-bold text-[#0A0A0A] tracking-wide mt-0.5">(408) 555-0198</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}