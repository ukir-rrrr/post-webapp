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
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features "
        className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
      >
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンな技術スタックを使って作れらたWebアプリケーションです
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem] mx-auto">
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#000000"
                  d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                />
              </svg>
              <div className="spae-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用しています
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 27 24"
              >
                <path
                  fill="#000000"
                  d="M15.902 11.974a2.41 2.41 0 1 1-4.82 0a2.41 2.41 0 0 1 4.82 0z"
                />
                <path
                  fill="#000000"
                  d="M13.491 17.494a27.278 27.278 0 0 1-8.749-1.206l.193.051a10.886 10.886 0 0 1-3.541-1.903l.021.016a3.414 3.414 0 0 1-1.41-2.467l-.001-.013c0-1.594 1.747-3.154 4.681-4.172c2.512-.827 5.403-1.304 8.405-1.304l.417.003h-.021a27.489 27.489 0 0 1 8.885 1.334l-.195-.055a11.058 11.058 0 0 1 3.433 1.814l-.024-.018a3.274 3.274 0 0 1 1.386 2.387l.001.013c0 1.656-1.954 3.332-5.103 4.374c-2.363.729-5.08 1.149-7.895 1.149c-.17 0-.339-.002-.508-.005h.025zm0-9.84c-.106-.002-.232-.002-.358-.002c-2.881 0-5.656.452-8.259 1.289l.191-.053c-2.698.941-3.908 2.228-3.908 3.087c0 .893 1.301 2.3 4.153 3.274c2.249.697 4.834 1.099 7.513 1.099c.235 0 .469-.003.702-.009l-.034.001a26.452 26.452 0 0 0 8.205-1.138l-.187.049c2.96-.984 4.32-2.391 4.32-3.28a2.247 2.247 0 0 0-.966-1.515l-.008-.005a9.806 9.806 0 0 0-2.97-1.574l-.07-.02c-2.368-.766-5.093-1.208-7.92-1.208c-.142 0-.283.001-.424.003h.021z"
                />
                <path
                  fill="#000000"
                  d="m8.023 23.986l-.053.001c-.453 0-.878-.119-1.245-.327l.013.007c-1.378-.8-1.858-3.092-1.28-6.141c.697-3.128 1.827-5.894 3.344-8.4l-.069.124a27.856 27.856 0 0 1 5.425-6.872l.02-.018A10.943 10.943 0 0 1 17.365.332l.073-.027c.407-.196.885-.31 1.39-.31c.501 0 .976.113 1.4.314l-.02-.008c1.435.826 1.911 3.36 1.238 6.606c-.72 2.967-1.818 5.58-3.262 7.959l.07-.123c-1.452 2.63-3.209 4.882-5.266 6.819l-.014.013a10.872 10.872 0 0 1-3.321 2.082l-.074.026c-.46.181-.992.292-1.549.305h-.006zM9.228 9.539l.499.288c-1.381 2.28-2.465 4.926-3.106 7.74l-.034.18c-.533 2.809-.019 4.498.72 4.926c.191.102.417.161.657.161l.061-.001h-.003c.955 0 2.458-.605 4.196-2.122a26.398 26.398 0 0 0 4.972-6.404l.068-.135a26.071 26.071 0 0 0 3.025-7.307l.038-.182c.629-3.058.086-4.93-.686-5.378a2.246 2.246 0 0 0-1.814.092l.013-.006a9.858 9.858 0 0 0-2.907 1.846l.007-.006a26.608 26.608 0 0 0-5.136 6.468l-.069.132z"
                />
                <path
                  fill="#000000"
                  d="M18.96 24c-1.306 0-2.96-.787-4.69-2.276a27.794 27.794 0 0 1-5.464-6.834l-.072-.137c-1.43-2.349-2.551-5.075-3.215-7.975l-.036-.185a10.75 10.75 0 0 1-.255-2.357c0-.527.037-1.044.108-1.551l-.007.058A3.271 3.271 0 0 1 6.701.344l.01-.007c1.43-.83 3.865.024 6.342 2.228a27.865 27.865 0 0 1 5.118 6.54l.072.138a26.769 26.769 0 0 1 3.242 7.798l.038.186c.163.709.257 1.524.257 2.36c0 .577-.044 1.143-.13 1.696l.008-.062a3.419 3.419 0 0 1-1.429 2.456l-.011.007a2.435 2.435 0 0 1-1.207.316l-.054-.001h.003zm-9.228-9.823a27.066 27.066 0 0 0 5.271 6.656l.02.018c2.166 1.863 3.884 2.266 4.628 1.834c.773-.446 1.339-2.276.754-5.233c-.702-2.89-1.787-5.434-3.219-7.741l.065.112a26.77 26.77 0 0 0-4.948-6.384l-.012-.011C9.957 1.354 8.066.888 7.293 1.334a2.234 2.234 0 0 0-.825 1.593v.007a9.854 9.854 0 0 0 .162 3.499l-.013-.066c.673 2.952 1.747 5.559 3.182 7.924l-.066-.117z"
                />
              </svg>
              <div className="spae-y-2">
                <h3 className="font-bold">React.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用しています
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000000"
                  d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z"
                />
              </svg>
              <div className="spae-y-2">
                <h3 className="font-bold">PlantScale</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用しています
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000000"
                  d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58l2.343 7.45l-6.157-4.597l-6.158 4.58l2.358-7.433l-6.188-4.55l7.63-.045L12.008 0l2.356 7.404l7.615.044z"
                />
              </svg>
              <div className="spae-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用しています
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#000000"
                  d="M128 204.667C145.062 136.227 187.738 102 256 102c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C494.938 221.773 452.262 256 384 256c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5zm-128 154C17.062 290.227 59.738 256 128 256c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C366.938 375.773 324.262 410 256 410c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5z"
                />
              </svg>
              <div className="spae-y-2">
                <h3 className="font-bold">TaillwindCSS</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用しています
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000000"
                  d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305h.003z"
                />
              </svg>
              <div className="spae-y-2">
                <h3 className="font-bold">Stripe</h3>
                <p className="text-sm text-muted-foreground sm:leading-7">
                  AppRouter/Layouts/APIRoutesの技術を使用しています
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto md:max-w-[58rem] text-center">
          <p className="text-muted-foreground sm:text-lg">Post Writerはログインするとできます</p>
        </div>
      </section>

      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6l">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7"> 
            もしもwebサービスが気に入った場合は下記XからDMでご連絡ください
            <br />
          お仕事のご連絡もお待ちしております。
          </p>
          <Link href={siteconfig.links.x} 
          className="underline-offset-4"
          target="_blank"
          rel="noreferrer"
          >
            お仕事はXまで
          </Link>
        </div>
      </section>
    </>
  );
}
