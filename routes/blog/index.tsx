import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts, Post } from "../../utils/posts.ts";
import { Header } from "../../components/Header.tsx";

interface Data {
  posts: Post[];
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ ...ctx.state, posts });
  },
};

export default function PostPage(props: PageProps<Data>) {
  const { posts } = props.data;
  return (
    <>
      <Head>
        <title>Nirvati Blog</title>
        <link rel="stylesheet" href="/style.css" type="text/css" />
        <meta
          name="description"
          content="Nirvati is a free and open source modular server management framework"
        />
      </Head>
      <div class="dark:bg-gray-800 dark:text-white">
        <div class="absolute top-0 right-0 left-0">
          <Header />
        </div>
        <div class="px-4 mt-8 mx-auto max-w-screen-md min-h-screen">
          <h1 class="font-bold font-serif text-5xl pt-20">Nirvati blog</h1>
          <p class="inline-block mt-4 mb-8">
            Insights and updates from the Nirvati team
          </p>
          {posts.map((post) => (
            <div class="mt-8">
              <a href={`/blog/${post.slug}`}>
                <h2 class="font-bold font-serif text-3xl">{post.title}</h2>
                <time class="inline-block">
                  {new Date(post.publishedAt).toLocaleDateString(
                    navigator.language,
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
          <p class="mt-6 pb-3 text-center text-sm text-gray-600 dark:text-gray-200">
            (C) 2023 Nirvati.
          </p>
        </div>
      </div>
    </>
  );
}
