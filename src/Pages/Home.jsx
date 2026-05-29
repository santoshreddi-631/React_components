import './style.css';

function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Upgrade Your Style</h1>
          <p>
            Discover trending fashion collections with premium quality and modern designs.
          </p>
          <button>Shop Now</button>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>

        <div className="product-container">
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000"
              alt="T-Shirt"
            />
            <h3>Classic T-Shirt</h3>
            <p>₹799</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000"
              alt="Shoes"
            />
            <h3>Running Shoes</h3>
            <p>₹2499</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000"
              alt="Hoodie"
            />
            <h3>Winter Hoodie</h3>
            <p>₹1499</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
