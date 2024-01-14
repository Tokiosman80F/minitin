import React from "react";
import payment from "../../../assets/images/footer/payment.png"
const Copyright = () => {
  return (
    <div>
      <footer className="footer items-center p-4  bg-black text-white">
        <aside className="items-center grid-flow-col">
          <p>©2024 MiniTeen - All rights Reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"> <img src={payment} alt="" /> </nav>
      </footer>
    </div>
  );
};
<footer className="footer items-center ">
  <aside className="items-center grid-flow-col">
    <p>©2024 MiniTeen - All rights Reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"><img src={payment} alt="" /></nav>
</footer>;

export default Copyright;
