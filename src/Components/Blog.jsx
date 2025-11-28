const Blog = () => {
  return (
    <section id="blog" className="container py-5 text-center">

      <h2 className="fw-bold mb-4">Our Blog</h2>

      <div className="row">

        <div className="col-md-4 mb-3">
          <div className="card">
            <img src="/image/modern.jpg" className="card-img-top" />
            <div className="card-body">
              <h5>Modern Living Room Trends</h5>
              <p>Stylish and elegant designs for your home.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card">
            <img src="/image/cozy.jpg" className="card-img-top" />
            <div className="card-body">
              <h5>Cozy Bedroom Decor</h5>
              <p>Create a warm and peaceful environment.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card">
            <img src="/image/dinner.jpg" className="card-img-top" />
            <div className="card-body">
              <h5>Dining Room Trends 2025</h5>
              <p>Modern dining room decoration ideas.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
