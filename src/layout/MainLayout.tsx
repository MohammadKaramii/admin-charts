import Sidebar from "../components/sidebar/Sidebar";
import PageNav from "../components/pageNav/pageNav";
import classes from "./MainLayout.module.scss";
import FilterNav from "../components/filterNav/FilterNav";

const MainLayout = () => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.main}>
        <div className={classes.main__content}>
          <PageNav />
          <FilterNav />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
