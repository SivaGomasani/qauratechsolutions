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
          Shape Your Future <br />
          with <span className="gradient-text">QAura Tech Solutions</span>
        </h1>

        <p>
          Empowering students, job seekers, and professionals with
          cutting-edge digital solutions, career guidance, and powerful
          branding strategies.
        </p>

        <div className="hero-buttons">
          <a href="#services"><button className="primary-btn">Explore Services</button></a>
          <a href="#contact"><button className="secondary-btn">Contact Us</button></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
