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
} from "@mui/icons-material";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
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
              <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium">Repair Services</Link>
              <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium">Accessories</Link>
              <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium">Contact Us</Link>
            </nav>

            <div className="hidden md:flex items-center">
              <a href="tel:+1234567890" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <PhoneIcon className="mr-2 -ml-1 h-5 w-5" />
                Call Now
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
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm">
                Get a Quote
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
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white">
                <PhoneIcon style={{ fontSize: 80 }} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smartphones</h3>
                <p className="text-gray-600 mb-4">iPhone, Samsung, Google Pixel, and more. Screen replacement, battery swaps, and charging port repairs.</p>
                <Link href="#" className="text-blue-600 font-semibold hover:text-blue-800">Learn more &rarr;</Link>
              </div>
            </div>

            {/* Laptops */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white">
                <LaptopIcon style={{ fontSize: 80 }} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Laptops &amp; MacBooks</h3>
                <p className="text-gray-600 mb-4">Screen repair, keyboard replacement, memory upgrades, data recovery, and virus removal.</p>
                <Link href="#" className="text-blue-600 font-semibold hover:text-blue-800">Learn more &rarr;</Link>
              </div>
            </div>

            {/* Tablets */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white">
                <TabletIcon style={{ fontSize: 80 }} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">iPads &amp; Tablets</h3>
                <p className="text-gray-600 mb-4">Cracked screens, battery issues, and software problems for all iPad models and Android tablets.</p>
                <Link href="#" className="text-blue-600 font-semibold hover:text-blue-800">Learn more &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="KV Mobile Logo"
              width={150}
              height={50}
              className="h-10 w-auto object-contain brightness-0 invert mb-4"
              unoptimized
            />
            <p className="text-gray-400 mt-2">
              Your trusted partner for all mobile and laptop repairs. Fast, reliable, and professional.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="#services" className="hover:text-white">Services</Link></li>
              <li><Link href="#" className="hover:text-white">Store Policies</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>?? 123 Tech Street, Downtown</li>
              <li>?? (123) 456-7890</li>
              <li>?? info@kvmobile.com</li>
              <li>?? Mon - Sat: 9 AM - 7 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KV Mobile. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
