import css from "../../static/styles/scss/global.scss";
import Navigation from "../Navigation/Navigation";

const Layout = props => (
  <div>
    <Navigation />
    {props.children}
    <script src="/static/scripts/jquery-3.0.0.slim.min.js" />
    <script src="/static/scripts/popper-1.15.0.min.js" />
  </div>
);

export default Layout;
