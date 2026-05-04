"use client";

import {
  useState
}

from "react";
import Image from "next/image";
import Link from "next/link";

import {
  motion
}

from "framer-motion";

import {
  Phone as PhoneIcon,
  Laptop as LaptopIcon,
  Tablet as TabletIcon,
  AccessTime as AccessTimeIcon,
  Build as BuildIcon,
  CheckCircle as CheckCircleIcon,
  WhatsApp as WhatsAppIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  LocationOn as LocationOnIcon,
  Email as EmailIcon,
  Star as StarIcon,
  ExpandMore as ExpandMoreIcon,
}

from "@mui/icons-material";

// Animation Variants
const fadeInUp= {
  hidden: {
    opacity: 0, y: 40
  }

  ,
  visible: {

    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, ease: "easeOut"as const
    }
  }
}

;

const staggerContainer= {
  hidden: {
    opacity: 0
  }

  ,
  visible: {

    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

;

const scaleIn= {
  hidden: {
    opacity: 0, scale: 0.9
  }

  ,
  visible: {

    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}

;

const DividerSlide = () => (
  <div className="w-full overflow-hidden flex justify-center py-10 relative z-20">
    <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="h-1 w-full max-w-4xl bg-gradient-to-r from-transparent via-blue-400 to-transparent relative">
      <motion.div initial={{ left: "0%", opacity: 0 }} whileInView={{ left: "100%", opacity: 0 }} animate={{ left: ["0%", "50%", "100%"], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_12px_rgba(37,99,235,1)]" />
    </motion.div>
  </div>
);

const DividerSplit = () => (
  <div className="w-full overflow-hidden flex justify-center items-center py-10 relative z-20">
    <motion.div initial={{ opacity: 0, width: 0 }} whileInView={{ opacity: 1, width: "100%" }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 1, ease: "easeInOut" }} className="h-1 max-w-4xl bg-gradient-to-r from-transparent via-indigo-400 to-transparent relative flex justify-between items-center">
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.5, duration: 0.5 }} className="w-4 h-4 rounded-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,1)]" />
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="w-4 h-4 rounded-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,1)]" />
    </motion.div>
  </div>
);

const DividerBounce = () => (
  <div className="w-full flex justify-center items-center py-10 gap-3 relative z-20">
    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.6 }} className="h-1 flex-1 max-w-xs bg-gradient-to-r from-transparent to-blue-500 rounded-r-full" />
    {[0, 1, 2].map((i) => (
      <motion.div key={i} initial={{ scale: 0 }} whileInView={{ scale: [0, 1.5, 1] }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: i * 0.15, duration: 0.5 }} className="w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
    ))}
    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.6 }} className="h-1 flex-1 max-w-xs bg-gradient-to-l from-transparent to-blue-500 rounded-l-full" />
  </div>
);

