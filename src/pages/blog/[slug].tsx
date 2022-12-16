import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "posts", `${slug}.mdx`),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      frontmatter,
      slug,
    },
  };
};

const Post = ({
  mdxSource,
  frontmatter,
  slug,
}: {
  mdxSource: any;
  frontmatter: any;
  slug: string;
}) => {
  return (
    <div className="mt-10 p-5 text-center">
      <h1 className="text-3xl font-bold text-secondary">{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <p>{frontmatter.excerpt}</p>
      <div className="relative mx-auto h-[400px] max-w-[800px]">
        <Image
          fill
          className="mx-auto object-cover"
          src={frontmatter.thumbnailUrl}
          alt={frontmatter.title}
        />
      </div>
      <div className="prose mx-auto lg:prose-xl">
        <MDXRemote {...mdxSource} />
      </div>
    </div>
  );
};

export default Post;
