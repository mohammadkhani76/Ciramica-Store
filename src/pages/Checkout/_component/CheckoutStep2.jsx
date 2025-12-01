import { LocationMap } from "./LocationMap";

export const CheckoutStep2 = ({
  register,
  errors,
  onSubmit,
  setStep,
  setLocation,
}) => {
  return (
    <form className="checkout-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label>
          Country
          <select {...register("country")}>
            <option value="" disabled hidden>
              select country...
            </option>
            <option value="iran">Iran</option>
            <option value="turkey">Turkey</option>
            <option value="uae">UAE</option>
            <option value="germany">Germany</option>
            <option value="uk">United Kingdom</option>
          </select>
        </label>
        {errors.country && <p>{errors.country.message}!</p>}
      </div>

      <div className="form-group">
        <label>
          City
          <input type="text" placeholder="City" {...register("city")} />
        </label>
        {errors.city && <p>{errors.city.message}!</p>}
      </div>

      <div className="form-group">
        <label>
          Address
          <input
            type="text"
            placeholder="Full address"
            {...register("address")}
          />
        </label>
        {errors.address && <p>{errors.address.message}!</p>}
      </div>

      <div className="form-group">
        <label>
          Zip Code
          <input type="text" placeholder="Zip Code" {...register("zipcode")} />
        </label>
        {errors.zipcode && <p>{errors.zipcode.message}!</p>}
      </div>

      <div className="form-group map">
        <label>Your Location (Auto Detect):</label>
        <LocationMap onLocationSelect={(loc) => setLocation(loc)} />
      </div>
      <div className="form-btn">
        <button className="btn" type="button" onClick={() => setStep(1)}>
          Before
        </button>

        <button className="btn active" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
