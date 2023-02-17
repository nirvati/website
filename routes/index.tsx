import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

function randomElement<Element extends unknown = unknown>(array: Element[]) : Element {
  return array[Math.floor(Math.random() * array.length)];
}


export const handler: Handlers = {
  async GET(req, ctx) {
    const res = await ctx.render({
      adjective: randomElement(["Easy", "Simple", "Modern", "Open"]),
    });
    res.headers.set("Link", '<https://s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=ffff43>; rel="preconnect", <https://s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=0da200>; rel="preconnect", </style.css>; rel="preconnect"');
    return res;
  },
};

export default function Home(props: PageProps<{ adjective: string }>) {
  return (
    <>
      <Head>
        <title>Nirvati</title>
        <link rel="stylesheet" href="/style.css" type="text/css" />
        <meta
          name="description"
          content="Nirvati is a free and open source modular server management framework"
        />
      </Head>
      <div class="dark:bg-gray-800 dark:text-white py-3 h-screen flex flex-col items-center justify-center">
        <h1 class="text-center font-bold text-6xl mt-5 font-serif"><span class="marked">{props.data.adjective}</span> server management.</h1>
        <h3 class="text-center mb-5 mt-1 text-xl font-serif">Nirvati makes managing servers easy again.</h3>
        <a
            id="scrollTeaser"
            class="absolute bottom-12 pt-20"
            href="#content"
          >
            <span class="absolute top-0 left-1/2 w-6 h-6"></span>Learn more
          </a>
      </div>
      <a id="content" />
      <div class="dark:bg-gray-800 dark:text-white py-3">
        <h1 class="text-center font-bold text-4xl mt-5 font-serif">Powering <span class="marked marked-2">300+</span> servers worldwide.</h1>
        <h3 class="text-center mb-5 mt-1 text-xl font-serif">Nirvati is trusted by a large community of users to manage their servers - and we're growing every day.</h3>
      </div>
      <div class="dark:bg-gray-800 dark:text-white py-3">
        <h1 class="text-center font-bold text-4xl mt-5 font-serif">Completely <span class="marked marked-3">transparent</span>.</h1>
        <h3 class="text-center mb-5 mt-1 text-xl font-serif">Nirvati is 100% free and open source software. All of our code and finances are public.</h3>
      </div>
      <div class="dark:bg-gray-800 dark:text-white py-3">
        <h1 class="text-center font-bold text-4xl mt-5 font-serif">Easy to <span class="marked marked-4">Install</span>.</h1>
        <h3 class="text-center mb-5 mt-1 text-xl font-serif">Nirvati itself can't be installed. You need a Nirvati software package to get started. Have a look at these projects doing just that:</h3>
        <div class="grid mx-auto grid-cols-1 md:grid-cols-2 px-6 lg:max-w-screen-md gap-2">
          <a href="https://runcitadel.space" class="bg-gray-100 dark:bg-gray-700 rounded-lg px-2 py-4">
            Citadel
          </a>
          <a href="https://waldbaur.deno.dev" class="bg-gray-100 dark:bg-gray-700 rounded-lg px-2 py-4">
          Waldbaur Servr
          </a>
          
        </div>
      </div>
    </>
  );
}
