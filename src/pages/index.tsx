import fs from "fs";
import matter from "gray-matter";
import Card from "../components/card";
import slugify from "../utils/slugify";
export default function Home({ posts }: { posts: any }) {
  return (
    <section className="w-full md:mx-auto md:max-w-3xl">
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold text-title">
          Featured Posts
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {posts.map((post: any) => (
          <Card
            key={post.slug}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.frontmatter.excerpt}
            image={post.frontmatter.thumbnailUrl}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/src/posts`);
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(`src/posts/${filename}`, "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug: filename.replace(".mdx", ""),
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
};
