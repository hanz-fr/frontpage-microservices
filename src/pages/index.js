import Head from 'next/head';
import Link from "next/link";

import axios from "src/configs/axios";

import Circle from "public/images/circle-accent-1.svg";

import Header from 'src/pages/parts/header';
import Hero from 'src/pages/parts/hero';
import Clients from 'src/pages/parts/clients';
import ListCourses from 'src/pages/parts/ListCourses';
import ListCategories from 'src/pages/parts/ListCategories';
import Footer from 'src/pages/parts/footer';

function Home({ data }) {

  return (
    <>
      <Head>
        <title>Microservice</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>

        {/* Header */}
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
          {/* Circle SVG */}
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="sunshine max-w-full"></div>
          <div className="container mx-auto px-5">
            <Header className="flex justify-between"></Header> {/* Header Components */}
            <Hero></Hero> {/* Hero Image */}
          </div>
        </section>

        {/* Clients (Amazon, Tesla, Google, etc.) */}
        <section className="container mx-auto pt-24">
          <Clients></Clients>
        </section>

        {/* Courses */}
        <section className="container mx-auto pt-24">
          <ListCourses data={data}></ListCourses>
        </section>

        {/* Categories */}
        <section className="container mx-auto pt-24">
          <ListCategories></ListCategories>
        </section>


        <section className="footer mt-24 py-12">
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/api/courses`);
    return data;
  } catch (error) {
    return error;
  }
};

export default Home;