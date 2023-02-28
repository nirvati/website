import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts, Post } from "../utils/posts.ts";

function randomElement<Element extends unknown = unknown>(
  array: Element[],
): Element {
  return array[Math.floor(Math.random() * array.length)];
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const lang = req.headers.get("accept-language")?.split(",")[0] ?? "en";
    const posts = await listPosts();
    const res = await ctx.render({
      ...ctx.state,
      posts,
      lang,
      adjective: randomElement(["Easy", "Simple", "Modern", "Open"]),
    });
    res.headers.set(
      "Link",
      '<https://s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=ffff43>; rel="preconnect", <https://s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=0da200>; rel="preconnect", </style.css>; rel="preconnect"',
    );
    return res;
  },
};

export default function Home(
  props: PageProps<{ adjective: string; posts: Post[]; lang: string; }>,
) {
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
      <div class="dark:bg-gray-800 dark:text-white py-3 h-screen flex flex-col items-center justify-center relative">
        <h1 class="text-center font-bold text-6xl mt-5 font-serif">
          <span class="marked">{props.data.adjective}</span> server management.
        </h1>
        <h3 class="text-center mb-5 mt-1 text-xl font-serif">
          Nirvati makes managing servers easier than ever.
        </h3>
        <a
          id="scrollTeaser"
          class="absolute bottom-12 pt-20"
          href="#content-1"
        >
          <span class="absolute top-0 left-1/2 w-6 h-6"></span>Learn more
        </a>
      </div>
      <a id="content-1" />
      <div class="dark:bg-gray-800 dark:text-white h-screen flex flex-col items-center justify-center relative">
        <h1 class="text-center font-bold text-4xl mt-5 font-serif">
          Powering <span class="marked marked-2">300+</span> servers worldwide.
        </h1>
        <h3 class="text-center mb-5 mt-1 text-xl font-serif">
          Nirvati is trusted by a large community of users to manage their
          servers - and we're growing every day.
        </h3>
        <a
          id="scrollTeaser"
          class="absolute bottom-12 pt-20"
          href="#content-2"
        >
          <span class="absolute top-0 left-1/2 w-6 h-6"></span>More
        </a>
      </div>
      <a id="content-2" />
      <div class="dark:bg-gray-800 dark:text-white py-3 h-screen flex flex-col items-center justify-center relative">
        <h1 class="text-center font-bold text-4xl mt-5 font-serif">
          Completely <span class="marked marked-3">transparent</span>.
        </h1>
        <h3 class="text-center mb-5 mt-1 text-xl font-serif">
          Nirvati is 100% free and open source software. All of our{" "}
          <a href="https://gitlab.com/nirvati" class="text-underline">code</a>
          {" "}
          and{" "}
          <a href="https://opencollective.com/runctadel" class="text-underline">
            finances
          </a>{" "}
          are public.
        </h3>
        <a
          id="scrollTeaser"
          class="absolute bottom-12 pt-20"
          href="#content-3"
        >
          <span class="absolute top-0 left-1/2 w-6 h-6"></span>More
        </a>
      </div>
      <a id="content-3" />
      <div class="dark:bg-gray-800 dark:text-white py-3 h-screen flex flex-col items-center justify-center relative">
        <h1 class="text-center font-bold text-4xl mt-5 font-serif">
          Let's <span class="marked marked-4">set up</span> your server
        </h1>
        <h3 class="text-center mb-5 mt-1 text-xl font-serif">
          Nirvati is available in various software packages that can provide the optimal experience and set of software for your.
        </h3>
        <div class="grid mx-auto grid-cols-1 md:grid-cols-2 px-6 lg:max-w-screen-md gap-8">
          <a
            href="https://runcitadel.space"
            class="flex flex-col items-center justify-center"
          >
            <span class="font-serif mb-2">For bitcoiners</span>
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg px-6 py-4 flex items-center justify-center w-full">
              <img src="https://runcitadel.space/logo.svg" class="h-16 mr-4" />
              <span class="font-bold text-xl">Citadel</span>
            </div>
          </a>
          <a
            href="https://waldbaur.deno.dev"
            class="flex flex-col items-center justify-center"
          >
            <span class="font-serif mb-2">For schools</span>
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg px-6 py-4 flex items-center justify-center w-full">
              <!--<img src="https://runcitadel.space/logo.svg" class="h-16 mr-4" />-->
              <span class="font-bold text-xl">waldserv.</span>
            </div>
          </a>
          <a
            href="https://nirvati.org/personal"
            class="flex flex-col items-center justify-center"
          >
            <span class="font-serif mb-2">For individuals</span>
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg px-6 py-4 flex items-center justify-center w-full">
              <span class="text-xl font-serif">Nirvati Personal</span>
            </div>
          </a>
          <a
            href="https://nirvati.org/developer"
            class="flex flex-col items-center justify-center"
          >
            <span class="font-serif mb-2">For developers</span>
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg px-6 py-4 flex items-center justify-center w-full">
              <span class="text-xl font-serif">Nirvati Dev</span>
            </div>
          </a>
          <a
            href="https://nirvati.org/enterprise"
            class="flex flex-col items-center justify-center"
          >
            <span class="font-serif mb-2">For companies</span>
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg px-6 py-4 flex items-center justify-center w-full">
              <span class="text-xl font-serif">Nirvati Enterprise</span>
            </div>
          </a>
        </div>
      </div>
      <a id="blog" />
      <div class="dark:bg-gray-800 dark:text-white py-10 flex flex-col items-center justify-center relative">
        <h1 class="text-center font-bold text-4xl mt-5 font-serif w-full">
          <span class="marked marked-4">Blog</span>
        </h1>
        <div>
          {props.data.posts.map((post) => (
            <div class="mt-8">
              <a href={`/blog/${post.slug}`}>
                <h2 class="font-bold font-serif text-2xl marked marked-1">{post.title}</h2>
                <time class="inline-block">
                  {new Date(post.publishedAt).toLocaleDateString(
                    props.data.lang,
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </time>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
