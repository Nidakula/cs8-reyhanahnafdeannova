import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Rocket, Code, Mail, Phone, MapPin, Globe, Twitter, Facebook, Instagram, Linkedin, Database } from "lucide-react";
import BGLogoHeroku from "./assets/BGLogoHeroku.svg";
import LOGOHEROKU from "./assets/LOGOHEROKU.png";
import BONOBOS from "./assets/BONOBOS.png";
import ALIGN from "./assets/ALIGN.png";
import LIVENATION from "./assets/LIVENATION.png";
import HEALTHSHERPA from "./assets/HEALTHSHERPA.png";
import TRAILHEAD from "./assets/TRAILHEAD.png";
import GOOSEHEAD from "./assets/goosehead.png";

// Hook to detect element in viewport
function useInView(ref, threshold = 0.3) {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, threshold]);
  return isVisible;
}

// Interactive focus section integrated here
const infoSections = [
  {
    icon: <Rocket className="w-6 h-6 text-purple-300 mr-2" />,
    title: "A focus on apps",
    content: [
      "Heroku is the quickest way for a company to become an apps company. Heroku is a service that enables companies to spend their time developing and deploying apps that immediately start producing value.",
      "An app starts impacting the world when customers start interacting with it. Getting apps out in the wild, out onto the Internet quickly, and iterating, fast, is what can make or break companies.",
      "Heroku focuses relentlessly on apps and the developer experience around apps. Heroku lets companies of all sizes embrace the value of apps, not the distraction of hardware, nor the distraction of servers — virtual or otherwise.",
    ],
  },
  {
    icon: <Code className="w-6 h-6 text-purple-300 mr-2" />,
    title: "Why enabling developers matters",
    content: [
      "Heroku is an amazing developer experience. Heroku gets out of the way where it matters, letting devs get on with what they do best — developing apps.",
      "Great apps come from developers using tools and languages they love. That's why a great developer experience has always been at the very heart of what we do. We embrace the languages of the modern app economy: Node.js, Ruby, Java, Python, Scala, PHP and more.",
      "Heroku makes the processes of deploying, configuring, scaling, tuning, and managing apps as simple and straightforward as possible, so that developers can focus on what's most important: building great apps that delight and engage customers.",
      "Deploying and maintaining apps should be frictionless, and these capabilities should be a part of a company's DNA.",
    ],
  },
  {
    icon: <Database className="w-6 h-6 text-purple-300 mr-2" />,
    title: "Heroku and Data",
    content: [
      "Heroku isn’t just an app‐hosting platform—it also delivers a full-fledged, secure and scalable Database-as-a-Service, complete with developer-friendly features like follower replicas, forking, Dataclips, and built-in health checks. Because data underpins every meaningful application—whether it’s customer records or operational metrics—Heroku treats apps and their data as an inseparable pair. Its managed data portfolio spans Heroku Postgres, a Key-Value Store, and Apache Kafka on Heroku, so you can pick the service that fits your workload. Rather than tweaking provisioning settings by trial and error, developers instantly get access to a highly available, rollback-capable database that scales with their app and matches their development workflow.",
    ],
  }
];