const DividerFade = () => (
  <div className="w-full flex justify-center py-10 relative z-20">
    <motion.div initial={{ opacity: 0, scaleY: 0 }} whileInView={{ opacity: 1, scaleY: 1 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.5 }} className="w-full max-w-3xl flex flex-col items-center gap-1">
       <motion.div initial={{ width: "20%" }} whileInView={{ width: "100%" }} transition={{ duration: 1, ease: "easeOut" }} className="h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
       <motion.div initial={{ width: "10%" }} whileInView={{ width: "70%" }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
       <motion.div initial={{ width: "5%" }} whileInView={{ width: "40%" }} transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50" />
    </motion.div>
  </div>
);

export default function Home() {
  const [mobileMenuOpen,
  setMobileMenuOpen]=useState(false);

  return (<div className="min-h-screen bg-gray-50 flex flex-col font-sans relative"> {
      /* Header */
    }

    <header className="bg-white shadow-sm border-b border-gray-200 relative z-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex justify-between items-center h-20"> {
      /* Logo and Name */
    }

    <motion.div initial= {
        {
        opacity: 0, x: -20
      }
    }

    animate= {
        {
        opacity: 1, x: 0
      }
    }

    transition= {
        {
        duration: 0.5
      }
    }

    className="flex-shrink-0 flex items-center"
    > <Link href="/"className="flex items-center"> <Image src="/logo.png"
    alt="KV Mobile Logo"

    width= {
      150
    }

    height= {
      50
    }

    className="h-10 sm:h-14 w-auto object-contain"

    unoptimized /> <span className="ml-2 font-bold text-xl text-gray-900 tracking-tight md:hidden"> KV Technology </span> </Link> </motion.div> {
      /* Desktop Navigation */
    }

    <motion.nav initial= {
        {
        opacity: 0, y: -10
      }
    }

    animate= {
        {
        opacity: 1, y: 0
      }
    }

    transition= {
        {
        duration: 0.5, delay: 0.2
      }
    }

    className="hidden md:ml-6 md:flex md:space-x-6"

    > <Link href="#"className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium transition-colors">Home</Link> <Link href="#services"className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium transition-colors">Services</Link> <Link href="#why-choose-us"className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium transition-colors">Why Us</Link> <Link href="#accessories"className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium transition-colors">Accessories</Link> <Link href="#testimonials"className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium transition-colors">Reviews</Link> <Link href="#faq"className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium transition-colors">FAQ</Link> <Link href="#contact"className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 border-b-2 px-1 pt-1 text-sm font-medium transition-colors">Contact</Link> </motion.nav> <motion.div initial= {
        {
        opacity: 0, x: 20
      }
    }

    animate= {
        {
        opacity: 1, x: 0
      }
    }

    transition= {
        {
        duration: 0.5
      }
    }

    className="hidden md:flex items-center"

    > <a href="tel:0778525115"className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:scale-105 tracking-wide"> <PhoneIcon className="mr-2 -ml-1 h-5 w-5"/> Call Now </a> </motion.div> {
      /* Mobile Buttons (Call + Menu) */
    }

    <div className="flex items-center space-x-2 md:hidden"> <a href="tel:0778525115"className="inline-flex items-center justify-center p-2 rounded-full text-blue-600 bg-blue-50 border border-blue-100 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"> <span className="sr-only">Call Now</span> <PhoneIcon className="h-5 w-5"aria-hidden="true"/> </a> <button type="button"
    className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
    aria-expanded="false"

    onClick= {
      ()=> setMobileMenuOpen( !mobileMenuOpen)
    }

    > <span className="sr-only">Open main menu</span> {
      mobileMenuOpen ? (<CloseIcon className="block h-6 w-6"aria-hidden="true"/>) : (<MenuIcon className="block h-6 w-6"aria-hidden="true"/>)
    }

    </button> </div> </div> </div> {
      /* Mobile Navigation Menu */
    }

      {
      mobileMenuOpen && (<motion.div initial= {
            {
            opacity: 0, height: 0
          }
        }

        animate= {
            {
            opacity: 1, height: "auto"
          }
        }

        exit= {
            {
            opacity: 0, height: 0
          }
        }

        className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-b border-gray-200 overflow-hidden"
        > <div className="pt-2 pb-3 space-y-1"> <Link href="#"
        className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"

        onClick= {
          ()=> setMobileMenuOpen(false)
        }

        > Home </Link> <Link href="#services"
        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"

        onClick= {
          ()=> setMobileMenuOpen(false)
        }

        > Repair Services </Link> <Link href="#why-choose-us"
        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"

        onClick= {
          ()=> setMobileMenuOpen(false)
        }

        > Why Choose Us </Link> <Link href="#accessories"
        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"

        onClick= {
          ()=> setMobileMenuOpen(false)
        }

        > Accessories </Link> <Link href="#testimonials"
        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"

        onClick= {
          ()=> setMobileMenuOpen(false)
        }

        > Testimonials </Link> <Link href="#faq"
        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"

        onClick= {
          ()=> setMobileMenuOpen(false)
        }

        > FAQ </Link> <Link href="#contact"
        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"

        onClick= {
          ()=> setMobileMenuOpen(false)
        }

        > Contact Us </Link> </div> <div className="pt-4 pb-4 border-t border-gray-200 flex justify-center"> <a href="tel:0778525115"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        > <PhoneIcon className="mr-2 -ml-1 h-5 w-5"/> Call Now </a> </div> </motion.div>)
    }

    </header> <main className="flex-grow"> {
      /* Hero Section */
    }

    <div className="relative bg-gray-900 overflow-hidden"> <div className="absolute inset-0"> <motion.div initial= {
        {
        scale: 1.1
      }
    }

    animate= {
        {
        scale: 1
      }
    }

    transition= {
        {
        duration: 1.5, ease: "easeOut"
      }
    }

    className="w-full h-full relative"
    > <Image src="/cover.png"
    alt="Store Cover"
    fill className="w-full h-full object-cover opacity-40"
    priority unoptimized /> </motion.div> <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div> </div> <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"> <motion.div initial="hidden"
    animate="visible"

    variants= {
      staggerContainer
    }

    > <motion.h1 variants= {
      fadeInUp
    }id="why-choose-us" 

    className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-2xl"

    > Expert Mobile &amp; Laptop Repair </motion.h1> <motion.p variants= {
      fadeInUp
    }

    className="mt-6 text-xl text-gray-300 max-w-xl leading-relaxed"

    > Professional, quick, and reliable repair services for all your devices. From shattered screens to battery replacements, we've got you covered. Same day repair on most devices!
</motion.p> <motion.div variants= {
      fadeInUp
    }

    className="mt-10 flex flex-col sm:flex-row gap-4"

    > <a href="#services"className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-50 shadow-sm transition-all hover:scale-105"> View Services </a> <a href="tel:0778525115"className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all hover:scale-105"> Call Us Now </a> </motion.div> </motion.div> </div> </div> {
      /* Features / Why Choose Us */
    }

    <div className="bg-white py-12 border-b border-gray-100 relative z-10"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial="hidden"
    whileInView="visible"

    viewport= {
        {
        once: true, margin: "-50px"
      }
    }

    variants= {
      staggerContainer
    }

    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"

    > <motion.div variants= {
      fadeInUp
    }

    className="flex flex-col items-center p-4"> <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4 transition-transform hover:scale-110"> <AccessTimeIcon fontSize="large"/> </div> <h3 className="text-lg font-medium text-gray-900">Fast Turnaround</h3> <p className="mt-2 text-sm text-gray-500">Most repairs are completed within 1-2 hours while you wait.</p> </motion.div> <motion.div variants= {
      fadeInUp
    }

    className="flex flex-col items-center p-4"> <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4 transition-transform hover:scale-110"> <BuildIcon fontSize="large"/> </div> <h3 className="text-lg font-medium text-gray-900">Expert Technicians</h3> <p className="mt-2 text-sm text-gray-500">Our staff is highly trained and experienced in repairing all major brands.</p> </motion.div> <motion.div variants= {
      fadeInUp
    }

    className="flex flex-col items-center p-4"> <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4 transition-transform hover:scale-110"> <CheckCircleIcon fontSize="large"/> </div> <h3 className="text-lg font-medium text-gray-900">Warranty Included</h3> <p className="mt-2 text-sm text-gray-500">We stand by our work with a 90-day warranty on all parts and labor.</p> </motion.div> </motion.div> </div> </div> <DividerSlide /> {
      /* Main Services Section */
    }

    <div id="services"className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"> <motion.div initial="hidden"
    whileInView="visible"

    viewport= {
        {
        once: true, margin: "-100px"
      }
    }

    variants= {
      fadeInUp
    }

    className="text-center"
    > <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What We Repair</h2> <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"> We fix a wide range of devices with premium quality parts. </p> </motion.div> <motion.div initial="hidden"
    whileInView="visible"

    viewport= {
        {
        once: true, margin: "-50px"
      }
    }

    variants= {
      staggerContainer
    }

    className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3"

    > {
      /* Mobile Phones */
    }

    <motion.div variants= {
      scaleIn
    }

    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-2"> <div className="h-48 relative overflow-hidden"> <Image src="https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=500&q=80"
    alt="Smartphone Repair"
    fill className="object-cover transition-transform duration-700 group-hover:scale-110"

    unoptimized /> </div> <div className="p-6 flex-grow"> <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2"> <PhoneIcon className="text-blue-600"/> Smartphones </h3> <p className="text-gray-600">iPhone, Samsung, Google Pixel, and more. Screen replacement, battery swaps, and charging port repairs.</p> </div> </motion.div> {
      /* Laptops */
    }

    <motion.div variants= {
      scaleIn
    }

    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-2"> <div className="h-48 relative overflow-hidden"> <Image src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80"
    alt="Laptop Repair"
    fill className="object-cover transition-transform duration-700 group-hover:scale-110"

    unoptimized /> </div> <div className="p-6 flex-grow"> <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2"> <LaptopIcon className="text-gray-700"/> Laptops &amp; MacBooks </h3> <p className="text-gray-600">Screen repair, keyboard replacement, memory upgrades, data recovery, and virus removal.</p> </div> </motion.div> {
      /* Tablets */
    }

    <motion.div variants= {
      scaleIn
    }

    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-2"> <div className="h-48 relative overflow-hidden"> <Image src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80"
    alt="Tablet Repair"
    fill className="object-cover transition-transform duration-700 group-hover:scale-110"

    unoptimized /> </div> <div className="p-6 flex-grow"> <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2"> <TabletIcon className="text-indigo-600"/> iPads &amp; Tablets </h3> <p className="text-gray-600">Cracked screens, battery issues, and software problems for all iPad models and Android tablets.</p> </div> </motion.div> </motion.div> </div> <DividerSplit /> {
      /* Accessories Section */
    }

    <div id="accessories"className="bg-gray-100 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 border-t border-gray-200"> <div className="max-w-7xl mx-auto"> <motion.div initial="hidden"
    whileInView="visible"

    viewport= {
        {
        once: true, margin: "-100px"
      }
    }

    variants= {
      fadeInUp
    }

    className="text-center"
    > <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Premium Accessories</h2> <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"> Discover our wide range of high-quality mobile accessories to protect and power your devices. </p> </motion.div> <motion.div initial="hidden"
    whileInView="visible"

    viewport= {
        {
        once: true, margin: "-50px"
      }
    }

    variants= {
      staggerContainer
    }

    className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

    > {
      /* Chargers */
    }

    <motion.div variants= {
      fadeInUp
    }

    className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"> <div className="relative h-56 w-full overflow-hidden"> <Image src="/charger.jpg"
    alt="Mobile Chargers"
    fill className="object-cover group-hover:scale-110 transition-transform duration-700"

    unoptimized /> </div> <div className="p-5"> <h3 className="text-lg font-bold text-gray-900 mb-1">Fast Chargers</h3> <p className="text-sm text-gray-600">Original and certified fast charging adapters for all device brands.</p> </div> </motion.div> {
      /* Cables */
    }

    <motion.div variants= {
      fadeInUp
    }

    className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"> <div className="relative h-56 w-full overflow-hidden"> <Image src="/cable.jpg"
    alt="USB Cables"
    fill className="object-cover group-hover:scale-110 transition-transform duration-700"

    unoptimized /> </div> <div className="p-5"> <h3 className="text-lg font-bold text-gray-900 mb-1">Premium Cables</h3> <p className="text-sm text-gray-600">Durable Type-C, Lightning, and Micro USB cables for data &amp; power.</p> </div> </motion.div> {
      /* Tempered Glass */
    }

    <motion.div variants= {
      fadeInUp
    }

    className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"> <div className="relative h-56 w-full overflow-hidden bg-gray-200"> <Image src="/temperd.jpg"
    alt="Tempered Glass"
    fill className="object-cover group-hover:scale-110 transition-transform duration-700"

    unoptimized /> </div> <div className="p-5"> <h3 className="text-lg font-bold text-gray-900 mb-1">Tempered Glass</h3> <p className="text-sm text-gray-600">High-quality 9H screen protectors to keep your display completely flawless.</p> </div> </motion.div> {
      /* Back Covers */
    }

    <motion.div variants= {
      fadeInUp
    }

    className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"> <div className="relative h-56 w-full overflow-hidden"> <Image src="/backcover.jpg"
    alt="Phone Back Covers"
    fill className="object-cover group-hover:scale-110 transition-transform duration-700"

    unoptimized /> </div> <div className="p-5"> <h3 className="text-lg font-bold text-gray-900 mb-1">Back Covers</h3> <p className="text-sm text-gray-600">Stylish, rugged, and clear cases for maximum drop &amp; scratch protection.</p> </div> </motion.div> </motion.div> </div> </div> <DividerBounce /> {
      /* Testimonials Section */
    }

    <div id="testimonials" className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8 border-t border-gray-200"> <div className="max-w-7xl mx-auto"> <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-center"> <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Customers Say</h2> <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"> Real reviews from our satisfied clients. </p> </motion.div> <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3"> {[1, 2, 3].map((item) => ( <motion.div key={item} variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative hover:shadow-md transition-shadow duration-300"> <div className="flex items-center space-x-1 text-yellow-400 mb-4"> {[...Array(5)].map((_, i) => (<StarIcon key={i} fontSize="small" />))} </div> <p className="text-gray-600 italic mb-6 leading-relaxed"> {item === 1 && `"Absolutely amazing service. Fixed my shattered iPhone screen in under 30 minutes. Highly recommended!"`} {item === 2 && `"My laptop was running super slow, but the team here upgraded memory and it runs like new. Great pricing too."`} {item === 3 && `"Very honest and professional. They diagnosed my iPad battery issue quickly and had the parts in stock."`}</p> <div className="font-semibold text-gray-900 text-lg"> {item === 1 && "Kasun Silva"} {item === 2 && "Mohamed M."} {item === 3 && "Nuwan Perera"} </div> <div className="text-sm text-gray-500 mt-1">Verified Customer</div> </motion.div> ))} </motion.div> </div> </div> <DividerFade /> {
      /* FAQ Section */
    }

    <div id="faq" className="bg-gray-50 py-16 px-4 sm:py-24 sm:px-6 lg:px-8"> <div className="max-w-4xl mx-auto"> <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-center mb-12"> <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2> <p className="mt-4 text-xl text-gray-500">Everything you need to know about our services.</p> </motion.div> <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-4"> {[{q: "How long does a screen repair take?", a: "Most mobile phone screen replacements take about 30 to 60 minutes. We carry parts for most popular models in stock so you can wait while we fix it."}, {q: "Do you offer a warranty on your repairs?", a: "Yes! We stand behind our work with a 90-day warranty on all parts and labor to give you peace of mind."}, {q: "Will I lose my data during the repair?", a: "For most hardware repairs like screen and battery replacements, your data is completely safe. However, we always recommend backing up your device before handing it over just to be absolutely secure."}, {q: "Do I need an appointment?", a: "Walk-ins are always welcome, but contacting us ahead of time helps ensure we have your specific parts in stock and can repair your device as soon as you arrive."}].map((faq, index) => ( <motion.details key={index} variants={fadeInUp} className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer outline-none"> <summary className="flex justify-between items-center font-medium list-none text-lg text-gray-900 focus:outline-none"> <span>{faq.q}</span> <span className="transition-transform duration-300 group-open:rotate-180 text-gray-500"> <ExpandMoreIcon /> </span> </summary> <p className="text-gray-600 mt-4 leading-relaxed animate-fadeIn">{faq.a}</p> </motion.details> ))} </motion.div> </div> </div> </main> {
      /* Footer */
    }

    <footer id="contact"className="bg-gray-900 text-white py-12 border-t-4 border-blue-600"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8"> <motion.div initial="hidden"
    whileInView="visible"

    viewport= {
        {
        once: true
      }
    }

    variants= {
      fadeInUp
    }

    > <div className="bg-white inline-block p-2 rounded-lg mb-4"> <Image src="/logo.png"
    alt="KV Mobile Logo"

    width= {
      150
    }

    height= {
      50
    }

    className="h-10 w-auto object-contain"
    unoptimized /> </div> <p className="text-gray-400 mt-2"> Your trusted partner for all mobile and laptop repairs. Fast, reliable, and professional. </p> </motion.div> <motion.div initial="hidden"
    whileInView="visible"

    viewport= {
        {
        once: true
      }
    }

    variants= {
      fadeInUp
    }

    > <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4> <ul className="space-y-2 text-gray-400"> <li><Link href="/"className="hover:text-white transition-colors">Home</Link></li> <li><Link href="#services"className="hover:text-white transition-colors">Services</Link></li> <li><Link href="#"className="hover:text-white transition-colors">Store Policies</Link></li> </ul> </motion.div> <motion.div initial="hidden"
    whileInView="visible"

    viewport= {
        {
        once: true
      }
    }

    variants= {
      fadeInUp
    }

    > <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h4> <ul className="space-y-3 text-gray-400"> <li className="flex items-start"> <LocationOnIcon className="mr-2 h-5 w-5 text-gray-400"/> <span>Pallegama, Gnathuna, Kegalle</span> </li> <li className="flex items-start"> <PhoneIcon className="mr-2 h-5 w-5 text-gray-400"/> <span>0778525115 / 0741718855</span> </li> <li className="flex items-start"> <EmailIcon className="mr-2 h-5 w-5 text-gray-400"/> <a href="mailto:nimeshkavindakarunasinghe@gmail.com"className="hover:text-white break-all hover:underline">nimeshkavindakarunasinghe@gmail.com</a> </li> <li className="flex items-start"> <AccessTimeIcon className="mr-2 h-5 w-5 text-gray-400"/> <span>Open: 24/7</span> </li> </ul> </motion.div> </div> <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"> <p>&copy; {
      new Date().getFullYear()
    }

    KV Technology. All rights reserved.</p> </div> </footer> {
      /* Floating WhatsApp Button */
    }

    <motion.a initial= {
        {
        opacity: 0, scale: 0
      }
    }

    animate= {
        {
        opacity: 1, scale: 1
      }
    }

    transition= {
        {
        delay: 1, duration: 0.5
      }
    }

    href="https://wa.me/94778525115"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 z-50 flex items-center justify-center animate-bounce-slow"
    aria-label="Chat on WhatsApp"

    > <WhatsAppIcon style= {
        {
        fontSize: 32
      }
    }

    /> </motion.a> <style dangerouslySetInnerHTML= {
        {
        __html: ` .animate-bounce-slow {
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
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        `
      }
    }

    /> </div>);
}