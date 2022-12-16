import Image from "next/image";
import React from "react";
import Link from "next/link";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
}

export default function Card({
  title,
  excerpt,
  date,
  slug,
  image,
}: PostCardProps) {
  return (
    <div className="shadow-lg">
      <div className="relative h-[240px] w-full">
        <Image className="object-cover" fill alt={title} src={image} />
      </div>
      <div className="bg-primary p-5 text-background">
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <p>{date}</p>
        <Link href={`/blog/${slug}`}>Read More</Link>
      </div>
    </div>
  );
}