// Import the interactive FocusSection
function FocusSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#5222d0] to-[#3c0d99] text-white py-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Why Heroku?</h2>
        <div className="space-y-6">
          {infoSections.map((section, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/10 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 font-semibold text-lg text-left"
                >
                  <div className="flex items-center">
                    {section.icon}
                    {section.title}
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-white/90"
                    >
                      {section.content.map((para, pidx) => (
                        <p key={pidx} className="mb-3 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

// Fade-in animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: custom * 0.2 }
  })
};

// Stagger children animation
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Item fade in for staggered animations
const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const testimonials = [
  {
    logo: "https://res.cloudinary.com/pensionbee/image/upload/c_fill,g_center,h_300,w_560/v1718274467/Chris%20-%20Press%20page/Logo_square.png",
    quote:
      "Heroku has allowed our team to focus just on the incremental business value that we were adding in terms of customer experience, and that's made a real difference for us.",
    name: "JONATHAN LISTER PARSONS",
    title: "CTO, PensionBee",
    storyLink: "#",
  },
  {
    logo: "https://pbs.twimg.com/profile_images/942777942538620929/uTmJTMaq_400x400.jpg",
    quote:
      "Heroku is backed by teams who are experts in application infrastructure — scaling, security, data, etc. Heroku continues to innovate year after year, and we get to reap the benefits.",
    name: "RYAN TOWNSEND",
    title: "CTO, SHIFT Commerce",
    storyLink: "#",
  },
  {
    logo: "https://s3.amazonaws.com/heroku-www-files/customers/logos/drivendata.png",
    quote:
      "We take security very seriously. One of the benefits that Heroku brings to our organization is a sense of trust knowing that we're keeping our users' data safe.",
    name: "GREG LIPSTEIN",
    title: "Co-Founder & Head of Business Development, DrivenData",
    storyLink: "#",
  },
];

// Contact information for footer
const contactInfo = {
  email: "contact@heroku.com",
  phone: "+1 (123) 456-7890",
  address: "650 7th Street, San Francisco, CA 94103",
  website: "cs8-reyhanahnafdeannova.vercel.app",
  socialMedia: [
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, link: "https://twitter.com/heroku" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, link: "https://facebook.com/heroku" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, link: "https://instagram.com/heroku" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, link: "https://linkedin.com/company/heroku" }
  ]
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  
  // References for intersection observer
  const heroRef = useRef(null);
  const videoSectionRef = useRef(null);
  const languagesSectionRef = useRef(null);
  const trustSectionRef = useRef(null);
  const footerRef = useRef(null);
  
  // Check if sections are in view
  const heroInView = useInView(heroRef, 0.1);
  const videoInView = useInView(videoSectionRef, 0.1);
  const languagesInView = useInView(languagesSectionRef, 0.1);
  const trustInView = useInView(trustSectionRef, 0.1);
  const footerInView = useInView(footerRef, 0.1);

  return (
    <div className="min-h-screen bg-white text-[#3F3F44] font-sans text-sm leading-relaxed">
      {/* Header - Fade In */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#3c0d99] text-white px-6 py-4 shadow-md"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="underline text-white text-sm mt-2 sm:mt-3">
            <img src={BGLogoHeroku} alt="Heroku background logo" />
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="https://www.heroku.com/products" target="_blank" rel="noopener noreferrer" className="hover:underline">Products</a>
            <a href="https://elements.heroku.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Marketplace</a>
            <a href="https://www.heroku.com/pricing" target="_blank" rel="noopener noreferrer" className="hover:underline">Pricing</a>
            <a href="https://devcenter.heroku.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Documentation</a>
            <a href="https://www.heroku.com/support" target="_blank" rel="noopener noreferrer" className="hover:underline">Support</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">More</a>
          </nav>
          <div className="flex gap-4 text-sm">
            <a href="https://id.heroku.com/login#" target="_blank" rel="noopener noreferrer" className="px-3 py-1 hover:underline">Log in</a>
            <a href="https://signup.heroku.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white text-[#3c0d99] font-semibold rounded hover:bg-gray-100">Sign up</a>
          </div>
        </div>
      </motion.header>

      {/* Hero Section - Fade In */}
      <main 
        ref={heroRef}
        className="bg-gradient-to-b from-[#5222d0] to-[#3c0d99] text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <motion.div 
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              The Cloud Application Platform For Deploying, Managing, and Scaling Apps
            </h1>
            <motion.p 
              variants={fadeIn}
              custom={1}
              className="mb-6 text-lg text-white/90"
            >
              Heroku tackles the toil — patching and upgrading, 24/7 ops and security, build systems, failovers, and more. Stay focused on building great data-driven applications.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              custom={2}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="https://devcenter.heroku.com/start" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#1a8cff] font-semibold rounded shadow hover:bg-blue-600">Get Started Now</a>
              <a href="https://www.heroku.com/platform" target="_blank" rel="noopener noreferrer" className="underline text-white text-sm mt-2 sm:mt-3">Explore the Heroku Platform</a>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1"
          >
            <img src={LOGOHEROKU} alt="Heroku logo" className="animate-spin-slow" />
          </motion.div>
        </div>
      </main>

      {/* Video Testimonial Section - Fade In */}
      <div className="bg-white text-[#3F3F44] font-sans px-4 py-10">
        <section 
          ref={videoSectionRef}
          className="text-center mb-16"
        >
          <motion.h1 
            initial="hidden"
            animate={videoInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0}
            className="text-3xl font-semibold text-purple-700"
          >
            Learn why <strong>Customers</strong> love Heroku.
          </motion.h1>
          <motion.div 
            initial="hidden"
            animate={videoInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={1}
            className="flex justify-center my-8"
          >
            <iframe
              className="w-full max-w-xl aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/IB0V8wWsCsc?si=H7gZRNSngblFTwVt"
              title="UrbanBound Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
          <motion.button 
            initial="hidden"
            animate={videoInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={2}
            className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition"
          >
            <a href="#" >Get Started Today</a>
          </motion.button>
        </section>

        {/* Supported Languages Section - Fade In */}
        <section 
          ref={languagesSectionRef}
          className="text-center"
        >
          <motion.h2 
            initial="hidden"
            animate={languagesInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0}
            className="text-2xl font-semibold text-purple-700 mb-2"
          >
            Powerful platform, unparalleled ecosystem
          </motion.h2>
          <motion.p 
            initial="hidden"
            animate={languagesInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={1}
            className="mb-6"
          >
            Don't reinvent the wheel. Heroku's 150+ third-party add-ons and 380+ open source buildpacks provide a rich ecosystem of preintegrated extensions and services.
          </motion.p>
          <motion.h3 
            initial="hidden"
            animate={languagesInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={2}
            className="text-sm font-semibold uppercase tracking-widest text-gray-800 mb-4"
          >
            Officially Supported Languages
          </motion.h3>
          <motion.div 
            initial="hidden"
            animate={languagesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 mb-4"
          >
            {[
              ["Node.js","https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"],
              ["Ruby","https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg"],
              ["Java","https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"],
              ["PHP","https://www.php.net/images/logos/php-logo.svg"],
              ["Python","https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"],
              ["Go","https://blog.golang.org/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"],
              ["Scala","https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/768px-Scala-full-color.svg.png"],
              ["Clojure","https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg"],
              [".NET","https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"]
            ].map(([name,img])=>(
              <motion.div 
                key={name} 
                variants={itemFadeIn}
                className="w-24 h-24 border border-gray-200 rounded-lg p-2 flex flex-col items-center justify-center"
              >
                <img src={img} alt={name} className="h-8 mb-2" />
                <span className="text-xs">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={languagesInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-4"
        >
          <motion.p 
            initial="hidden"
            animate={languagesInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={1}
            className="max-w-xl mx-auto text-center"
          >
            In addition to our officially supported languages, 
            you can use any language that runs on Linux with Heroku via a third-party buildpack.
            <a href="https://elements.heroku.com/buildpacks" target="_blank" rel="noopener noreferrer" className="text-[#5222d0] text-sm">  All Heroku Buildpacks →</a>
          </motion.p>
        </motion.div>
      </div>

      {/* Interactive Focus Section is already animated */}
      <FocusSection />

      {/* Platform Trust Section - Fade In */}
      <section 
        ref={trustSectionRef}
        className="bg-gray-50 py-16 px-6 text-center"
      >
        <motion.h2 
          initial="hidden"
          animate={trustInView ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0}
          className="text-3xl font-semibold text-[#5222d0] mb-2"
        >
          The platform developers trust
        </motion.h2>
        <motion.p 
          initial="hidden"
          animate={trustInView ? "visible" : "hidden"}
          variants={fadeIn}
          custom={1}
          className="text-[#3F3F44] mb-10 max-w-xl mx-auto"
        >
          Heroku is the cloud application platform of choice for startups, industry giants, and everyone in between.
        </motion.p>

        <motion.div 
          initial="hidden"
          animate={trustInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-wrap justify-center items-center gap-6 mb-12"
        >
          {[BONOBOS, ALIGN, LIVENATION, HEALTHSHERPA, TRAILHEAD, GOOSEHEAD].map((logo, idx) => (
            <motion.img
              key={idx}
              variants={itemFadeIn}
              src={logo}
              alt={`Client logo ${idx + 1}`}
              className="h-10 object-contain"
              style={{ width: '100px', height: 'auto' }}
            />
          ))}
        </motion.div>

        {/* Testimonial Card - Fade In */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={trustInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 flex items-center gap-6 transition-all duration-500 ease-in-out"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-6 w-full"
            >
              <img
                src={testimonials[activeIndex].logo}
                alt={`${testimonials[activeIndex].name} logo`}
                className="w-20 h-20 object-contain rounded-md border p-2 bg-gray-50"
              />
              <div className="text-left text-[#3F3F44]">
                <p className="italic text-base mb-4">"{testimonials[activeIndex].quote}"</p>
                <p className="font-semibold">{testimonials[activeIndex].name}</p>
                <p className="text-sm mb-2">{testimonials[activeIndex].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            title="Previous testimonial"
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full hover:bg-purple-100 cursor-pointer transition"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            title="Next testimonial"
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 p-2 rounded-full hover:bg-purple-100 cursor-pointer transition"
          >
            →
          </button>
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 w-2 rounded-full inline-block cursor-pointer transition-all duration-300 ${activeIndex === idx ? 'bg-[#5222d0]' : 'bg-gray-300'}`}
            ></span>
          ))}
        </div>

        {/* CTA - Fade In */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={trustInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10"
        >
          <a href="#" className="bg-[#5222d0] hover:bg-purple-800 text-white font-bold py-2 px-6 rounded">Get Started Now</a>
          <div className="mt-4 text-sm">
            <a href="https://www.heroku.com/customers" target="_blank" rel="noopener noreferrer" className="text-[#5222d0] underline mr-4">View More Customers →</a>
            <a href="https://www.heroku.com/agencies" target="_blank" rel="noopener noreferrer" className="text-[#5222d0] underline">Learn how agencies use Heroku →</a>
          </div>
        </motion.div>
      </section>

      {/* Footer with Contact Section */}
      <footer ref={footerRef} className="bg-[#3c0d99] text-white">
        {/* Contact Section */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <motion.div 
            initial="hidden"
            animate={footerInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-white/80 max-w-lg mx-auto">
              Have questions about Heroku or need help with your application? Our team is here to assist you.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={footerInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {/* Contact Details */}
            <motion.div variants={itemFadeIn} className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="flex items-center mb-3">
                <Mail className="w-5 h-5 mr-2 text-purple-300" />
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>
              </div>
              <div className="flex items-center mb-3">
                <Phone className="w-5 h-5 mr-2 text-purple-300" />
                <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline">{contactInfo.phone}</a>
              </div>
              <div className="flex items-start mb-3">
                <MapPin className="w-5 h-5 mr-2 text-purple-300 mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-purple-300" />
                <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactInfo.website}</a>
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div variants={itemFadeIn} className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <a href="https://www.heroku.com/about" target="_blank" rel="noopener noreferrer" className="mb-2 hover:underline">About Us</a>
              <a href="https://www.heroku.com/careers" target="_blank" rel="noopener noreferrer" className="mb-2 hover:underline">Careers</a>
              <a href="https://blog.heroku.com/" target="_blank" rel="noopener noreferrer" className="mb-2 hover:underline">Blog</a>
              <a href="https://www.salesforce.com/company/legal/sfdc-website-terms-of-service/?_gl=1*108ctac*_ga*MTg0NjMyMzgzOS4xNzQ1MzgwNjcz*_ga_62RHPFWB9M*MTc0NTQ1NTQxNS42LjEuMTc0NTQ1NzI4OS4wLjAuMA" target="_blank" rel="noopener noreferrer" className="mb-2 hover:underline">Terms of Service</a>
              <a href="https://www.salesforce.com/company/legal/privacy/?_gl=1*1pm5c5y*_ga*MTg0NjMyMzgzOS4xNzQ1MzgwNjcz*_ga_62RHPFWB9M*MTc0NTQ1NTQxNS42LjEuMTc0NTQ1ODQyNS4wLjAuMA" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Policy</a>
            </motion.div>
            
            {/* Resources */}
            <motion.div variants={itemFadeIn} className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <a href="https://devcenter.heroku.com/" target="_blank" rel="noopener noreferrer" className="mb-2 hover:underline" >Documentation</a>
              <a href="https://status.heroku.com/" target="_blank" rel="noopener noreferrer" className="mb-2 hover:underline">Status</a>
              <a href="https://www.heroku.com/training-and-education" target="_blank" rel="noopener noreferrer" className="mb-2 hover:underline">Training & Education</a>
              <a href="https://devcenter.heroku.com/start" target="_blank" rel="noopener noreferrer" className="hover:underline">Get Started</a>
            </motion.div>
            
            {/* Newsletter */}
            <motion.div variants={itemFadeIn} className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="mb-4 text-white/80">Subscribe to our newsletter for updates and new features.</p>
              <div className="flex w-full">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-l text-white placeholder-white/50 flex-1 focus:outline-none focus:ring-1 focus:ring-purple-300"
                />
                <button className="bg-[#1a8cff] px-4 py-2 rounded-r font-semibold hover:bg-blue-600 transition">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Social Media Links */}
          <motion.div 
            initial="hidden"
            animate={footerInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={1}
            className="flex justify-center space-x-6 mb-8"
          >
            {contactInfo.socialMedia.map((social, idx) => (
              <a 
                key={idx} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                aria-label={`Follow us on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
          
          {/* Copyright */}
          <motion.div 
            initial="hidden"
            animate={footerInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={2}
            className="text-center pt-6 border-t border-white/20"
          >
            <p>&copy; {new Date().getFullYear()} Reyhan Ahnaf Deannova 2306267100. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}