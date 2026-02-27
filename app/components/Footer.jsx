import Link from "next/link"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
]

const services = [
  "Residential Construction",
  "Home Remodeling & Renovation",
  "Commercial Build Outs",
  "Design Build Services",
  "Structural & Concrete Work",
  "Project Management & Consulting",
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] text-white">



      {/* Main footer body */}
    <div className="w-full max-w-[1200px] mx-auto px-8 md:px-16 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-5 h-[2px] bg-red-600" />
            <h4 className="text-white text-[11px] font-extrabold tracking-[0.2em] uppercase">Quick Links</h4>
          </div>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white text-[13.5px] transition-colors duration-200"
                >
                  <span className="w-0 h-[1.5px] bg-red-600 group-hover:w-4 transition-all duration-200" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

    
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-5 h-[2px] bg-red-600" />
            <h4 className="text-white text-[11px] font-extrabold tracking-[0.2em] uppercase">Services</h4>
          </div>
          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="group flex items-center gap-2 text-gray-400 hover:text-white text-[13.5px] transition-colors duration-200"
                >
                  <span className="w-0 h-[1.5px] bg-red-600 group-hover:w-4 transition-all duration-200" />
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-5 h-[2px] bg-red-600" />
            <h4 className="text-white text-[11px] font-extrabold tracking-[0.2em] uppercase">Contact</h4>
          </div>
          <ul className="flex flex-col gap-5">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />,
                icon2: <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                label: "123 Construction Way, San Jose, CA 95101",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                label: "(408) 555-0198",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                label: "info@ironpeakconstruction.com",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                label: "Mon–Fri: 7:00am – 6:00pm",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {item.icon}
                    {item.icon2}
                  </svg>
                </div>
                <span className="text-gray-400 text-[13px] leading-[1.7]">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
    <div className="border-t border-white/10">
    <div className="w-full max-w-[1200px] mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4">
        <span className="w-4 h-[2px] bg-red-600" />
        <p className="text-gray-500 text-[12px] tracking-wide">
            © {new Date().getFullYear()} IronPeak Construction Group. All rights reserved.
        </p>
        </div>
        <div className="flex items-center gap-6">
        {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
            <Link
            key={item}
            href="#"
            className="text-gray-500 hover:text-white text-[12px] tracking-wide transition-colors duration-200"
            >
            {item}
            </Link>
        ))}
        </div>
    </div>
    </div>

    </footer>
  )
}