import classes from "./Service.module.css";

const Service = () => {
  return (
    <>
      <div className={classes.bg}>
        <div className={classes.section}>
          <h1>事業概要</h1>
          <div className={classes.services}>
            <div className={classes.manuWorker}>
              <h2>製造キャリア</h2>
              <p>
                製造業に特化した人材紹介サービスです。
                <br />
                あなたの希望に沿った会社をご紹介します。
              </p>
            </div>
            <div className={classes.manuEngineer}>
              <h2>技術キャリア</h2>
              <p>Comming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
