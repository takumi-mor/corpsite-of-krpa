import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className={classes.bg}>
        <div className={classes.left}>
          <Link to={"/"}>
            <div className={classes.img}></div>
          </Link>
        </div>
        <div className={classes.right}>
          <ul className={`${classes.contents} ${menuOpen ? classes.open : ""}`}>
            <li className={classes.content}>
              <Link to={"/"}>事業概要</Link>
            </li>
            <li className={classes.content}>
              <Link to={"/abouts"}>会社概要</Link>
            </li>
            <li className={classes.content}>
              <Link to={"/for-company"}>採用担当者様はこちら</Link>
            </li>
          </ul>
          <button
            className={classes.hunberger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={classes.line1}></div>
            <div className={classes.line1}></div>
            <div className={classes.line2}></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
