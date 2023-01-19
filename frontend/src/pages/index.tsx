import type { NextPage } from "next";

import { Layout } from "@components/layout/Layout";
import HeroBlock from "./hero";

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
     <HeroBlock/>
    </Layout>
  );
};

export default Home;
