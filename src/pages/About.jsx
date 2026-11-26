function About() {
  return (
    <>
      {/* About Header */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">About Us</h1>
          <p className="lead">
            Learn More About Our Company
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container py-5">
        <div className="row align-items-center">

          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
              className="img-fluid rounded shadow about-img"
              alt="Our Team"
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">
              Welcome to Our Website
            </h2>

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

      {/* Mission and Vision */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-4 text-center">
                <h2 className="text-primary">
                  Our Mission
                </h2>
                <p>
                  Our mission is to provide innovative,
                  reliable and affordable digital solutions
                  that help businesses achieve their goals.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-4 text-center">
                <h2 className="text-primary">
                  Our Vision
                </h2>
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

      {/* Why Choose Us */}
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
                Customer satisfaction is our
                priority.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;