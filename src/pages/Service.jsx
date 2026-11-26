
function Service() {
  return (
    <section className="container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <div className="row justify-content-center">
        <div className="col-md-7">

          <div className="card shadow p-4">
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for contacting us!');
            }}>

              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control"
                  placeholder="Enter your name" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control"
                  placeholder="Enter your email" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control"
                  placeholder="Enter subject" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4"
                  placeholder="Write your message" required />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Service;
