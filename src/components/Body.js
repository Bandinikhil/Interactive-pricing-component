import bkg from "../assets/images/bg-pattern.svg";
import circles from "../assets/images/pattern-circles.svg";

import Slider from "./Slider";
import Billing from "./Billing";

import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../utils/themeSlice";

function Body() {
  const theme = useSelector((store) => store.themes.theme);
  const dispatch = useDispatch();

  return (
    <>
      <div className={theme === true ? "darks" : " bodys"}>
        <div className="fixed top-5 right-10 duration-100 bg-gray-200 rounded-lg">
          <button
            className="w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600 border-gray-400"
            onClick={() => dispatch(setTheme())}
          >
            {theme === true ? (
              <ion-icon name="sunny"></ion-icon>
            ) : (
              <ion-icon name="moon"></ion-icon>
            )}
          </button>
        </div>
        <div
          className={
            theme === true ? "grid-xl bg-black rounded-lg " : "grid-xl"
          }
        >
          {theme === true ? (
            <img
              className="bg-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjYVHRQZtY7mUEfuG-qzaTR5gaK-Rg0prOwJMwuSsFQ&s"
              alt="bgimage"
            />
          ) : (
            <img className="bg-image" src={bkg} alt="" />
          )}

          <div className="grid-md relative">
            {theme !== true && <img src={circles} alt="" className="circles" />}

            <h1
              className={
                theme === true ? "text-gray-300 text-3xl" : "h1 text-3xl"
              }
            >
              Simple, traffic-based pricing
            </h1>
            <div className="text-wrapper">
              <p>Sign-up for our 30-day trial.</p>
              <p>No credit required.</p>
            </div>
          </div>
          <div className={theme === true ? "bg-black rounded-md" : ""}>
            <div className={theme === true ? "dark z-40" : "card z-40"}>
              <Slider />
              <Billing />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
