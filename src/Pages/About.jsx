import './style.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Our Store</h1>
        <p>
          Welcome to our E-Commerce Store. We provide high-quality fashion products
          with modern styles at affordable prices.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Quality Products</h3>
            <p>We focus on delivering premium quality products to customers.</p>
          </div>

          <div className="about-card">
            <h3>Fast Delivery</h3>
            <p>Quick and reliable delivery services across the country.</p>
          </div>

          <div className="about-card">
            <h3>Customer Support</h3>
            <p>24/7 support to help customers with their shopping experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
