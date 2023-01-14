import classes from "./AboutCeo.module.css";

const AboutCeo = () => {
  return (
    <>
      <div className={classes.bg}>
        <div className={classes.ceo}>
          <div className={classes.img}></div>
          <div className={classes.introduction}>
            <h3>黒宮 佳史</h3>
            <p>
              1995年三重県津市生まれ。
              <br />
              神戸大学工学部を卒業後、新卒で株式会社ミナジンに入社。
              <br />
              求人広告の法人営業を経て、人材紹介事業部の立ち上げを一任される。人生の大きな転機に携わることへのやりがいや人と企業のマッチングの面白さに魅せられる。
              <br />
              株式会社ミナジンを退職し、フリーランスで採用代行や採用コンサル事業を展開。
              <br />
              2021年6月に保険営業専門の人材紹介会社、株式会社インステイトの立ち上げに役員として参画。
              <br />
              2022年10月に株式会社クリパーを設立し、代表取締役に就任。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCeo;
