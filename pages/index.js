// Import Link API
import Link from "next/link";
import Layout from "../components/Layout/Layout";

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
    <Link href="/about">
      <a title="About">About Page</a>
    </Link>
    <Link href="/blog-press/id/bla">
      <a>Blog & Press</a>
    </Link>
  </Layout>
);

export default Index;
