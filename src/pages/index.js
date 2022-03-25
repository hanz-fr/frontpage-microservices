import Head from 'next/head';
import Link from "next/link";

import axios from "src/configs/axios";

import Circle from "public/images/circle-accent-1.svg";

import Header from 'src/pages/parts/header';
import Hero from 'src/pages/parts/hero';

function Home({ data }) {

  return (
    <>
      <Head>
        <title>Microservice</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="sunshine max-w-full"></div>
          <div className="container mx-auto px-5">
            <Header className="flex justify-between"></Header>
            <Hero></Hero>
          </div>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return data;
  } catch (error) {
    return error;
  }
};

export default Home;