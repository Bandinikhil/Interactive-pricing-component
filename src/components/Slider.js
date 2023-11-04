import React from "react";
import slider from "../assets/images/icon-slider.svg";
import { useDispatch, useSelector } from "react-redux";
import { setPageviews } from "../utils/viewsSlice";
const Slider = () => {
  const PricingDeets = useSelector((store) => store.pricing.PricingDeets);
  const pageviews = useSelector((store) => store.views.pageviews);
  const isMonthly = useSelector((store) => store.views.isMonthly);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.themes.theme);
  function formatCurrency(amt) {
    return amt.toLocaleString(undefined, {
      currency: "USD",
      style: "currency",
    });
  }

  function updateRangePosition(pageviews) {
    if (pageviews === 1) {
      return "0%";
    }
    if (pageviews === 5) {
      return "100%";
    }
    return `${(pageviews - 1) * 20}%`;
  }

  return (
    <>
      <div className={theme === true ? "bg-black" : ""}>
        <div className="slider-wrapper ">
          <p className="uppercase pageviews">
            {PricingDeets[pageviews].pageviews} pageviews
          </p>
          <div className="range-wrapper">
            <input
              type="range"
              name="pageviews"
              id="pageviews"
              min="1"
              max="5"
              step="1"
              aria-label={`${PricingDeets[pageviews].pageviews} pageviews`}
              value={pageviews}
              onInput={(e) => {
                dispatch(setPageviews(e.target.value));
              }}
            />
            <div
              className="fake-range"
              style={{
                "--width": updateRangePosition(pageviews),
              }}
            >
              <div className="track">
                <div className="filled"></div>
              </div>
              <div
                className="thumb"
                style={{
                  transform: `translateX(${pageviews === 5 ? "-100%" : "0"})`,
                }}
              >
                <img src={slider} alt="" />
              </div>
            </div>
          </div>
          <p className="amt-wrapper">
            <span
              className={theme === true ? "text-gray-300  text-4xl" : "amt"}
            >
              {formatCurrency(
                PricingDeets[pageviews][isMonthly ? "monthly" : "yearly"]
              )}
            </span>
            / {isMonthly ? "month" : "year"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Slider;
