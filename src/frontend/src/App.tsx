import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Tag,
  X,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const STARS = [1, 2, 3, 4, 5];

const products = [
  {
    id: 1,
    name: "Classic Denim Jeans",
    category: "Jeans",
    price: "\u20b91,299",
    originalPrice: "\u20b92,599",
    image: "/assets/generated/jeans.dim_600x700.jpg",
    tag: "Bestseller",
    ocid: "collection.item.1",
  },
  {
    id: 2,
    name: "Premium Formal Shirt",
    category: "Shirts",
    price: "\u20b9899",
    originalPrice: "\u20b91,799",
    image: "/assets/generated/shirt.dim_600x700.jpg",
    tag: "New Arrival",
    ocid: "collection.item.2",
  },
  {
    id: 3,
    name: "Designer Kurti",
    category: "Kurti",
    price: "\u20b91,099",
    originalPrice: "\u20b92,199",
    image: "/assets/generated/kurti.dim_600x700.jpg",
    tag: "Trending",
    ocid: "collection.item.3",
  },
];

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "PS",
    rating: 5,
    text: "Absolutely love the quality of clothes from Style Hub! The Kurti I bought is beautifully stitched and fits perfectly. Will definitely shop again!",
    ocid: "reviews.item.1",
  },
  {
    id: 2,
    name: "Rahul Verma",
    avatar: "RV",
    rating: 5,
    text: "The denim jeans are incredibly comfortable and stylish. The fabric quality is premium and the fit is just right. Best boutique in the city!",
    ocid: "reviews.item.2",
  },
  {
    id: 3,
    name: "Anjali Mehta",
    avatar: "AM",
    rating: 5,
    text: "I ordered two shirts for my husband and both are superb! The packaging was elegant and delivery was fast. Style Hub Boutique never disappoints.",
    ocid: "reviews.item.3",
  },
];

