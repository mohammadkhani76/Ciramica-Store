import { NewsletterForm } from "./_component/NewsletterForm";

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
          <NewsletterForm />
        </div>
      </div>
    </>
  );
};
