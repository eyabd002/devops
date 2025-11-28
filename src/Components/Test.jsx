const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah M.",
      review: "Amazing quality furniture! My living room looks completely new.",
    },
    {
      name: "Omar K.",
      review: "Fast delivery and premium materials. Definitely recommended.",
    },
    {
      name: "Lina A.",
      review: "I love the modern sofa set! Worth every dinar.",
    },
  ];

  return (
    <section className="container py-5 text-center">
      <h2 className="fw-bold mb-4">What Our Customers Say</h2>

      <div className="row g-4 justify-content-center">
        {reviews.map((item, i) => (
          <div key={i} className="col-md-4">
            <div className="testimonial-box p-4">
              <p className="mb-3">“{item.review}”</p>
              <h6 className="fw-bold">{item.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
