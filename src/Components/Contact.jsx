const Contact = () => {
  return (
    <section id="contact" className="container py-5">

      <h2 className="fw-bold text-center">Contact Us</h2>

      <div className="row mt-4">

        <div className="col-md-6">
          <p><i className="fa-solid fa-location-dot me-2"></i> Monastir, Tunisia</p>
          <p><i className="fa-solid fa-phone me-2"></i> +216 59 585 213</p>
          <p><i className="fa-solid fa-envelope me-2"></i> support@furniture.com</p>
        </div>

        <div className="col-md-6">
          <form>
            <input className="form-control mb-2" placeholder="Your Name" />
            <input className="form-control mb-2" placeholder="Your Email" />
            <textarea className="form-control mb-2" rows="4" placeholder="Your Message"></textarea>
            <button className="btn btn-dark">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
