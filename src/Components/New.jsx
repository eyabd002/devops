const New = () => {
  const items = [
    { id: 1, title: "Modern Armchair", price: "$99", img: "/image/chair.jpg" },
    { id: 2, title: "Luxury Couch", price: "$200", img: "/image/sofa.jpg" },
    { id: 3, title: "Dining Table Set", price: "$500", img: "/image/dining.jpg" },
    { id: 4, title: "Cozy Bed", price: "$350", img: "/image/bed.jpg" },
  ];

  return (
    <section className="new-arrivals text-center py-5">
      <h2 className="fw-bold">New Arrivals</h2>
      <p className="text-muted mb-4">Fresh new designs to upgrade your home</p>

      <div className="row g-4 justify-content-center">
        {items.map((p) => (
          <div className="col-12 col-sm-6 col-md-3" key={p.id}>
            <div className="card p-3 shadow-sm border-0 rounded-4">
              <div className="new-img-wrapper">
                <img src={p.img} alt={p.title} className="img-fluid rounded-4" />
              </div>
              <h5 className="mt-3 fw-bold">{p.title}</h5>
              <p className="text-muted">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default New;
