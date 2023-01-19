import type { NextPage } from "next";

import { Layout } from "@components/layout/Layout";
import HeroBlock from "./hero";
import Partners from "./partners";

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
     <HeroBlock/>
     <Partners/>
    </Layout>
  );
};

export default Home;
