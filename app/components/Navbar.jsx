import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Pages" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
]

export default function Navbar() {
  return (
   <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6 ">
  <header className="max-w-[1200px] w-full bg-[#111111]/95 backdrop-blur-md border border-white/10 shadow-2xl">
        <nav className="flex items-center justify-between h-[80px] px-6 ">

          {/* LEFT - Logo */}

          
          <Link href="/" className="flex-shrink-0 ml-4">
            <Image
              src="/logo.png"
              alt="IronPeak Construction Group"
                height={56}
               width={160}
              className="h-[56px] w-auto object-contain"
              priority
            />
          </Link>

          {/* CENTER - Nav Links */}
          <ul className="hidden md:flex flex-1 items-center justify-evenly list-none mx-6">
            {navLinks.map((link) => (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="relative flex items-center gap-1 text-[13px] font-medium text-gray-400 hover:text-white px-2 py-2 transition-colors duration-200 tracking-wide whitespace-nowrap"
                >
                  {link.label}
                  <svg
                    className="w-3 h-3 text-gray-600 group-hover:text-gray-400 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT - Phone + CTA */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0 mr-4">

            {/* <Link
              href="tel:4085550198"
              className="text-[12px] text-gray-400 hover:text-white tracking-wide transition-colors duration-200 whitespace-nowrap"
            >
              <span>(408) 555-0198</span>
            </Link> */}

            <span className="h-5 w-px bg-white/15" />

            <Link
              href="/contact"
              className="group relative flex items-center gap-3 bg-red-600 text-white text-[11px] font-extrabold tracking-[0.18em] uppercase px-6 py-4 overflow-hidden transition-all duration-200 shadow-lg shadow-red-600/30"
            >
              <span className="absolute inset-0 bg-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
              <span className="relative z-10 flex items-center gap-3">
                Get Free Quote
                <span className="flex items-center justify-center w-5 h-5 bg-white/20 group-hover:bg-white/30 transition-colors duration-200">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </span>
            </Link>

          </div>

          {/* Mobile - Hamburger */}
          <button className="md:hidden text-white p-2 mr-4">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </nav>
      </header>

    </div>
  )
}