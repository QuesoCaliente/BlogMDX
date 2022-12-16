import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-primary">
      <div className="container flex justify-center py-3">
        <Link href="/">
          <div className="flex items-center gap-5">
            <Image
              alt="Blog Mdx"
              src="/images/logo.png"
              width={45}
              height={45}
            />
            <span className="text-2xl text-background">Blog MDX</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
