import Image from "next/future/image";
import s from "../styles/Home.module.scss";
import logo from "../public/images/logo.svg";
import vercel from "../public/vercel.svg";
import React from "react";
import Button from "@mui/material/Button";
import Head from "next/head";

var boolean = false;

if (typeof window !== "undefined" && localStorage.getItem("JS") === "ON") {
  boolean = true;
} else {
  boolean = false;
}

console.log(boolean);

export const config = {
  unstable_runtimeJS: boolean,
};

export default function HomePage() {
  const navList = ["Item", "Item", "Item", "Item"];
  const [state, SetState] = React.useState(null);
  const handleClick = (index) => {
    SetState(index);
  };

  return (
    <>
      <Head>
        <script src="/script.js" defer />
      </Head>

      <div className={s.page}>
        <header className={s.header}>
          <div className={s.header__wrapper}>
            <Image src={logo} alt="AppstoreSpy Logo" />
            <div className={s.header__nav}>
              {navList &&
                navList.map((item, index) => (
                  <li
                    className={state === index ? s.active : null}
                    onClick={() => handleClick(index)}
                    key={index}
                  >
                    {item}
                  </li>
                ))}
            </div>
            <div className={s.header__btns}>
              <button id="btnOn" data-boolean="true">
                JS On
              </button>
              <Button id="btnOff" variant="contained">
                JS Off
              </Button>
            </div>
          </div>
        </header>
        <div className={s.wrapper}>
          <div className={s.title}>
            <h1>Welcome to Next.js!</h1>
            <Image src={vercel} />
          </div>
          <div className={s.main}>
            <div onClick={() => console.log("Press")}></div>
            <div onClick={() => handleAction()}></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

// if (typeof window !== "undefined") {
//   var buttonValue = true;
//   if (localStorage.getItem("JS") === "ON") {
//     buttonValue = false;
//   } else {
//     buttonValue = true;
//   }
// }
