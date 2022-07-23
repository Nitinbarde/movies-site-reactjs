import React from "react";
import styles from "./Navbar.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navbar() {
  return (
    <>
      <div className={styles.headerContainer}>
     
        <nav className={styles.headerNav}>
          <div>
            <div className={styles.logo1}>EDYODA</div>
            <span className={styles.logo2}>Stories</span>
          </div>
          <div className={styles.dropdown}>
            Explore Categories
            <ArrowDropDownIcon className={styles.dropdownIcone} />
          </div>
          <div className={styles.subHeading}>
            <p className={styles.edyodaText}>
              Edyoda is free learning and Knowledge <br /> Sharing platform for
              techies
            </p>
          </div>
          <div className={styles.button}>
            <button className={styles.headerButton}>Go To Main Website</button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
