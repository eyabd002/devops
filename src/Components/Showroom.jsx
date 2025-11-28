import { Link } from "react-router-dom";

const Showroom = () => {
  const items = [
    { id: 1, title: "Modern Sofa", price: "499", img: "/image/sofa.jpg" },
    { id: 2, title: "Wooden Bed", price: "799", img: "/image/bed.jpg" },
    { id: 3, title: "Dining Table", price: "899", img: "/image/dining.jpg" },
    { id: 4, title: "Living Room Set", price: "1299", img: "/image/living.jpg" },
    { id: 5, title: "Wardrobe", price: "450", img: "/image/robe.jpg" },
    { id: 6, title: "Office Chair", price: "199", img: "/image/chair.jpg" }
  ];

  // Convert list into groups of 3 for carousel
  const chunk = (arr, size) => {
    return arr.reduce((acc, _, i) =>
      i % size ? acc : [...acc, arr.slice(i, i + size)], []);
  };

  const slides = chunk(items, 3);

  return (
    <section className="container py-5">
      <h2 className="fw-bold text-center mb-4">Showroom</h2>

      <div id="showroomCarousel" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">

          {slides.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row justify-content-center">

                {group.map((item) => (
                  <div className="col-md-4 d-flex justify-content-center" key={item.id}>
                    <div className="showroom-card text-center p-3">
                      <img
                        src={item.img}
                        className="showroom-img"
                        alt={item.title}
                        onError={(e) => (e.target.src = "/placeholder.png")}
                      />
                      <h5 className="mt-3 fw-bold">{item.title}</h5>
                      <p className="text-muted">${item.price}</p>

                      <Link
                        to={`/product/${item.id}`}
                        className="btn btn-dark px-4 mt-2"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#showroomCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#showroomCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </section>
  );
};

export default Showroom;
