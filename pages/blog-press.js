import { withRouter } from "next/router";
import Layout from "../components/Layout/Layout";

export default withRouter(props => (
  <Layout>
    <p>{props.router.query.title}</p>
  </Layout>
));
