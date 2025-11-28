const Pricing = () => {
  return (
    <section id="pricing" className="container text-center py-5">

      <h2 className="fw-bold mb-4">Pricing</h2>

      <div className="row g-4">

        {[
          { img: "arm.jpg", title: "Arm Chair", price: "$99.00" },
          { img: "sofa.jpg", title: "Couch", price: "$200.00" },
          { img: "li.jpg", title: "Lighting", price: "$40.00" },
        ].map((item, i) => (
          <div className="col-md-4" key={i}>
            <div className="card shadow-sm h-100">
              <img 
                src={`/image/${item.img}`} 
                className="card-img-top" 
                alt={item.title} 
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4>{item.title}</h4>
                <p className="text-muted">{item.price}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Pricing;
