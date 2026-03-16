import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Menu, Phone, Star, Utensils, X } from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useEffect, useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: "easeOut" },
  }),
};

const STARS = [1, 2, 3, 4, 5];

const menuItems = [
  {
    id: 1,
    name: "Thali",
    description: "A wholesome traditional meal with dal, sabzi, roti & more",
    price: "₹150",
    image: "/assets/generated/menu-thali.dim_400x300.jpg",
    badge: "Most Loved",
    ocid: "menu.item.1",
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    description: "Rich and creamy paneer butter masala made with fresh paneer",
    price: "₹180",
    image: "/assets/generated/menu-paneer.dim_400x300.jpg",
    badge: "Chef's Pick",
    ocid: "menu.item.2",
  },
  {
    id: 3,
    name: "Dum Biryani",
    description: "Aromatic dum biryani layered with spices and love",
    price: "₹200",
    image: "/assets/generated/menu-biryani.dim_400x300.jpg",
    badge: "Bestseller",
    ocid: "menu.item.3",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    initials: "RS",
    rating: 5,
    text: "Best family restaurant in town! The thali is absolutely delicious. Feels like home every time I visit!",
    ocid: "testimonials.item.1",
  },
  {
    id: 2,
    name: "Priya Patel",
    initials: "PP",
    rating: 5,
    text: "The paneer dishes are amazing. Feels like home-cooked food! The flavors are authentic and the service is warm.",
    ocid: "testimonials.item.2",
  },
  {
    id: 3,
    name: "Amit Singh",
    initials: "AS",
    rating: 5,
    text: "Great biryani and warm ambiance. My family loves it here. We celebrate every occasion at मनपसंद!",
    ocid: "testimonials.item.3",
  },
];

