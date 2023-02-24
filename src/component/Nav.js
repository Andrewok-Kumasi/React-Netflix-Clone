import { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState([]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;
