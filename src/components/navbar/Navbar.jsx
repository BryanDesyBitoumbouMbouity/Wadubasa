"use client";
import SwitchLocal from "../switchLocal/SwitchLocal";
import ToggleTheme from "../toggleTheme/toggleThem";
import Links from "./links/Links";
import Styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>Wadubasa</div>
      <div style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
        <ToggleTheme />
        <SwitchLocal />
        <Links />
      </div>
    </div>
  );
};
export default Navbar;