const navLinks = [
  { label: "Home", href: "#hero", ocid: "nav.link.1" },
  { label: "Our Menu", href: "#menu", ocid: "nav.link.2" },
  { label: "Testimonials", href: "#testimonials", ocid: "nav.link.3" },
  { label: "Contact", href: "#contact", ocid: "nav.link.4" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen font-body"
      style={{ backgroundColor: "oklch(97% 0.014 80)" }}
    >
      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/96 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full saffron-gradient flex items-center justify-center shadow-saffron">
                <Utensils className="w-4.5 h-4.5 text-white" />
              </div>
              <span
                className={`font-display text-2xl font-bold tracking-tight transition-colors ${
                  scrolled ? "saffron-text-gradient" : "text-white"
                }`}
              >
                मनपसंद
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={link.ocid}
                  className={`nav-link text-sm font-semibold tracking-wide transition-colors ${
                    scrolled
                      ? "text-spice hover:text-saffron-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a href="#menu">
                <Button className="saffron-gradient text-white border-0 hover:shadow-saffron font-semibold px-6 rounded-full">
                  View Menu
                </Button>
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              className={`md:hidden p-2 rounded-md transition-colors ${
                scrolled ? "text-spice" : "text-white"
              }`}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-saffron-100 shadow-lg"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-ocid={link.ocid}
                    onClick={() => setMenuOpen(false)}
                    className="text-spice hover:text-saffron-500 font-semibold py-2.5 border-b border-saffron-50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className="saffron-gradient text-white w-full mt-2 font-semibold rounded-full"
                  onClick={() => {
                    setMenuOpen(false);
                    document
                      .getElementById("menu")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Menu
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* BG image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-food.dim_1200x600.jpg')",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
        {/* Saffron accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 saffron-gradient" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.28em] uppercase border border-white/30 px-5 py-1.5 rounded-full backdrop-blur-sm text-white/80">
              🍛 Family Restaurant · Since 2005
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-5 leading-[1.05]"
          >
            मनपसंद
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-10 font-light tracking-wide italic"
          >
            A taste of home, served with love
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#menu">
              <Button
                data-ocid="hero.primary_button"
                size="lg"
                className="saffron-gradient text-white border-0 font-bold px-10 py-6 text-lg rounded-full hover:shadow-saffron-lg hover:scale-105 transition-all"
              >
                View Menu
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white/50 hover:bg-white/10 px-10 py-6 text-lg rounded-full"
              >
                Find Us
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/35 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full saffron-gradient" />
          </div>
        </motion.div>
      </section>

      {/* ── OUR MENU ── */}
      <section
        id="menu"
        className="py-24"
        style={{ backgroundColor: "oklch(99% 0.006 75)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-saffron-500 text-sm font-bold tracking-[0.28em] uppercase">
              Signature Dishes
            </span>
            <h2
              className="font-display text-5xl md:text-6xl font-bold mt-2 mb-4"
              style={{ color: "oklch(28% 0.06 50)" }}
            >
              Our Menu
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-0.5 w-14 saffron-gradient rounded-full" />
              <span className="text-saffron-500 text-lg">🍽️</span>
              <div className="h-0.5 w-14 saffron-gradient rounded-full" />
            </div>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto text-base leading-relaxed">
              Every dish is crafted with love using fresh ingredients and
              time-honoured family recipes.
            </p>
          </motion.div>

          {/* Menu cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.id}
                data-ocid={item.ocid}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="menu-card"
              >
                <Card className="overflow-hidden border-0 shadow-card rounded-2xl bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="saffron-gradient text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3
                        className="font-display text-xl font-bold"
                        style={{ color: "oklch(28% 0.06 50)" }}
                      >
                        {item.name}
                      </h3>
                      <span className="text-xl font-bold text-saffron-600 ml-2 flex-shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-saffron-50">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-saffron-600">
                        <span className="w-1.5 h-1.5 rounded-full saffron-gradient" />
                        Fresh & Made to Order
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        id="testimonials"
        className="py-24 spice-pattern"
        style={{ backgroundColor: "oklch(97% 0.014 80)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-saffron-500 text-sm font-bold tracking-[0.28em] uppercase">
              What Our Guests Say
            </span>
            <h2
              className="font-display text-5xl md:text-6xl font-bold mt-2 mb-4"
              style={{ color: "oklch(28% 0.06 50)" }}
            >
              Testimonials
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-0.5 w-14 saffron-gradient rounded-full" />
              <span className="text-saffron-500 text-lg">💬</span>
              <div className="h-0.5 w-14 saffron-gradient rounded-full" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                data-ocid={t.ocid}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="h-full border-0 shadow-card rounded-2xl bg-white hover:shadow-saffron transition-shadow duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {STARS.slice(0, t.rating).map((s) => (
                        <Star
                          key={s}
                          className="w-5 h-5 star-filled fill-current"
                        />
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="text-gray-600 leading-relaxed flex-1 mb-6 italic text-base">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-saffron-100">
                      <div className="w-12 h-12 rounded-full saffron-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <p
                          className="font-semibold"
                          style={{ color: "oklch(28% 0.06 50)" }}
                        >
                          {t.name}
                        </p>
                        <p className="text-saffron-500 text-xs font-medium">
                          Happy Guest ✓
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT US ── */}
      <section
        id="contact"
        data-ocid="contact.section"
        className="py-24"
        style={{ backgroundColor: "oklch(99% 0.006 75)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-saffron-500 text-sm font-bold tracking-[0.28em] uppercase">
              Get In Touch
            </span>
            <h2
              className="font-display text-5xl md:text-6xl font-bold mt-2 mb-4"
              style={{ color: "oklch(28% 0.06 50)" }}
            >
              Contact Us
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-0.5 w-14 saffron-gradient rounded-full" />
              <span className="text-saffron-500 text-lg">📍</span>
              <div className="h-0.5 w-14 saffron-gradient rounded-full" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-8"
            >
              <div>
                <h3
                  className="font-display text-4xl font-bold mb-1"
                  style={{ color: "oklch(28% 0.06 50)" }}
                >
                  मनपसंद
                </h3>
                <p className="text-saffron-600 font-semibold tracking-wide">
                  Family Restaurant · Jaipur
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl saffron-gradient flex items-center justify-center flex-shrink-0 shadow-saffron">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="font-semibold mb-0.5"
                      style={{ color: "oklch(28% 0.06 50)" }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+919876543210"
                      className="text-gray-600 hover:text-saffron-500 transition-colors text-base"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl saffron-gradient flex items-center justify-center flex-shrink-0 shadow-saffron">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="font-semibold mb-0.5"
                      style={{ color: "oklch(28% 0.06 50)" }}
                    >
                      Address
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      12, Main Market, Gandhi Nagar,
                      <br />
                      Jaipur, Rajasthan – 302015
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div
                className="rounded-2xl p-6 border border-saffron-100"
                style={{ backgroundColor: "oklch(97% 0.025 70)" }}
              >
                <h4
                  className="font-semibold mb-3"
                  style={{ color: "oklch(28% 0.06 50)" }}
                >
                  🕐 Opening Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monday – Saturday</span>
                    <span
                      className="font-semibold"
                      style={{ color: "oklch(28% 0.06 50)" }}
                    >
                      10:00 AM – 10:30 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sunday</span>
                    <span
                      className="font-semibold"
                      style={{ color: "oklch(28% 0.06 50)" }}
                    >
                      11:00 AM – 10:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a href="tel:+919876543210">
                <Button
                  size="lg"
                  className="w-full saffron-gradient text-white border-0 font-bold text-lg py-6 rounded-2xl hover:shadow-saffron-lg hover:scale-[1.02] transition-all"
                >
                  📞 Call to Reserve a Table
                </Button>
              </a>
            </motion.div>

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="rounded-2xl overflow-hidden shadow-card border border-saffron-100"
              data-ocid="contact.map_marker"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.774!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40f6e6f35b7%3A0x6c3b3c4f56f43697!2sGandhi%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302015!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="मनपसंद Restaurant Location – Gandhi Nagar, Jaipur"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-12 text-white"
        style={{ backgroundColor: "oklch(22% 0.04 50)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">🍛</span>
              <span className="font-display text-3xl font-bold saffron-text-gradient">
                मनपसंद
              </span>
              <span className="text-2xl">🍛</span>
            </div>
            <p className="text-white/50 text-sm mb-6 italic">
              A taste of home, served with love
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/55 hover:text-saffron-300 text-sm transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="h-px bg-white/10 mb-6" />

            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} मनपसंद. All rights reserved. Built
              with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-saffron-300 hover:text-saffron-200 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
