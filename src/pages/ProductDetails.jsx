import { useParams, Link } from "react-router-dom";
import productsData from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <section className="container py-5">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-outline-primary mt-3">Back to products</Link>
      </section>
    );
  }

  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="price-img">
            <img src={product.image} alt={product.title} style={{width:"100%", height:400, objectFit:"cover"}} />
          </div>
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">${product.price}</p>
          <p>{product.description}</p>

          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-dark">Add to Cart</button>
            <button className="btn btn-outline-secondary">Save</button>
          </div>

          <div className="mt-4">
            <Link to="/products">Back to products</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
