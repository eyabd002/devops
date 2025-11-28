import { useParams, Link } from "react-router-dom";
import productsData from "../data/products";

const Category = () => {
  const { category } = useParams();
  const filtered = productsData.filter((p) => p.category === category);

  return (
    <section className="container py-5">
      <h2 className="mb-4">Category: {category.replace(/-/g, " ")}</h2>

      {filtered.length === 0 && <p>No products in this category yet.</p>}

      <div className="row g-4">
        {filtered.map((p) => (
          <div key={p.id} className="col-sm-6 col-md-4 col-lg-3">
            <Link to={`/product/${p.id}`} className="text-decoration-none text-dark">
              <div className="card h-100">
                <div className="price-img">
                  <img src={p.image} alt={p.title} style={{height:200, objectFit:"cover", width:"100%"}} />
                </div>
                <div className="card-body">
                  <h5>{p.title}</h5>
                  <p className="text-muted">${p.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
