import { useState } from "react";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { useLocalStorage } from "./useLocalStorage";
import { useBasket } from "./useBasket";
import { useBasketStore } from "../Store/CartStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const useCheckout = (id) => {
  // -------------------- STATES --------------------
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const navigate = useNavigate();
  // -------------------- SCHEMAS --------------------
  const step1Schema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email("email invalid").required("email is required"),
    phone: yup
      .string()
      .matches(/^\d{11}$/, "must be 11 digits")
      .required("phone required"),
  });

  const step2Schema = yup.object().shape({
    country: yup.string().required("country required"),
    city: yup.string().required("city required"),
    address: yup.string().required("address required"),
    zipcode: yup.string().required("zipcode required"),
  });

  const schema = step === 1 ? step1Schema : step2Schema;

  // -------------------- REACT HOOK FORM --------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // -------------------- BASKET --------------------

  const { basket } = useBasketStore();
  const shopBasket =
    basket.find((shop) => shop.shopID === Number(id))?.basket || [];

  const { saveToLocalStorage } = useLocalStorage("orders");
  const { removeShopBasket } = useBasket();
  // -------------------- SUBMIT HANDLER --------------------
  const onForm = (data) => {
    if (step === 1) {
      return setStep(2);
    }
    if (!location.lat || !location.lng) {
      return toast.error("Select your location on map");
    }

    const Orders = [
      {
        user: { ...data, location },
        products: shopBasket,
        shopID: Number(id),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      },
    ];
    // console.log(Orders);
    saveToLocalStorage(Orders);
    removeShopBasket(Number(id));
    toast.success("Form submitted successfully!", {
      onClose: () => navigate("/"),
    });
  };
  // -------------------- RETURN --------------------

  return {
    step,
    setStep,
    location,
    setLocation,
    register,
    handleSubmit,
    errors,
    onForm,
  };
};
