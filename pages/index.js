import Layout from "../components/layout";

export default function Home() {
  return <>Test div</>;
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
