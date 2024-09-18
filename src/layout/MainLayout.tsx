import Sidebar from "../components/sidebar/Sidebar";
import PageNav from "../components/pageNav/pageNav";
import classes from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.main}>
        <div className={classes.main__content}>
          <PageNav />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
