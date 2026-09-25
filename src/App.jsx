import "./App.css";
function App() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <div>
          <h2>🎓 Bright Future School</h2>
          <p>Learn • Grow • Succeed</p>
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Academics</li>
          <li>Facilities</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>

        <button>Admission Open</button>
      </nav>

      {/* Hero */}
    <section className="hero">
  <div className="hero-text">
    <p className="small-title">
      🎓 Quality Education for a Brighter Tomorrow
    </p>

    <h1>
      Welcome to <span>Bright Future School</span>
    </h1>

    <p className="hero-description">
      We provide a safe, supportive and inspiring environment
      where every child can learn, grow and achieve their dreams.
    </p>

    <button>Enroll Now →</button>
    <button className="outline-btn">Explore Our School</button>
  </div>

  <div className="hero-image">
    <img src="/images/School.jpg" alt="Bright Future School" />
  </div>
</section>

<section className="features">
  <div className="feature-card">
    <div className="feature-icon">📖</div>
    <h3>Quality Education</h3>
    <p>We focus on complete academic and personal growth.</p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">👩‍🏫</div>
    <h3>Experienced Teachers</h3>
    <p>Our dedicated teachers care for every student.</p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">🛡️</div>
    <h3>Safe Environment</h3>
    <p>A secure and friendly campus for every child.</p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">⭐</div>
    <h3>Modern Facilities</h3>
    <p>Well-equipped classrooms, library and computer rooms.</p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">📈</div>
    <h3>Bright Future</h3>
    <p>We prepare students for a successful tomorrow.</p>
  </div>
</section>


<section className="about">
  <div className="about-image">
    <img src="/images/School.jpg" alt="Our School" />
  </div>

  <div className="about-text">
    <p className="small-title">ABOUT US</p>

    <h2>
      A Place to Learn, Grow
      <span> and Succeed</span>
    </h2>

    <p>
      Bright Future School is committed to providing high-quality
      education with modern teaching methods, creative learning
      and a caring environment.
    </p>

    <button>Read More →</button>
  </div>

  <div className="why-choose">
    <h2>Why Choose Us?</h2>

    <p>✓ Qualified & Caring Teachers</p>
    <p>✓ Modern Classrooms</p>
    <p>✓ Co-curricular Activities</p>
    <p>✓ Individual Attention</p>
    <p>✓ Affordable Fee Structure</p>
  </div>
</section>

<section className="programs">
  <div className="section-heading">
    <p className="small-title">OUR PROGRAMS</p>

    <h2>Education for Every Stage</h2>

    <p>
      Our programs are designed to help students learn confidently
      at every level.
    </p>
  </div>

  <div className="program-grid">

    <div className="program-card">
      <div className="program-icon">🧸</div>
      <h3>Play Group</h3>
      <p>Fun and creative early learning for young children.</p>
    </div>

    <div className="program-card">
      <div className="program-icon">📚</div>
      <h3>Primary School</h3>
      <p>Strong foundations in reading, writing, maths and science.</p>
    </div>

    <div className="program-card">
      <div className="program-icon">🔬</div>
      <h3>Middle School</h3>
      <p>Building confidence, skills and deeper subject knowledge.</p>
    </div>

    <div className="program-card">
      <div className="program-icon">🎓</div>
      <h3>High School</h3>
      <p>Focused learning and preparation for future goals.</p>
    </div>

  </div>
</section>


<section className="gallery">
  <div className="section-heading">
    <p className="small-title">OUR SCHOOL</p>

    <h2>Explore Our School</h2>

    <p>
      Take a look at our beautiful school and learning environment.
    </p>
  </div>

  <div className="gallery-grid">

    {/* School Building */}
    <div className="gallery-card">
      <img
        src="/images/School.jpg"
        alt="School Building"
      />
      <h3>School Building</h3>
    </div>

    {/* Library */}
    <div className="gallery-card">
      <img
        src="/images/Library.jpeg"
        alt="School Library"
      />
      <h3>Library</h3>
    </div>

    {/* Computer Lab */}
    <div className="gallery-card">
      <img
      src="/images/Computer Lab.jpg"
      alt="Computer Lab"
      />
      <h3>Computer Lab</h3>
    </div>

    {/* Sports Area */}
    <div className="gallery-card">
      <img
      src="/images/Sports Area.webp"
      alt="Sport Area"
      />
      <h3>Sports Area</h3>
    </div>

  </div>
</section>

<section className="contact">
  <div className="section-heading">
    <p className="small-title">CONTACT US</p>
    <h2>Get In Touch With Us</h2>
    <p>
      Have questions about admissions or our programs? We are here to help.
    </p>
  </div>

  <div className="contact-content">
    <div className="contact-info">
      <h3>Bright Future School</h3>

      <p>📍 School Road, Lahore</p>
      <p>📞 +92 300 1234567</p>
      <p>✉️ info@brightfutureschool.com</p>
    </div>

    <div className="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>

      <button>Send Message →</button>
    </div>
  </div>
</section>

<footer className="footer">
  <div className="footer-content">

    <div>
      <h2>🎓 Bright Future School</h2>
      <p>Learn • Grow • Succeed</p>
    </div>

    <div>
      <h3>Quick Links</h3>
      <p>Home</p>
      <p>About</p>
      <p>Programs</p>
      <p>Gallery</p>
      <p>Contact</p>
    </div>

    <div>
      <h3>Contact</h3>
      <p>📍 School Road, Lahore</p>
      <p>📞 +92 300 1234567</p>
      <p>✉️ info@brightfutureschool.com</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Bright Future School. All Rights Reserved.</p>
  </div>
</footer>

    </>
  
  );
}

export default App;








