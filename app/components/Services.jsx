import Link from "next/link"
import Image from "next/image"

const services = [
  {
    number: "01",
    title: "Residential Construction",
    description:
      "From ground-up custom homes to additions and expansions, we build residential properties that are structurally sound, beautifully finished, and delivered on time.",
    image: "/residentialConstruction.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Home Remodeling & Renovation",
    description:
      "Transform your existing space with expert remodeling — kitchens, bathrooms, full-home renovations, and everything in between. Clean work, zero surprises.",
    image: "/people-renovating-house-concept.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Commercial Build Outs",
    description:
      "Retail spaces, offices, and small commercial properties built to spec. We work with business owners and investors to deliver functional, code-compliant spaces on schedule.",
    image: "/beautiful-modern-building-modern-architecture.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Design Build Services",
    description:
      "One team, one contract, one vision. Our design-build approach streamlines your project from concept to completion — saving time, reducing costs, and eliminating miscommunication.",
    image: "/architects-working-project.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Structural & Concrete Work",
    description:
      "Foundations, slabs, retaining walls, and structural reinforcements built to last. We handle the work that holds everything together with precision and full code compliance.",
    image: "/round-saw-hands-builder-work-laying-paving-slabs.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Project Management & Consulting",
    description:
      "Already have a contractor? Need a second set of eyes? Our consulting services keep your build on track, on budget, and fully aligned with your vision from day one.",
    image: "/corporate-workers-looking-into-project-updates-timelines-boardroom.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="w-full bg-[#F4F4F4] py-32 flex justify-center">
      <div className="w-full max-w-[1200px] px-8 md:px-16">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-red-600" />
            <p className="text-red-600 text-[11px] font-bold tracking-[0.25em] uppercase">What We Do</p>
            <span className="w-8 h-[2px] bg-red-600" />
          </div>
          <h2 className="text-[#0A0A0A] text-4xl xl:text-[46px] font-extrabold leading-[1.1] tracking-tight">
            Construction Services Built <br /> for the Bay Area
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-[500px] mt-5">
            From foundation to finish, IronPeak delivers every phase of your
            project with precision, professionalism, and zero surprises.
          </p>
          <div className="w-14 h-[3px] bg-red-600 mt-6" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative min-h-[480px] flex flex-col justify-end overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay - gets lighter on hover to reveal image more */}
              <div className="absolute inset-0 bg-[#0A0A0A]/60 group-hover:bg-[#0A0A0A]/40 transition-colors duration-500" />

              {/* Top red accent line on hover */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-red-600 group-hover:w-full transition-all duration-500" />

              {/* Number watermark */}
              <span className="absolute top-5 right-6 text-[52px] font-extrabold text-white/10 leading-none select-none">
                {service.number}
              </span>

              {/* Content sits at the bottom */}
              <div className="relative z-10 flex flex-col gap-4 p-8">

                {/* Icon */}
                <div className="w-14 h-14 bg-red-600 flex items-center justify-center text-white shadow-lg">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-[18px] font-extrabold tracking-tight leading-snug">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-[2px] bg-red-600" />

                {/* Description - hidden by default, slides up on hover */}
                <p className="text-gray-300 text-[13.5px] leading-[1.85] max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
                  {service.description}
                </p>

                {/* Learn more */}
                <div className="flex items-center gap-2 text-white text-[11px] font-extrabold tracking-[0.15em] uppercase pt-2 border-t border-white/20 transition-colors duration-200 group-hover:text-red-400">
                  <span>Learn More</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}