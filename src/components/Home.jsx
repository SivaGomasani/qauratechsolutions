import "../static/Home.css";

const Home = () => {
  return (
    <section className="hero" id="home">
      
   

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="hero-content">
       <h1>
        Build. Innovate. Dominate. <br />
        with <span className="gradient-text">QAura Tech Solutions</span>
      </h1>

      <p>
        We transform ambitious learners into industry-ready professionals through 
        AI innovation, real-time projects, full-stack mastery, and strategic 
        career acceleration programs.
      </p>

        <div className="hero-buttons">
          <a href="/services"><button className="primary-btn">Explore Services</button></a>
          <a href="/contact"><button className="secondary-btn">Contact Us</button></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
