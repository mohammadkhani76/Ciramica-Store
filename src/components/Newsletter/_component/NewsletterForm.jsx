import { useNewsletterForm } from "../../../customHook/useNewsletterForm";
import "./../Newsletter.css";

export const NewsletterForm = () => {
  const { register, handleSubmit, onForm, reset, errors } = useNewsletterForm();

  return (
    <form className="newsletter-item-form" onSubmit={handleSubmit(onForm)}>
      <div className="newsletter-item-form-lable">
        <label htmlFor="newsletter">
          <input
            type="email"
            id="newsletter"
            placeholder="Email"
            {...register("email")}
          />
        </label>
        <button type="submit">Subscribe</button>
      </div>

      <div> {errors.email && <p>{errors.email.message}</p>}</div>
    </form>
  );
};
