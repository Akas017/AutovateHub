import React, { useEffect, useState } from "react";

import {
  Link,
  NavLink,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";

/* =========================================================
   CONFIG
========================================================= */

const API_URL = "http://localhost:8000";

/* =========================================================
   FALLBACK MOTOR DATA
========================================================= */

const fallbackMotors = [
  {
    id: 1,
    name: "DT-52-ENSW 75/20",
    type: "Curtain Motor",
    capacity: "100 kg",
    wiring: "3 Wire",
    features: [
      "Remote Control",
      "App Control",
      "Alexa & Siri",
      "Soft Touch",
      "One Touch",
    ],
  },
  {
    id: 2,
    name: "DT-72-TVLSW 21/4",
    type: "Curtain Motor",
    capacity: "100 kg",
    wiring: "5 Wire",
    features: [
      "Remote Control",
      "App Control",
      "Alexa & Siri",
      "Soft Touch",
      "Third-Party Automation",
    ],
  },
  {
    id: 3,
    name: "DT-72-TVL5",
    type: "Curtain Motor",
    capacity: "100 kg",
    wiring: "5 Wire",
    features: [
      "Remote Control",
      "Third-Party Automation",
      "Smart Home Integration",
    ],
  },
  {
    id: 4,
    name: "DT-72-TVWL",
    type: "Curtain Motor",
    capacity: "100 kg",
    wiring: "5 Wire",
    features: [
      "Remote Control",
      "Zigbee",
      "Smart Life App",
      "Smart Home Integration",
    ],
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/solutions",
    label: "Solutions",
  },
  {
    path: "/motors",
    label: "Motors",
  },
  {
    path: "/automation",
    label: "Automation",
  },
  {
    path: "/about",
    label: "About",
  },
];

/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/motors" element={<Motors />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Quote />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

/* =========================================================
   SCROLL TO TOP
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

/* =========================================================
   LAYOUT
========================================================= */

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site-wrapper">

      {/* HEADER */}

      <header className="site-header">
        <div className="container header-inner">

          <Link
            to="/"
            className="brand"
            onClick={closeMenu}
          >
            <span className="brand-mark">
              A
            </span>

            <span className="brand-text">
              <strong>AUTOVATE</strong>
              <small>HUB</small>
            </span>
          </Link>

          {/* DESKTOP / MOBILE NAV */}

          <nav
            className={`main-nav ${
              menuOpen ? "mobile-open" : ""
            }`}
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="nav-quote-button"
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
          </nav>

          {/* MOBILE MENU */}

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      {/* IMPORTANT:
          Layout uses Outlet.
          Do NOT put another Routes component here.
      */}

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

/* =========================================================
   PAGE HERO
========================================================= */

function PageHero({
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="page-hero">
      <div className="container">

        <span className="eyebrow">
          {eyebrow}
        </span>

        <h1>{title}</h1>

        <p>{description}</p>

      </div>
    </section>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <>
      {/* HERO */}

      <section className="hero-section">
        <div className="container hero-grid">

          <div className="hero-content">

            <span className="eyebrow">
              SMART CURTAIN & BLIND AUTOMATION
            </span>

            <h1>
              Your Curtains.
              <br />
              <span>Now Intelligent.</span>
            </h1>

            <p className="hero-description">
              Transform ordinary curtains and blinds
              into intelligent, effortless experiences
              with premium motorization and smart-home
              automation.
            </p>

            <div className="hero-buttons">

              <Link
                to="/contact"
                className="primary-button"
              >
                Get a Free Quote
              </Link>

              <Link
                to="/motors"
                className="secondary-button"
              >
                Explore Motors
              </Link>

            </div>

            <div className="hero-trust">

              <div>
                <strong>100 kg</strong>
                <span>Motor Capacity</span>
              </div>

              <div>
                <strong>Smart</strong>
                <span>Home Integration</span>
              </div>

              <div>
                <strong>Remote</strong>
                <span>Control</span>
              </div>

            </div>
          </div>

          {/* HERO VISUAL */}

          <div className="hero-visual">

            <div className="curtain-card">

              <div className="curtain-visual">

                <div className="curtain-left" />

                <div className="window">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="curtain-right" />

              </div>

              <div className="smart-control">

                <div>
                  <small>
                    SMART CONTROL
                  </small>

                  <strong>
                    Curtains Open
                  </strong>
                </div>

                <div className="control-status">
                  ●
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="section">
        <div className="container">

          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Automation built around your space"
            description="From a single window to complete smart-home integration, Autovate Hub provides practical automation solutions."
          />

          <div className="feature-grid">

            <FeatureCard
              number="01"
              title="Motorized Curtains"
              description="Smooth, silent and reliable curtain movement with premium motor systems."
            />

            <FeatureCard
              number="02"
              title="Motorized Blinds"
              description="Bring intelligent control and convenience to your blinds."
            />

            <FeatureCard
              number="03"
              title="Smart Automation"
              description="Connect curtains and blinds with your existing smart-home ecosystem."
            />

            <FeatureCard
              number="04"
              title="Professional Installation"
              description="Complete track installation, motor setup and configuration."
            />

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

/* =========================================================
   SOLUTIONS
========================================================= */

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="OUR SOLUTIONS"
        title="Smart solutions for every window"
        description="Choose the right motorized curtain, blind or automation solution for your home, office or commercial space."
      />

      <section className="section">
        <div className="container">

          <div className="solution-grid">

            <SolutionCard
              title="Motorized Curtains"
              tag="CURTAINS"
              description="Automate your curtains with smooth and reliable motor systems."
              features={[
                "Remote control",
                "App control",
                "Voice control",
                "Soft touch",
                "Smart-home integration",
              ]}
            />

            <SolutionCard
              title="Motorized Blinds"
              tag="BLINDS"
              description="Upgrade blinds with convenient motorized control."
              features={[
                "Wireless control",
                "Smart scheduling",
                "Remote operation",
                "Home automation",
                "Easy integration",
              ]}
            />

            <SolutionCard
              title="Double Track Systems"
              tag="DOUBLE TRACK"
              description="Combine main curtains with sheer curtains on a single window."
              features={[
                "2 Motors",
                "2 Tracks",
                "1 Remote",
                "Professional installation",
                "Complete setup",
              ]}
            />

            <SolutionCard
              title="Smart Home Integration"
              tag="AUTOMATION"
              description="Connect your curtains with modern smart-home platforms."
              features={[
                "Alexa",
                "Siri",
                "Zigbee",
                "Smart Life",
                "Third-party automation",
              ]}
            />

          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}

/* =========================================================
   MOTORS
========================================================= */

function Motors() {
  const [motors, setMotors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [usingFallback, setUsingFallback] =
    useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadMotors = async () => {
      setLoading(true);
      setError("");
      setUsingFallback(false);

      try {
        const response = await fetch(
          `${API_URL}/api/products`
        );

        if (!response.ok) {
          throw new Error(
            "Unable to load products"
          );
        }

        const data = await response.json();

        const products = Array.isArray(data)
          ? data
          : Array.isArray(data.products)
          ? data.products
          : [];

        if (cancelled) {
          return;
        }

        if (products.length === 0) {
          setMotors(fallbackMotors);
          setUsingFallback(true);
        } else {
          setMotors(products);
        }

      } catch (err) {
        if (cancelled) {
          return;
        }

        console.error(
          "Motor API error:",
          err
        );

        setMotors(fallbackMotors);
        setUsingFallback(true);

        setError(
          "Live product data is temporarily unavailable. Showing the available motor range."
        );

      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadMotors();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <PageHero
        eyebrow="MOTOR RANGE"
        title="Engineered for effortless control"
        description="Explore our curtain motor systems designed for residential and commercial applications."
      />

      <section className="section">
        <div className="container">

          {/* LOADING */}

          {loading && (
            <div className="status-box">

              <div className="loader" />

              <h3>
                Loading motor range...
              </h3>

              <p>
                Please wait while we connect
                to the product database.
              </p>

            </div>
          )}

          {/* ERROR */}

          {!loading && error && (
            <div className="info-box">

              <strong>
                Product database notice
              </strong>

              <p>{error}</p>

            </div>
          )}

          {/* PRODUCTS */}

          {!loading && (
            <>
              <div className="motor-grid">

                {motors.map(
                  (motor, index) => (
                    <MotorCard
                      key={
                        motor.id ||
                        motor.code ||
                        index
                      }
                      motor={motor}
                    />
                  )
                )}

              </div>

              {usingFallback && (
                <div className="small-notice">
                  Product specifications should be
                  verified against the manufacturer's
                  latest datasheet before final
                  publication.
                </div>
              )}
            </>
          )}

        </div>
      </section>

      <CTASection />
    </>
  );
}

/* =========================================================
   MOTOR CARD
========================================================= */

function MotorCard({ motor }) {
  const features =
    motor.features ||
    motor.feature_list ||
    motor.capabilities ||
    [];

  return (
    <article className="motor-card">

      <div className="motor-top">

        <span className="product-number">
          MOTOR
        </span>

        <span className="motor-dot">
          ●
        </span>

      </div>

      <h2>
        {motor.name ||
          motor.model ||
          motor.product_name ||
          "Smart Curtain Motor"}
      </h2>

      <p className="motor-type">
        {motor.type ||
          motor.category ||
          "Curtain Motor"}
      </p>

      <div className="motor-specs">

        <div>
          <span>Capacity</span>
          <strong>
            {motor.capacity || "100 kg"}
          </strong>
        </div>

        <div>
          <span>Wiring</span>
          <strong>
            {motor.wiring ||
              motor.wire ||
              "Smart"}
          </strong>
        </div>

      </div>

      <div className="motor-features">

        <h4>Features</h4>

        {features.length > 0 ? (
          features.map(
            (feature, index) => (
              <div
                className="feature-row"
                key={index}
              >
                <span>✓</span>

                {typeof feature === "string"
                  ? feature
                  : feature.name ||
                    feature.title}
              </div>
            )
          )
        ) : (
          <>
            <div className="feature-row">
              <span>✓</span>
              Remote Control
            </div>

            <div className="feature-row">
              <span>✓</span>
              Smart Home Integration
            </div>

            <div className="feature-row">
              <span>✓</span>
              Professional Installation
            </div>
          </>
        )}

      </div>

      <Link
        to="/contact"
        className="motor-button"
      >
        Request Quote →
      </Link>

    </article>
  );
}

/* =========================================================
   AUTOMATION
========================================================= */

function Automation() {
  return (
    <>
      <PageHero
        eyebrow="SMART AUTOMATION"
        title="Control your curtains your way"
        description="From a simple remote to complete smart-home automation, choose the level of control that works for you."
      />

      <section className="section">
        <div className="container">

          <div className="automation-grid">

            <AutomationCard
              title="Remote Control"
              description="Open and close curtains with a dedicated remote."
              icon="01"
            />

            <AutomationCard
              title="Mobile App"
              description="Control curtains directly from your smartphone."
              icon="02"
            />

            <AutomationCard
              title="Voice Control"
              description="Use Alexa, Siri and compatible voice assistants."
              icon="03"
            />

            <AutomationCard
              title="Zigbee"
              description="Integrate compatible motors with Zigbee smart-home systems."
              icon="04"
            />

            <AutomationCard
              title="Third-Party Automation"
              description="Connect your curtain system with supported automation platforms."
              icon="05"
            />

            <AutomationCard
              title="Smart Scheduling"
              description="Create routines according to your daily lifestyle."
              icon="06"
            />

          </div>

        </div>
      </section>

      <section className="dark-section">
        <div className="container">

          <div className="automation-flow">

            <span className="eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              From touch to
              <br />
              complete automation.
            </h2>

            <div className="flow-steps">

              <FlowStep
                number="01"
                text="Choose your motor"
              />

              <FlowStep
                number="02"
                text="Install the track"
              />

              <FlowStep
                number="03"
                text="Connect automation"
              />

              <FlowStep
                number="04"
                text="Enjoy effortless control"
              />

            </div>

          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT AUTOVATE HUB"
        title="Making everyday spaces smarter"
        description="Autovate Hub provides motorized curtain, blind and smart-home automation solutions in Vasai and surrounding areas."
      />

      <section className="section">

        <div className="container about-grid">

          <div>

            <span className="eyebrow">
              WHY AUTOVATE HUB
            </span>

            <h2 className="section-title">
              Smart technology.
              <br />
              Practical installation.
            </h2>

          </div>

          <div className="about-copy">

            <p>
              We help homeowners, offices,
              hotels and commercial spaces
              upgrade traditional curtains and
              blinds with reliable motorization.
            </p>

            <p>
              Our solutions can be controlled
              through remotes, mobile apps,
              voice assistants and smart-home
              automation systems.
            </p>

            <p>
              Based in Vasai, Maharashtra, we
              focus on providing a complete
              experience from product selection
              and track installation to
              automation setup.
            </p>

          </div>

        </div>

      </section>

      <section className="section muted-section">

        <div className="container">

          <SectionHeading
            eyebrow="OUR PROCESS"
            title="Simple from start to finish"
            description="We keep the process straightforward so you can focus on enjoying your automated space."
          />

          <div className="process-grid">

            <ProcessStep
              number="01"
              title="Consultation"
              description="Understand your window, curtain and automation requirements."
            />

            <ProcessStep
              number="02"
              title="Recommendation"
              description="Select the suitable motor, track and control system."
            />

            <ProcessStep
              number="03"
              title="Installation"
              description="Professional track, motor and electrical installation."
            />

            <ProcessStep
              number="04"
              title="Automation"
              description="Configure remote, app, voice and smart-home controls."
            />

          </div>

        </div>

      </section>

      <CTASection />
    </>
  );
}

/* =========================================================
   QUOTE
========================================================= */

function Quote() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Vasai",
    requirement: "Motorized Curtains",
    windowSize: "",
    message: "",
  });

  const [submitting, setSubmitting] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/api/leads`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Unable to submit enquiry"
        );
      }

      setSuccess(
        "Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly."
      );

      setForm({
        name: "",
        phone: "",
        email: "",
        city: "Vasai",
        requirement: "Motorized Curtains",
        windowSize: "",
        message: "",
      });

    } catch (err) {
      console.error(err);

      setError(
        "We couldn't submit the enquiry right now. Please try again or contact us directly."
      );

    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="GET STARTED"
        title="Let's automate your space"
        description="Tell us what you're looking for and our team will help you choose the right motor, track and automation solution."
      />

      <section className="section">

        <div className="container quote-grid">

          <div className="quote-info">

            <span className="eyebrow">
              AUTOVATE HUB
            </span>

            <h2>
              Get a personalized
              <br />
              quotation.
            </h2>

            <p>
              Share your requirements and
              we'll help you select the right
              solution for your windows.
            </p>

            <div className="contact-details">

              <div>
                <span>Location</span>
                <strong>
                  Vasai, Maharashtra - 401208
                </strong>
              </div>

              <div>
                <span>Email</span>
                <strong>
                  hello@autovatehub.in
                </strong>
              </div>

              <div>
                <span>Service</span>
                <strong>
                  Curtain & Blind Automation
                </strong>
              </div>

            </div>

          </div>

          <form
            className="quote-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">

                <label>
                  Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Phone *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  required
                />

              </div>

            </div>

            <div className="form-row">

              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />

              </div>

              <div className="form-group">

                <label>
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Vasai"
                />

              </div>

            </div>

            <div className="form-group">

              <label>
                Requirement *
              </label>

              <select
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                required
              >
                <option>
                  Motorized Curtains
                </option>

                <option>
                  Motorized Blinds
                </option>

                <option>
                  Double Track
                </option>

                <option>
                  Smart Home Automation
                </option>

                <option>
                  Commercial Automation
                </option>

                <option>
                  Other
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>
                Approximate Window Size
              </label>

              <input
                type="text"
                name="windowSize"
                value={form.windowSize}
                onChange={handleChange}
                placeholder="Example: 10 ft"
              />

            </div>

            <div className="form-group">

              <label>
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your requirement..."
              />

            </div>

            {success && (
              <div className="success-message">
                {success}
              </div>
            )}

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="submit-button"
              disabled={submitting}
            >
              {submitting
                ? "Submitting..."
                : "Request a Quote →"}
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="section-heading">

      <span className="eyebrow">
        {eyebrow}
      </span>

      <h2>{title}</h2>

      <p>{description}</p>

    </div>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({
  number,
  title,
  description,
}) {
  return (
    <div className="feature-card">

      <span className="card-number">
        {number}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="card-arrow">
        ↗
      </span>

    </div>
  );
}

/* =========================================================
   SOLUTION CARD
========================================================= */

function SolutionCard({
  title,
  tag,
  description,
  features,
}) {
  return (
    <article className="solution-card">

      <span className="solution-tag">
        {tag}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="solution-features">

        {features.map((feature) => (
          <div key={feature}>

            <span>✓</span>

            {feature}

          </div>
        ))}

      </div>

      <Link
        to="/contact"
        className="text-link"
      >
        Get a Quote →
      </Link>

    </article>
  );
}

/* =========================================================
   AUTOMATION CARD
========================================================= */

function AutomationCard({
  title,
  description,
  icon,
}) {
  return (
    <div className="automation-card">

      <span className="automation-number">
        {icon}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
}

/* =========================================================
   FLOW STEP
========================================================= */

function FlowStep({
  number,
  text,
}) {
  return (
    <div className="flow-step">

      <span>{number}</span>

      <strong>{text}</strong>

    </div>
  );
}

/* =========================================================
   PROCESS STEP
========================================================= */

function ProcessStep({
  number,
  title,
  description,
}) {
  return (
    <div className="process-step">

      <span>{number}</span>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTASection() {
  return (
    <section className="cta-section">

      <div className="container cta-inner">

        <div>

          <span className="eyebrow">
            READY TO AUTOMATE?
          </span>

          <h2>
            Make every window
            <br />
            smarter.
          </h2>

        </div>

        <Link
          to="/contact"
          className="cta-large-button"
        >
          Get Your Quote →
        </Link>

      </div>

    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="site-footer">

      <div className="container footer-grid">

        <div>

          <Link
            to="/"
            className="brand footer-brand"
          >
            <span className="brand-mark">
              A
            </span>

            <span className="brand-text">
              <strong>AUTOVATE</strong>
              <small>HUB</small>
            </span>
          </Link>

          <p>
            Smart curtain, blind and home
            automation solutions for modern
            spaces.
          </p>

        </div>

        <div>

          <h4>Explore</h4>

          <Link to="/solutions">
            Solutions
          </Link>

          <Link to="/motors">
            Motors
          </Link>

          <Link to="/automation">
            Automation
          </Link>

          <Link to="/about">
            About
          </Link>

        </div>

        <div>

          <h4>Contact</h4>

          <span>
            Vasai, Maharashtra
          </span>

          <span>
            401208
          </span>

          <span>
            hello@autovatehub.in
          </span>

        </div>

      </div>

      <div className="container footer-bottom">

        <span>
          © {new Date().getFullYear()} Autovate Hub.
          All rights reserved.
        </span>

        <span>
          Smart living. Simplified.
        </span>

      </div>

    </footer>
  );
}

/* =========================================================
   404
========================================================= */

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">

      <div>

        <span className="eyebrow">
          404
        </span>

        <h1>
          Page not found
        </h1>

        <p>
          The page you're looking for
          doesn't exist or may have moved.
        </p>

        <button
          type="button"
          className="primary-button"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>

      </div>

    </section>
  );
}