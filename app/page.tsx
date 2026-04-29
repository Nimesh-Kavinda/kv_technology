"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone as PhoneIcon,
  Laptop as LaptopIcon,
  Tablet as TabletIcon,
  AccessTime as AccessTimeIcon,
  Build as BuildIcon,
  CheckCircle as CheckCircleIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans relative">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="KV Mobile Logo"
                  width={180}
                  height={60}
                  className="h-14 w-auto object-contain"
                  unoptimized
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="#" className="text-gray-900 border-b-2 border-blue-600 px-1 pt-1 text-sm font-medium">Home</Link>
              <Link href="#services" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium">Repair Services</Link>
              <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium">Accessories</Link>
              <Link href="#contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium">Contact Us</Link>
            </nav>

            <div className="hidden md:flex items-center">
              <a href="tel:0778525115" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <PhoneIcon className="mr-2 -ml-1 h-5 w-5" />
                0778525115
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/cover.png"
              alt="Store Cover"
              fill
              className="w-full h-full object-cover opacity-40"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-2xl">
              Expert Mobile &amp; Laptop Repair
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-xl">
              Professional, quick, and reliable repair services for all your devices. From shattered screens to battery replacements, we've got you covered. Same day repair on most devices!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 shadow-sm">
                View Services
              </a>
              <a href="tel:0778525115" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm">
                Call Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Features / Why Choose Us */}
        <div className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <AccessTimeIcon fontSize="large" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Fast Turnaround</h3>
                <p className="mt-2 text-sm text-gray-500">Most repairs are completed within 1-2 hours while you wait.</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <BuildIcon fontSize="large" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Expert Technicians</h3>
                <p className="mt-2 text-sm text-gray-500">Our staff is highly trained and experienced in repairing all major brands.</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <CheckCircleIcon fontSize="large" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Warranty Included</h3>
                <p className="mt-2 text-sm text-gray-500">We stand by our work with a 90-day warranty on all parts and labor.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Services Section */}
        <div id="services" className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What We Repair</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We fix a wide range of devices with premium quality parts.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Mobile Phones */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=500&q=80" 
                  alt="Smartphone Repair" 
                  fill 
                  className="object-cover" 
                  unoptimized
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <PhoneIcon className="text-blue-600" /> Smartphones
                </h3>
                <p className="text-gray-600">iPhone, Samsung, Google Pixel, and more. Screen replacement, battery swaps, and charging port repairs.</p>
              </div>
            </div>

            {/* Laptops */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80" 
                  alt="Laptop Repair" 
                  fill 
                  className="object-cover" 
                  unoptimized
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <LaptopIcon className="text-gray-700" /> Laptops &amp; MacBooks
                </h3>
                <p className="text-gray-600">Screen repair, keyboard replacement, memory upgrades, data recovery, and virus removal.</p>
              </div>
            </div>

            {/* Tablets */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80" 
                  alt="Tablet Repair" 
                  fill 
                  className="object-cover" 
                  unoptimized
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <TabletIcon className="text-indigo-600" /> iPads &amp; Tablets
                </h3>
                <p className="text-gray-600">Cracked screens, battery issues, and software problems for all iPad models and Android tablets.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 border-t-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="bg-white inline-block p-2 rounded-lg mb-4">
              <Image
                src="/logo.png"
                alt="KV Mobile Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
                unoptimized
              />
            </div>
            <p className="text-gray-400 mt-2">
              Your trusted partner for all mobile and laptop repairs. Fast, reliable, and professional.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Store Policies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">??</span> 
                <span>Pallegama, Gnathuna, Kegalle</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">??</span> 
                <span>0778525115 / 0741718855</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">??</span> 
                <a href="mailto:nimeshkavindakarunasinghe@gmail.com" className="hover:text-white break-all">nimeshkavindakarunasinghe@gmail.com</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">??</span> 
                <span>Open: 24/7</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KV Mobile. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/94778525115" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 z-50 flex items-center justify-center animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon style={{ fontSize: 32 }} />
      </a>
      
      <style dangerouslySetInnerHTML={{__html: `
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}} />
    </div>
  );
}
