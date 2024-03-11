import React from "react";
import "./Subscribe.scss";
import axios from "axios";

import { Notify } from "notiflix";
import { useForm } from "react-hook-form";
function Subscribe() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // console.log(errors);
  // const onsubmit = async (data) => {
  //   console.log(data);

  //   const {
  //     name,
  //     email,
  //     phone,
  //     subscriptionType,
  //     subscriptionDuration,
  //     subscriptionPaymentMethod,
  //   } = data;
  //   try {
  //     const formData = new FormData();
  //     formData.append("name", name);
  //     formData.append("email", email);
  //     formData.append("phone", phone);
  //     formData.append("subscriptionType", subscriptionType);
  //     formData.append("subscriptionDuration", subscriptionDuration);
  //     formData.append("subscriptionPaymentMethod", subscriptionPaymentMethod);

  //     const res = await axios.post(
  //       "https://legal-tech-api.onrender.com/api/v1/sub/create",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
            
  //         },
  //       }
  //     );
    
  //   }
  //    catch (error) 
  //    {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="sub">
      <h2>Subscription Form</h2>
      <form className="from" >
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          // {...register("name", { required: true })}
        />
        {/* {errors.name?.type === "required" && (
          <p role="alert" className="v">
            Please name is required !
          </p>
        )} */}
        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
          // {...register("email", { required: true })}
        />
        {/* {errors.email?.type === "required" && (
          <p role="alert" className="v">
            Please user email is required !
          </p>
        )} */}
        <label for="phone">Phone:</label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Enter your Phone number"
          // {...register("phone", { required: true })}
        />
        {/* {errors.phone?.type === "required" && (
          <p role="alert" className="v">
            Please phone is required !
          </p>
        )} */}
        <label for="subscriptionType">Subscription Type:</label>
        <select
          id="subscriptionType"
          name="subscriptionType"
          // {...register("subscriptionType", { required: true })}
        >
          <option value="" disabled selected>
            Select subscription type
          </option>
          <option value="Basic">Basic</option>
          <option value="Standard">Premium</option>
          <option value="Premium">Gold</option>
          <option value="Premium">Diamond</option>
        </select>{" "}
        {/* {errors.subscriptionType?.type === "required" && (
          <p role="alert" className="v">
            Please case title is required !
          </p>
        )} */}
        <label for="subscriptionDuration">Subscription Duration:</label>
        <select
          id="subscriptionDuration"
          name="subscriptionDuration"
          // {...register("subscriptionDuration", { required: true })}
        >
          <option value="" disabled selected>
            Select subscription duration
          </option>
          <option value="1 Month">3 Months</option>
          <option value="3 Months">6 Months</option>
          <option value="6 Months">1 years</option>
          <option value="1 Year">2 Year</option>
          <option value="1 Year">10 Year</option>
        </select>
        {/* {errors.subscriptionDuration?.type === "required" && (
          <p role="alert" className="v">
            Please subscription duration is required !
          </p>
        )} */}
        <select
          id="subscriptionPaymentMethod"
          name="subscriptionPaymentMethod"
          // {...register("subscriptionPaymentMethod", { required: true })}
        >
          <option value="" disabled selected>
            Select payment method
          </option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
          <option value="Cheque">Cheque</option>
        </select>
        {/* {errors.subscriptionPaymentMethod?.type === "required" && (
          <p role="alert" className="v">
            Please subscription Payment Method is required !
          </p>
        )} */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Subscribe;