const navLinks = [
  { label: "Collection", href: "#collection", ocid: "nav.link.1" },
  { label: "Offers", href: "#offers", ocid: "nav.link.2" },
  { label: "Reviews", href: "#reviews", ocid: "nav.link.3" },
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
    <div className="min-h-screen bg-white font-body">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <span className="font-display text-xl md:text-2xl font-bold gold-text-gradient">
                Style Hub Boutique
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={link.ocid}
                  className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                    scrolled
                      ? "text-charcoal hover:text-gold-500"
                      : "text-white hover:text-gold-300"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact">
                <Button className="gold-gradient text-white border-0 hover:shadow-gold font-semibold px-6">
                  Visit Us
                </Button>
              </a>
            </nav>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className={`md:hidden p-2 rounded-md transition-colors ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gold-100 shadow-lg"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-ocid={link.ocid}
                    onClick={() => setMenuOpen(false)}
                    className="text-charcoal hover:text-gold-500 font-medium py-2 border-b border-gold-50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className="gold-gradient text-white w-full mt-2 font-semibold"
                  onClick={() => {
                    setMenuOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Visit Us
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-boutique.dim_1400x700.jpg')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block text-gold-300 text-sm font-semibold tracking-[0.3em] uppercase border border-gold-500/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
              ✦ Premium Fashion ✦
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
          >
            Style Hub{" "}
            <span className="gold-text-gradient italic">Boutique</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/85 mb-10 font-light tracking-wide"
          >
            Wear Your Style, Own Your Story
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#collection">
              <Button
                data-ocid="hero.primary_button"
                size="lg"
                className="gold-gradient text-white border-0 hover:shadow-gold-lg font-semibold px-10 py-6 text-lg rounded-full transition-all hover:scale-105"
              >
                Shop Now
              </Button>
            </a>
            <a href="#offers">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white/60 hover:bg-white/10 px-10 py-6 text-lg rounded-full"
              >
                View Offers
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* LATEST COLLECTION */}
      <section id="collection" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-gold-500 text-sm font-semibold tracking-[0.25em] uppercase">
              New Arrivals
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
              Latest Collection
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 gold-gradient" />
              <Sparkles className="w-5 h-5 text-gold-500" />
              <div className="h-px w-16 gold-gradient" />
            </div>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Discover our handpicked selection of premium styles crafted for
              the modern wardrobe.
            </p>
          </motion.div>

          {/* Product cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                data-ocid={product.ocid}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="product-card group"
              >
                <Card className="overflow-hidden border-0 shadow-card rounded-2xl">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="gold-gradient text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                        {product.tag}
                      </span>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gold-600">
                          {product.price}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="gold-gradient text-white border-0 hover:shadow-gold font-medium rounded-full px-5"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL OFFERS */}
      <section id="offers" className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gold-gradient opacity-90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.15) 35px, rgba(255,255,255,.15) 70px)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <Tag className="w-4 h-4" />
              Limited Time Offer
            </div>

            <h2 className="font-display text-6xl md:text-8xl font-bold text-white drop-shadow-lg leading-none mb-4">
              FLAT 50% OFF
            </h2>

            <div className="w-32 h-1 bg-white/60 mx-auto my-6 rounded-full" />

            <p className="text-white/90 text-xl md:text-2xl font-light mb-4">
              On Selected Items This Season
            </p>
            <p className="text-white/70 text-base mb-10">
              Don&apos;t miss out &mdash; the sale ends soon. Refresh your
              wardrobe at unbeatable prices.
            </p>

            <a href="#collection">
              <Button
                data-ocid="offers.primary_button"
                size="lg"
                className="bg-white text-gold-700 hover:bg-white/90 font-bold text-lg px-12 py-6 rounded-full shadow-gold-lg transition-all hover:scale-105"
              >
                Grab the Deal
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 border-2 border-white/20 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 border-2 border-white/20 rounded-full" />
      </section>

      {/* CUSTOMER REVIEWS */}
      <section id="reviews" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-gold-500 text-sm font-semibold tracking-[0.25em] uppercase">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 gold-gradient" />
              <Sparkles className="w-5 h-5 text-gold-500" />
              <div className="h-px w-16 gold-gradient" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                data-ocid={review.ocid}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="h-full border-0 shadow-card rounded-2xl bg-white hover:shadow-gold transition-shadow duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {STARS.slice(0, review.rating).map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 star-filled fill-current"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-600 leading-relaxed flex-1 mb-6 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Reviewer */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gold-100">
                      <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-white font-bold text-sm">
                        {review.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">
                          {review.name}
                        </p>
                        <p className="text-gold-500 text-xs">Verified Buyer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-gold-500 text-sm font-semibold tracking-[0.25em] uppercase">
              Find Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
              Contact Us
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 gold-gradient" />
              <Sparkles className="w-5 h-5 text-gold-500" />
              <div className="h-px w-16 gold-gradient" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Store Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display text-3xl font-bold text-charcoal mb-2">
                  Style Hub Boutique
                </h3>
                <p className="text-gold-500 font-semibold tracking-wide">
                  Your Premium Fashion Destination
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal mb-1">
                      Store Address
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Shop No. 42, Connaught Place,
                      <br />
                      New Delhi, Delhi 110001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal mb-1">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="text-gray-600 hover:text-gold-500 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal mb-1">Email</p>
                    <a
                      href="mailto:hello@stylehubboutique.in"
                      className="text-gray-600 hover:text-gold-500 transition-colors"
                    >
                      hello@stylehubboutique.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Store Hours */}
              <div className="bg-cream rounded-2xl p-6 border border-gold-100">
                <h4 className="font-semibold text-charcoal mb-3">
                  Store Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      Monday &ndash; Saturday
                    </span>
                    <span className="text-charcoal font-medium">
                      10:00 AM &ndash; 9:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sunday</span>
                    <span className="text-charcoal font-medium">
                      11:00 AM &ndash; 7:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.primary_button"
              >
                <Button
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-lg py-6 rounded-2xl flex items-center justify-center gap-3 transition-all hover:shadow-lg hover:scale-[1.02]"
                >
                  <SiWhatsapp className="w-6 h-6" />
                  Chat on WhatsApp
                </Button>
              </a>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Typically replies within minutes
              </div>
            </motion.div>

            {/* Right: Google Maps */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="rounded-2xl overflow-hidden shadow-card border border-gold-100"
              data-ocid="contact.map_marker"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9097152!2d77.2188152!3d28.6304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37a61ec3f5%3A0x2aa7b81a1cf0ecf7!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Style Hub Boutique Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-gold-400" />
              <span className="font-display text-2xl font-bold gold-text-gradient">
                Style Hub Boutique
              </span>
              <Sparkles className="w-5 h-5 text-gold-400" />
            </div>
            <p className="text-white/50 text-sm mb-6">
              Wear Your Style, Own Your Story
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="h-px bg-white/10 mb-6" />

            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Style Hub Boutique. All rights
              reserved. Built with &hearts; using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
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
