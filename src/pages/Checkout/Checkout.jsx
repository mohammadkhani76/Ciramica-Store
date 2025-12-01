import "./Checkout.css";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { useParams } from "react-router";
import { useCheckout } from "../../customHook/useCheckout";
import { CheckoutStep1 } from "./_component/CheckoutStep1";
import { CheckoutStep2 } from "./_component/CheckoutStep2";

export const Checkout = () => {
  const { id } = useParams();
  const { step, setStep, register, handleSubmit, errors, onForm, setLocation } =
    useCheckout(id);
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
              <CheckoutStep1
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={handleSubmit(onForm)}
              />
            )}

            {step === 2 && (
              <CheckoutStep2
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={handleSubmit(onForm)}
                setStep={setStep}
                setLocation={setLocation}
              />
            )}
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  );
};
