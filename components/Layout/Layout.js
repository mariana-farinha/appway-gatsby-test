import Navigation from "../Navigation/Navigation";

const Layout = props => (
  <React.Fragment>
    <Navigation />
    {props.children}
  </React.Fragment>
);

export default Layout;
