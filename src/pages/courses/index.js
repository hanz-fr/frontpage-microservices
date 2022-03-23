import Head from "next/head";
import Link from "next/link";
import React from "react";

function Random({ data }) {
  return (
    <>
      <Head>
        <title>Micro | Random</title>
      </Head>

      <div className="flex justify-center">
      <main className="flex flex-col mx-auto mt-12">
        <h1 className="text-3xl font-bold">Fetching random words</h1>
        <ul className="mt-10">
          {data.map((todo) => {
            return (
              <li key={todo.id}>
                {todo?.title ?? "-"}
                
                // Mengarah ke todo yang dituju
                <Link href={`/courses/${todo.id}`}>
                  <a>Link</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      </div>
    </>
  );
}

Random.getInitialProps = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => json);
    return { data };
  } catch (error) {}
};

export default Random;
