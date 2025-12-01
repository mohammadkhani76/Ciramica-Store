import { useLocalStorage } from "./useLocalStorage";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
export const useNewsletterForm = () => {
  const { saveToLocalStorage, loadFromLocalStorage } =
    useLocalStorage("_newsletter");
  const schema = yup.object().shape({
    email: yup.string().email("email invalid").required("email is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onForm = (data) => {
    const raw = loadFromLocalStorage();
    const allEmails = Array.isArray(raw) ? raw : [];

    // Duplicate Email
    const isDuplicate = allEmails.some((item) => item.email === data.email);

    if (isDuplicate) {
      return toast.error("This email is already subscribed!");
    }

    const updatedEmail = [...allEmails, data];

    console.log(updatedEmail);
    saveToLocalStorage(updatedEmail);
    toast.success("Subscribed successfully!");
    reset();
  };
  return { register, handleSubmit, onForm, reset, errors };
};
