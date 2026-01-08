import { buttonVariants } from "@/components/ui/button";
import { siteconfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt10 lg:py-32 pb-8 md:pd-12">
        <div className="contsiner text-center flex flex-col items-center gap-4">
          <Link
            href={siteconfig.links.x}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
          >
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-forground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNext.js
            AppRouterで作られたものです。ユーザーは自由に投稿をPostする事ができます
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={siteconfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline"}))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </>
  );
}
