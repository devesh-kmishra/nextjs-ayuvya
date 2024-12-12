"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  let [div1, setDiv1] = useState("active");
  let [div2, setDiv2] = useState("inactive");
  let [div3, setDiv3] = useState("inactive");

  function handleMouseEnter(e) {
    changeWidth(e);
    showNext(e);
  }

  function changeWidth(e) {
    if (e.currentTarget.classList.contains("div1")) {
      e.target.classList.add(div1);
      setDiv1("active");
      setDiv2("inactive");
      setDiv3("inactive");
    } else if (e.currentTarget.classList.contains("div2")) {
      e.target.classList.add(div2);
      setDiv2("active");
      setDiv1("inactive");
      setDiv3("inactive");
    } else if (e.currentTarget.classList.contains("div3")) {
      e.target.classList.add(div3);
      setDiv3("active");
      setDiv1("inactive");
      setDiv2("inactive");
    }
  }

  function showNext(e) {
    e.currentTarget.lastElementChild.style.display = 'inline';
  }

  function hideNext(e) {
    e.currentTarget.lastElementChild.style.display = 'none';
  }

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <main className="w-[80vw] h-[60vh] flex text-white">
        <div
          className={
            "div1 h-full w-[48vw] relative transition-all duration-200 ease-linear " +
            div1
          }
          onMouseEnter={handleMouseEnter} onMouseLeave={hideNext}
        >
          <Image
            src={"/images/strength.jpg"}
            alt="Man lifting barbell"
            width={3000}
            height={2000}
            className="h-full rounded-l-3xl object-cover"
          />
          <span className="absolute top-3 left-3">STRENGTH</span>
          <button type="button" className="absolute top-3 right-3 hidden">
            <Image
              src={"/images/next.png"}
              alt="Right arrow"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div
          className={
            "div2 w-[16vw] h-full relative transition-all duration-200 ease-linear " +
            div2
          }
          onMouseEnter={handleMouseEnter} onMouseLeave={hideNext}
        >
          <Image
            src={"/images/mobility.jpg"}
            alt="Women stretching"
            width={3000}
            height={2000}
            className="h-full object-cover"
          />
          <span className="absolute top-3 left-3">MOBILITY</span>
          <button type="button" className="absolute top-3 right-3 hidden">
            <Image
              src={"/images/next.png"}
              alt="Right arrow"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div
          className={
            "div3 w-[16vw] h-full relative transition-all duration-200 ease-linear " +
            div3
          }
          onMouseEnter={handleMouseEnter} onMouseLeave={hideNext}
        >
          <Image
            src={"/images/drills.jpg"}
            alt="Woman running"
            width={3000}
            height={2000}
            className="h-full rounded-r-3xl object-cover"
          />
          <span className="absolute top-3 left-3">DRILLS</span>
          <button type="button" className="absolute top-3 right-3 hidden">
            <Image
              src={"/images/next.png"}
              alt="Right arrow"
              width={20}
              height={20}
            />
          </button>
        </div>
      </main>
    </div>
  );
}
