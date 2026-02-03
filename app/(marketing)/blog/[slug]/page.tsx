import { allPosts } from "@/.contentlayer/generated";
import Mdx from "@/components/mdx-component";
import { buttonVariants } from "@/components/ui/button";
import { siteconfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { describe } from "node:test";

async function getPostFromSlug(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getPostFromSlug(params.slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: "article",
      locale: "ja",
      url: siteconfig.url,
      title: siteconfig.name,
      description: siteconfig.description,
      siteName: siteconfig.name,
      images: [],
    },
  }
}


export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostFromSlug(slug);

  if (!post) {
    notFound()
  }

  console.log(post)

  return (
    <article className="max-w-3xl mx-auto px-4 py-6 lg:py-10">
      <div>{post.date && (<time>Published on {format(post.date, "yyyy/MM/dd")}</time>)}
        <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">{post.title}</h1>
      </div>
      {post.images && (
        <img
          src={post.images}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 border rounded-md bg-muted"
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="py-6 text-center lg:py-10">
        <Link href={"blog"} className={cn(buttonVariants({ variant: "ghost" }))}>全ての記事を見る</Link>
      </div>
    </article>
  );
}