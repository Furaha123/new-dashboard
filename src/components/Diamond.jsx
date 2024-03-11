import React from "react";
import "../style/PaymentFill.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";
function Diamond({ handleDiamond }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const onsubmit = async (data) => {
    console.log(data);

    const { name, description, price, subscriptionType, duration, userNumber } =
      data;

    try {
      let auth = JSON.parse(localStorage.getItem("IsLoggedIn"));
      const formData = new FormData();
      // formData.append("name", name);
      // formData.append("description", description);
      formData.append("price", price);
      // formData.append("subscriptionType", subscriptionType);
      // formData.append("duration", duration);
      formData.append("userNumber", userNumber);

      const res = await axios.post(
        "https://legal-tech-api.onrender.com/api/v1/sub/create",
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth.access_token}`,
          },
        }
      );
      Notify.success("your subscription payment successfully");
      if (res.data) {
        console.log("subscription submitted", res.data);
      }
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="PaymentFillModal">
      <div
        className="PaymentFillModalContent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="PaymentOne">
          <div className="containers">
            <div>
              <h1>Diamond</h1>
            </div>
            <div className="texsub1">
              <h5>
                Welcome to <span className="sp">Legal Tech Company!</span> We
                appreciate your trust in our legal services. To proceed with us
                please fill the form to pay
                <span className="ss">
                  Diamond subscription on price of 1000Rwf
                </span>
              </h5>
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="row">
                <div className="col">
                  <div className="inputBox">
                    <span>Price :</span>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      value="1000"
                      {...register("price", { required: true })}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="inputBox">
                    <span>User number :</span>
                    <input
                      type="number"
                      placeholder="078---------------"
                      name="userNumber"
                      id="userNumber"
                      {...register("userNumber", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className="pbtn">
                <button type="submit" className="submit-btn">
                  Pay
                </button>
                <button className="close-btn" onClick={handleDiamond}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diamond;
