import { useState } from "react";
import "./Checkout.css";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { LocationMap } from "./_component/LocationMap";
export const Checkout = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserdata] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    zipcode: "",
    location: { lat: null, lng: null },
  });

  const handelChange = (e) => {
    setUserdata((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const formHandel = (e) => {
    e.preventDefault();

    const nameIsValid = /^[a-zA-Zآ-ی\s]{3,}$/.test(userData.name);
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email);
    const phoneIsValid = /^(09\d{9}|\d{8,15})$/.test(userData.phone);
    const cityIsValid = /^[a-zA-Zآ-ی\s]{3,}$/.test(userData.city);
    const addressIsValid = /^[a-zA-Z0-9آ-ی\s\.,\-]{10,}$/.test(
      userData.address
    );
    const zipcodeIsValid = /^\d{4,10}$/.test(userData.zipcode);
    const countryIsValid = userData.country !== "";

    if (step === 1) {
      if (!nameIsValid || !emailIsValid || !phoneIsValid) {
        alert("Step 1 form is not valid");
        return;
      }
      setStep(2);
    }

    if (step === 2) {
      if (
        !cityIsValid ||
        !addressIsValid ||
        !zipcodeIsValid ||
        !countryIsValid
      ) {
        alert("Step 2 form is not valid");
        return;
      }
      console.log("Final Submitted:", userData);
      alert("Form submitted successfully!");

      // reset form
      setUserdata({
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        address: "",
        zipcode: "",
      });

      // step 1
      setStep(1);
    }
  };
  return (
    <>
      <div className="mainContainer container">
        <div className="checkout-wrapper">
          <h1>Customer Details</h1>
          <div className="checkout">
            <div className="checkout-progress-container">
              <div className={`progress-circle ${step >= 1 ? "active" : ""}`}>
                Step1
              </div>

              <div
                className={`progress-line ${step >= 2 ? "active" : ""}`}
              ></div>

              <div className={`progress-circle ${step >= 2 ? "active" : ""}`}>
                Step2
              </div>
            </div>

            {step === 1 && (
              <form className="checkout-form" onSubmit={formHandel}>
                <div className="form-group">
                  <label>
                    Full Name
                    <input
                      type="text"
                      name={"name"}
                      placeholder="Your full name"
                      value={userData.name}
                      onChange={handelChange}
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label>
                    Email
                    <input
                      type="email"
                      name={"email"}
                      placeholder="Email address"
                      value={userData.email}
                      onChange={handelChange}
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label>
                    Phone
                    <input
                      type="text"
                      name={"phone"}
                      placeholder="Phone number"
                      value={userData.phone}
                      onChange={handelChange}
                    />
                  </label>
                </div>
                <div className="form-btn">
                  <button className="btn active" type="submit">
                    Next
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form className="checkout-form" onSubmit={formHandel}>
                <div className="form-group">
                  <label>
                    Country
                    <select
                      name={"country"}
                      value={userData.country}
                      onChange={handelChange}
                    >
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
                </div>

                <div className="form-group">
                  <label>
                    City
                    <input
                      type="text"
                      name={"city"}
                      placeholder="City"
                      value={userData.city}
                      onChange={handelChange}
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label>
                    Address
                    <input
                      type="text"
                      name={"address"}
                      placeholder="Full address"
                      value={userData.address}
                      onChange={handelChange}
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label>
                    Zip Code
                    <input
                      type="text"
                      name={"zipcode"}
                      placeholder="Zip Code"
                      value={userData.zipcode}
                      onChange={handelChange}
                    />
                  </label>
                </div>

                <div className="form-group map">
                  <label>Your Location (Auto Detect):</label>
                  <LocationMap
                    onLocationSelect={(loc) =>
                      setUserdata((prev) => ({ ...prev, location: loc }))
                    }
                  />
                </div>
                <div className="form-btn">
                  <button className="btn" onClick={() => setStep(1)}>
                    Before
                  </button>

                  <button className="btn active" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  );
};
