import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Not found - Nirvati</title>
        <link rel="stylesheet" href="/style.css" type="text/css" />
      </Head>
      <div class="dark:bg-gray-800 dark:text-white py-3 h-screen flex flex-col items-center justify-center relative">
        <h1 class="text-center font-bold text-6xl mt-5 font-serif w-full">
          404 - <span class="marked">not found</span>
        </h1>
        <h3 class="text-center mb-5 mt-2 text-xl font-serif">
          We're sorry, but this page doesn't exist.
        </h3>
        <a class="bg-gray-800 text-white px-4 py-2 rounded-md" href="/">
          Go back home
        </a>
      </div>
    </>
  );
}
