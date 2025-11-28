import { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../data/products";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  let list = productsData.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "price-asc") list = list.slice().sort((a,b)=>a.price-b.price);
  if (sort === "price-desc") list = list.slice().sort((a,b)=>b.price-a.price);

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>All Products</h2>

        <div className="d-flex gap-2">
          <input
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ minWidth: 220 }}
          />
          <select className="form-select" value={sort} onChange={(e)=>setSort(e.target.value)}>
            <option value="default">Sort</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {list.map((p) => (
          <div key={p.id} className="col-sm-6 col-md-4 col-lg-3">
            <Link to={`/product/${p.id}`} className="text-decoration-none text-dark">
              <div className="card h-100">
                <div className="price-img">
                  <img src={p.image} alt={p.title} style={{height:200, objectFit:"cover", width:"100%"}} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
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

export default ProductsPage;
