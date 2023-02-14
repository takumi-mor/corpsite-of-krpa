import classes from "./TopView.module.css";

const TopView = () => {
  return (
    <>
      <div className={classes.bg}>
        <div className={classes.slogans}>
          <div className={classes.slogan}>
            <h1>
              共感で繋がる、
              <br />
              繋げる。
            </h1>
          </div>
          <div className={classes.mission}>
            <h1>ミッション</h1>
            <p>“共感“を起点に繋がる社会を構築し、未来を共創する。</p>
          </div>
          <div className={classes.valueBg}>
            <h1>バリュー</h1>
            <ul className={classes.values}>
              <li className={classes.value}>探究心を持って何事も楽しむ</li>
              <li className={classes.value}>主体性と裁量性を持って働く</li>
              <li className={classes.value}>謙虚な心と学ぶ姿勢を忘れない</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopView;
