import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import classes from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.main}>
        <div className={`${classes.main__content}`}>
          <TopNav />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
