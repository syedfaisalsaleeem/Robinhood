import Head from "next/head";

import Showcase from "../components/showcase/showcase";
import Commission from "../components/commission/commission";
import Shares from "../components/shares/shares";
import Products from "../components/products/products";
import Slider from "../components/slider/slider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Commission-free Stock Trading & Investing App | Robinhood</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Showcase />
      <Commission />
      <Shares />
      <Slider />
      <Products />
    </div>
  );
}
