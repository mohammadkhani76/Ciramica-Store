export const CheckoutStep1 = ({ register, errors, onSubmit }) => {
  return (
    <form className="checkout-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label>
          Full Name
          <input
            type="text"
            placeholder="Your full name"
            {...register("name")}
          />
        </label>
        {errors.name && <p>{errors.name.message}!</p>}
      </div>

      <div className="form-group">
        <label>
          Email
          <input
            type="email"
            placeholder="Email address"
            {...register("email")}
          />
        </label>
        {errors.email && <p>{errors.email.message}!</p>}
      </div>

      <div className="form-group">
        <label>
          Phone
          <input
            type="text"
            placeholder="Phone number"
            {...register("phone")}
          />
        </label>
        {errors.phone && <p>{errors.phone.message}!</p>}
      </div>
      <div className="form-btn">
        <button className="btn active" type="submit">
          Next
        </button>
      </div>
    </form>
  );
};
