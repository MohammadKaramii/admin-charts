import Sidebar from "../components/sidebar/Sidebar";
import PageNav from "../components/pageNav/pageNav"; // Fixed capitalization here
import FilterNav from "../components/filterNav/FilterNav";
import Dropdown from "../components/dropDown/Dropdown";
import classes from "./MainLayout.module.scss";
import Card from "../components/card/Card";
import NavMenuMobile from "../components/navMenuMobile/NavMenuMobile";


const MainLayout = () => {


  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.main}>
        <div className={classes.main_content}>
          <PageNav />
          <FilterNav />
          <div className={classes.main_content_container}>
            <Dropdown />
            <div className={classes.main_content_container_cards}>
              <div className={classes.main_content_container_cards_cardsRow}>
                <Card title="Card title" timeTab chart="donut" />
                <Card title="Card title" chart="bar" />
                <Card title="Chart 3" timeTab chart="area" />
              </div>
              <div className={classes.main_content_container_cards_cardsRow}>
                <Card title="Chart 4" tools chart="radial" />
                <Card title="Chart 5" timeTab chart="pie" />
                <Card title="Chart 6" multiTab chart="basic" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavMenuMobile />
    </div>
  );
};

export default MainLayout;
