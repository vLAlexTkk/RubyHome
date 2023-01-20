import type { NextPage } from "next";

import { Layout } from "@components/layout/Layout";
import HeroBlock from "./hero";
import Partners from "./partners";
import Properties from "./properties";

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <HeroBlock />
      <Partners />
      <Properties />
    </Layout>
  );
};

export default Home;
