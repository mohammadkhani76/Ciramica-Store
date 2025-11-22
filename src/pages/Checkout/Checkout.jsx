import { useState } from "react";
import "./Checkout.css";
export const Checkout = () => {
  // async function getUserInfo(data) {
  //   const res = await fetch("", {
  //     method: "POST",
  //     headers: { "Context-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  //   const newdata = await res.json();
  //   setUserdata(newdata);
  // }
  const [userData, setUserdata] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    zipcode: "",
  });

  const handelChange = (e) => {
    setUserdata((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };
  const formHandel = (e) => {
    e.preventDefault();
    //
    const nameIsValid = /^[a-zA-Zآ-ی\s]{3,}$/.test(userData.name);
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email);
    const phoneIsValid = /^(09\d{9}|\d{8,15})$/.test(userData.phone);
    const cityIsValid = /^[a-zA-Zآ-ی\s]{3,}$/.test(userData.city);
    const addressIsValid = /^[a-zA-Z0-9آ-ی\s\.,\-]{10,}$/.test(
      userData.address
    );
    const zipcodeIsValid = /^\d{4,10}$/.test(userData.zipcode);
    const countryIsValid = userData.country !== "";
    if (
      !nameIsValid ||
      !emailIsValid ||
      !phoneIsValid ||
      !cityIsValid ||
      !addressIsValid ||
      !zipcodeIsValid ||
      !countryIsValid
    ) {
      alert(" Form is not valid");
      return;
    }

    console.log(" Submitted:", userData);
  };
  return (
    <>
      <div className="mainContainer container">
        <div className="checkout-wrapper">
          <h1>Customer Details</h1>
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
            {/* ⭐ دکمه گرفتن لوکیشن */}
            <div className="form-group">
              <label>Your Location</label>
            </div>
            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
