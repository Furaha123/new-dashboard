import React from "react";

import "./new.scss";
import NewImage from "../new/images/travel.jpeg";
import { AiOutlineCloudUpload } from "react-icons/ai";
function New() {
  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Add New Tour</h1>
        </div>
        <div className="bottom1">
          <div className="left">
            <img src={NewImage} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  {" "}
                  Image <AiOutlineCloudUpload className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Destination</label>
                <input type="text" />
              </div>

              <div className="formInput">
                <label>Title</label>
                <input type="text" />
              </div>

              <div className="formInput">
                <label>Description</label>
                <input type="text" />
              </div>

              <div className="formInput">
                <label>Duration</label>
                <input type="number" />
              </div>

              <div className="formInput">
                <label>GroupSize</label>
                <input type="number" />
              </div>

              <div className="formInput">
                <label>Price</label>
                <input type="number" />
              </div>

              <div className="formInput">
                <label>Discount</label>
                <input type="text" />
              </div>

              <div className="formInput">
                <label>TourType</label>
                <input type="text" />
              </div>

              <div className="formInput">
                <label>Departure</label>
                <input type="text" />
              </div>

              <div className="formInput">
                <label>Seats</label>
                <input type="number" />
              </div>

              <div className="formInput">
                <label>From Month</label>
                <input type="date" />
              </div>

              <div className="formInput">
                <label>To Month</label>
                <input type="date" />
              </div>

              <div className="formInput">
                <label>DepartureTime</label>
                <input type="text" />
              </div>

              <div className="formInput">
                <label>Return Time</label>
                <input type="text" />
              </div>

              <div className="formInput">
                <label>Prince Included</label>
                <input type="text" />
              </div>

              <div className="formInput">
                <label>Price Not Included</label>
                <input type="text" />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
