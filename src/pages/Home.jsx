const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern websites.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating attractive and user-friendly designs.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600'
  },
  {
    title: 'Digital Solutions',
    description: 'Providing smart digital solutions for business.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600'
  }
];

function Home() {
  return (
    <>
      {/* HOME SLIDER */}
      <div
        id="homeSlider"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button data-bs-target="#homeSlider" data-bs-slide-to="0" className="active"></button>
          <button data-bs-target="#homeSlider" data-bs-slide-to="1"></button>
          <button data-bs-target="#homeSlider" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400"
              className="d-block w-100 slider-img"
              alt="Technology"
            />
            <div className="carousel-caption">
              <h1>Welcome to My Website</h1>
              <p>Explore our digital world</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400"
              className="d-block w-100 slider-img"
              alt="Teamwork"
            />
            <div className="carousel-caption">
              <h1>Creative Ideas</h1>
              <p>Innovation and Creativity</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400"
              className="d-block w-100 slider-img"
              alt="Workspace"
            />
            <div className="carousel-caption">
              <h1>Discover Our Services</h1>
              <p>Building a Better Future</p>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev"
          type="button" data-bs-target="#homeSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next"
          type="button" data-bs-target="#homeSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* ABOUT SECTION */}
      <section className="container py-5" id="about">
        <div className="row align-items-center">

          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
              className="img-fluid rounded shadow about-img"
              alt="Our Team"
            />
          </div>

          <div className="col-md-6">
            <h1 className="fw-bold mb-3">About Us</h1>

            <p>
              We are a creative and innovative digital solutions
              company dedicated to helping businesses grow in
              the modern digital world.
            </p>

            <p>
              Our team focuses on delivering high-quality web
              development, UI/UX design and digital solutions.
              We believe in creativity, teamwork and continuous
              improvement.
            </p>

            <p>
              Our goal is to create user-friendly, responsive
              and modern websites that provide the best
              experience to our customers.
            </p>

            <button className="btn btn-primary">
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-4 text-center">
                <h2 className="text-primary">Our Mission</h2>
                <p>
                  Our mission is to provide innovative,
                  reliable and affordable digital solutions
                  that help businesses achieve their goals.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-4 text-center">
                <h2 className="text-primary">Our Vision</h2>
                <p>
                  Our vision is to become a trusted digital
                  partner by creating modern technology
                  solutions and building long-term relationships
                  with customers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">
          Why Choose Us?
        </h2>

        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <h4>Quality Work</h4>
              <p>
                We focus on delivering high-quality
                and reliable solutions.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <h4>Creative Ideas</h4>
              <p>
                We use creative ideas to build
                modern and attractive designs.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <h4>Customer Support</h4>
              <p>
                Customer satisfaction is our priority.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="container py-5" id="services">

        <h1 className="text-center mb-3">Our Services</h1>

        <p className="text-center text-muted mb-5">
          We provide the best digital services for your business.
        </p>

        <div className="row">

          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>

              <div className="card shadow h-100">

                <img
                  src={service.image}
                  className="card-img-top service-img"
                  alt={service.title}
                />

                <div className="card-body text-center d-flex flex-column">

                  <h3 className="card-title">
                    {service.title}
                  </h3>

                  <p className="card-text">
                    {service.description}
                  </p>

                  <button className="btn btn-outline-primary mt-auto">
                    Read More
                  </button>

                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="container py-5" id="contact">

        <h1 className="text-center mb-3">Contact Us</h1>

        <p className="text-center text-muted mb-5">
          Get in touch with us. We would love to hear from you!
        </p>

        <div className="row justify-content-center">

          <div className="col-md-8">
            <div className="card shadow p-4">

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! Your message has been submitted.');
                  e.target.reset();
                }}
              >

                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>

    </>
  );
}

export default Home;