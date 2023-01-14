import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={classes.bg}>
        <div className={classes.section}>
          <div className={classes.greetingFromCeo}>
            <h1>代表挨拶</h1>
            <p>
              会社名の「クリパー」には、サンスクリット語で「深い共感」という意味があります。
              <br />
              テクノロジーの進化により、システム化が強調される昨今の世の中ではありますが、
              <br />
              その背景には人と人の“共感“が介在しています。
              <br />
              “共感“とは、必ずしも他者の考え方に賛成するわけではありません。
              <br />
              他者の想いを慮り、理解して尊重します。
              <br />
              株式会社クリパーはそうした“共感“を介して、“ご縁“を創出し、
              <br />
              人（法人）が未来を切り拓くことに貢献していきます。
            </p>
          </div>

          <div className={classes.aboutCompany}>
            <h1>会社概要</h1>
            <ul>
              <li className={classes.heading}>会社名</li>
              <li className={classes.content}>株式会社クリパー</li>
            </ul>
            <ul>
              <li className={classes.heading}>設立</li>
              <li className={classes.content}>2022年10月8日</li>
            </ul>
            <ul>
              <li className={classes.heading}>代表者</li>
              <li className={classes.content}>黒宮 佳史</li>
            </ul>
            <ul>
              <li className={classes.heading}>資本金</li>
              <li className={classes.content}>5,000,000円</li>
            </ul>
            <ul>
              <li className={classes.heading}>事業内容</li>
              <li className={classes.content}>製造業特化型 有料職業紹介業</li>
            </ul>
            <ul>
              <li className={classes.heading}>許可番号</li>
              <li className={classes.content}>
                厚生労働大臣許可 優良職業紹介免許：27-ユ-303895
              </li>
            </ul>
            <ul>
              <li className={classes.heading}>本社位置</li>
              <li className={classes.content}>
                大阪府大阪市中央区南船場2丁目1番3号フェニックス南船場ビルB1F
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
