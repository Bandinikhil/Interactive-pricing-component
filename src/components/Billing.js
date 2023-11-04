import React from "react";
import checkMark from "../assets/images/icon-check.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsMonthly } from "../utils/viewsSlice";
const Billing = () => {
  const theme = useSelector((store) => store.themes.theme);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={
          theme === true ? "billing-wrapper bg-black" : "billing-wrapper"
        }
      >
        <input
          type="checkbox"
          name="billingType"
          id="billingType"
          onClick={(e) => {
            dispatch(setIsMonthly());
          }}
        />
        <label htmlFor="billingType" className="billing-type">
          <p>Monthly Billing</p>
          <div className="fake-checkbox"></div>
          <p>Yearly Billing </p>
          <span class="badge">
            25% <span>discount</span>
          </span>
        </label>
      </div>
      <div
        className={
          theme === true
            ? "grid-md checkmark-wrapper bg-black"
            : "grid-md checkmark-wrapper"
        }
      >
        <div className="checkmarks">
          <div className="flex-sm">
            <img src={checkMark} alt="" />
            <p>Unlimited websites</p>
          </div>
          <div className="flex-sm">
            <img src={checkMark} alt="" />
            <p>100% data ownership</p>
          </div>
          <div className="flex-sm">
            <img src={checkMark} alt="" />
            <p>Email reports</p>
          </div>
        </div>
        <button className={theme === true ? "btn text-gray-100" : "btn"}>
          Start my trial
        </button>
      </div>
    </>
  );
};

export default Billing;
