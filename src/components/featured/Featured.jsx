import React from "react";
import "./feature.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import { LiaAngleUpSolid } from "react-icons/lia";
import "react-circular-progressbar/dist/styles.css";

function Featured() {
  return (
    <div className="features">
      <div className="toped">
        <h1 className="title"> Latests submission</h1>
        <BsThreeDotsVertical fontSize="small" />
      </div>

      <div className="bottoms">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title">Available submission</p>
        <p className="amount">10</p>
        <p className="desc">
          Previous Cases processing. Last Payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <AiOutlineDown fontSize="small" />
              <div className="resultAmount">12.54k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <LiaAngleUpSolid fontSize="small" />
              <div className="resultAmount">12.54k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <LiaAngleUpSolid fontSize="small" />
              <div className="resultAmount">12.54k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
