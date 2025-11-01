import "./Newsletter.css";
export const Newsletter = () => {
  return (
    <>
      <div className="newsletter-wrapper container">
        <div className="newsletter-item">
          <h2>Subscribe To Our Newsletter</h2>
          <p>
            Subscribe to our latest newsletter to get news about special
            discounts and upcoming sales
          </p>
          <form className="newsletter-item-form">
            <label htmlFor="newsletter">
              <input
                type="email"
                name="email"
                id="newsletter"
                placeholder="Email"
              />
            </label>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
};
