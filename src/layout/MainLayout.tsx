

import Sidebar from "../components/sidebar/Sidebar";

import classes from "./MainLayout.module.scss";

const MainLayout = () => {



  return (
    <div className={classes.container}>
      <Sidebar />
 
    </div>
  );
};

export default MainLayout;
