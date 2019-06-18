import css from "../../static/styles/scss/global.scss";
import Navigation from "../Navigation/Navigation";

const Layout = props => (
  <div>
    <Navigation />
    {props.children}
  </div>
);

export default Layout;
