import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const header = () => {
  return (
    <>
      <div className={classes.bg}>
        <div className={classes.left}>
          <Link to={"/"}>
            <div className={classes.img}></div>
          </Link>
        </div>
        <div className={classes.right}>
          <ul className={classes.contents}>
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
        </div>
      </div>
    </>
  );
};

export default header;
