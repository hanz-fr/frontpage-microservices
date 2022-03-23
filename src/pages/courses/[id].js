import Head from "next/head";
import Link from "next/link";
import React from "react";

function Todo({ data }) {
  return (
    <>
      <Head>
        <title>Micro | Random | {data.title}</title>
      </Head>

      <div className="flex flex-col justify-center">
        <main className="mt-12 mx-auto">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <h1 className="text-xl font-semibold">{data.id}</h1>
          <p>Complete your task</p>
          <Link href="/random">
            <a>To random page</a>
          </Link>
        </main>
      </div>
    </>
  );
}

Todo.getInitialProps = async (props) => {
  console.log(props);
  const { id } = props.query;
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => json);
    return { data };
  } catch (error) {}
};

export default Todo;
