import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Genos } from "next/font/google";
import StreamCard from "@/components/StreamCard";
import NavItem from "@/components/NavItem";
import SidebarItem from "@/components/SidebarItem";

const genos = Genos({
  subsets: ["latin"],
  weight: ["400", "700"], // optional
  display: "swap", // optional (reduces layout shift)
  variable: "--font-genos", // optional
});

export default function StreamingPlatform() {
  return (
    <div className="min-h-screen bg-[black] text-white">
      {/* Top Navigation */}
      <header className="border-b border-gray-800 p-2 md:p-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left Navigation */}
          <div className="flex flex-wrap items-center gap-2 md:gap-6">
            <NavItem
              icon="/svg/dashboard.svg?height=40&width=40"
              label="Destpek"
              bgColor={"bg-white"}
              src="/"
            />
            <NavItem
              icon="/svg/notes.svg?height=40&width=40"
              label="Müzik"
              bgColor={"bg-white"}
            />
            <NavItem
              icon="/svg/play.svg?height=40&width=40"
              label="Sinema"
              src="/cinema"
              bgColor="bg-white"
            />
            <NavItem
              icon="/svg/stream.svg?height=40&width=40"
              label="Stream"
              active
              bgColor="bg-green-500"
            />
          </div>

          {/* Search Bar */}
          <div className="order-last w-full my-2 md:order-none md:w-auto md:flex-1 md:max-w-md md:mx-4 flex items-center gap-4">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search"
                className={`w-full rounded-full bg-white border-gray-700 pl-4 pr-10 py-6 text-black text-[30px] placeholder:text-2xl ${genos.className}`}
              />
            </div>
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="55" height="55" rx="27.5" fill="white" />
                <path
                  d="M32.3863 23.4516H35.1283H36.7735H38.4187V20.1613H36.7735H35.1283H32.3863C31.4778 20.1613 30.7412 19.4247 30.7412 18.5162C30.7412 17.6076 31.4778 16.871 32.3863 16.871H35.1052H36.7546H38.4042C38.1181 11.3798 33.5605 7 27.9993 7C22.4381 7 17.8805 11.3798 17.5943 16.871H19.244H20.8934H23.6122C24.5208 16.871 25.2574 17.6076 25.2574 18.5162C25.2574 19.4247 24.5208 20.1613 23.6122 20.1613H20.8703H19.2251H17.5799V23.4516H19.2251H20.8703H23.6122C24.5208 23.4516 25.2574 24.1882 25.2574 25.0968C25.2574 26.0053 24.5208 26.742 23.6122 26.742H20.8934H19.244H17.5943C17.8805 32.2332 22.4381 36.6129 27.9993 36.6129C33.5605 36.6129 38.1181 32.2332 38.4042 26.742H36.7546H35.1052H32.3863C31.4778 26.742 30.7412 26.0053 30.7412 25.0968C30.7412 24.1882 31.4778 23.4516 32.3863 23.4516Z"
                  fill="#1C274C"
                />
                <path
                  d="M43.3548 21.7734C42.4463 21.7734 41.7096 22.5101 41.7096 23.4186V25.1004V26.4897C41.7096 34.0491 35.5595 40.1993 28 40.1993C20.4405 40.1993 14.2904 34.0491 14.2904 26.4897V25.1004V23.4186C14.2904 22.5101 13.5537 21.7734 12.6452 21.7734C11.7366 21.7734 11 22.5101 11 23.4186V26.4897C11 35.3085 17.7501 42.5795 26.3548 43.4097V45.9391C26.3548 46.8476 27.0915 47.5843 28 47.5843C28.9085 47.5843 29.6452 46.8477 29.6452 45.9391V43.4098C38.2499 42.5797 45 35.3086 45 26.4898V23.4188C45 22.51 44.2634 21.7734 43.3548 21.7734Z"
                  fill="#8E93A6"
                />
              </svg>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex flex-wrap items-center gap-2 md:gap-6">
            <NavItem
              icon="/svg/yekbun.svg?height=40&width=40"
              label="YekBünTV"
              bgColor="bg-white"
            />
            <NavItem
              icon="/svg/zarok.svg?height=40&width=40"
              label="ZarökTV"
              bgColor="bg-white"
            />
            <NavItem
              icon="/svg/eyar.svg?height=40&width=40"
              label="Eyar"
              bgColor="bg-white"
            />
            <NavItem
              icon="/svg/archiv.svg?height=40&width=40"
              label="Archiv"
              bgColor="bg-white"
            />
            <NavItem
              icon="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              label="User"
              isUser
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="container min-w-[100vw] min-h-screen"
        style={{
          background:
            "linear-gradient(to left, rgba(33,32,32,0.0001), rgba(0,0,0,0.659), rgba(0,0,0,1)),url(/img/stream.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-2 md:p-4 flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            <SidebarItem image="/img/dest.jpg" title="Stream Destpek" />
            <SidebarItem image="/img/tv.jpg" title="TV Channels" />
            <SidebarItem image="/img/stereo.jpg" title="Live Streams" />
            <SidebarItem image="/img/reel.jpg" title="Video Reels" />
          </aside>
          {/* Content header*/}
          <div className="flex-1 px-10">
            <h2
              className={`text-[70px] font-semibold py-2 w-fit rounded-[10px] ${genos.className}`}
            >
              Channel Name
            </h2>
            <h3
              className={`text-[40px] -mt-12 py-2 w-fit rounded-[10px] ${genos.className}`}
            >
              Owner Name
            </h3>
            <div className="flex gap-4 items-center">
              <p
                className={`text-2xl font-semibold text-white bg-[rgb(85,84,84)] py-1 px-2 font-genos rounded-[10px] flex gap-2 items-center`}
              >
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7583 12.413L15.2715 9.44552C15.3997 8.70434 14.8297 8.02643 14.0784 8.02643H10.3098C9.93627 8.02643 9.65185 7.69117 9.71231 7.32217L10.1943 4.38028C10.2726 3.90234 10.2503 3.4133 10.1287 2.94452C10.0279 2.55619 9.72831 2.24437 9.33428 2.11779L9.22884 2.08392C8.9907 2.00742 8.73079 2.02522 8.50627 2.13341C8.25915 2.25249 8.07835 2.4697 8.01134 2.72803L7.66532 4.06192C7.55523 4.48634 7.39486 4.896 7.18809 5.28309C6.88598 5.84866 6.41887 6.30129 5.93333 6.7197L4.88683 7.62149C4.59177 7.87575 4.43681 8.25654 4.47039 8.64484L5.06113 15.4768C5.11532 16.1035 5.63924 16.5845 6.26753 16.5845H9.6488C12.181 16.5845 14.342 14.8202 14.7583 12.413Z"
                    fill="white"
                  />
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.17339 7.48098C2.46526 7.46839 2.71524 7.68796 2.74041 7.97901L3.44712 16.1521C3.49252 16.6771 3.07898 17.1296 2.55093 17.1296C2.05354 17.1296 1.65138 16.7261 1.65138 16.2297V8.02601C1.65138 7.73387 1.88152 7.49358 2.17339 7.48098Z"
                    fill="white"
                  />
                </svg>
                <span>159K</span>
              </p>
              <p
                className={`text-2xl font-semibold text-white bg-[rgb(85,84,84)] py-1 px-2 font-genos rounded-[10px]`}
              >
                12+
              </p>
              <p
                className={`text-2xl font-semibold text-white bg-[rgb(85,84,84)] py-1 px-2 font-genos rounded-[10px]`}
              >
                Life Style
              </p>
            </div>
            <div className="flex items-center mt-4 mx-10">
              <div className="flex">
                <div
                  className={`w-7 h-7 rounded-full overflow-hidden  flex items-center justify-center mb-1 bg-white border border-white`}
                >
                  <Image
                    src={"/img/user-3.jpg"}
                    alt={"user"}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div
                  className={`w-7 h-7 rounded-full overflow-hidden  flex items-center justify-center mb-1 bg-white border border-white -ml-2`}
                >
                  <Image
                    src={"/img/user-2.jpg"}
                    alt={"user"}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div
                  className={`w-7 h-7 rounded-full overflow-hidden  flex items-center justify-center mb-1 bg-white border border-white -ml-2`}
                >
                  <Image
                    src={"/img/user-1.jpg"}
                    alt={"user"}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div
                  className={`w-7 h-7 rounded-full overflow-hidden  flex items-center justify-center mb-1 bg-white border border-white -ml-2`}
                >
                  <Image
                    src={"/img/user-1.jpg"}
                    alt={"user"}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div
                  className={`w-7 h-7 rounded-full overflow-hidden  flex items-center justify-center mb-1 bg-white border border-white -ml-2`}
                >
                  <Image
                    src={"/img/user-1.jpg"}
                    alt={"user"}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              </div>
              <p
                className={`text-2xl font-semibold text-white py-1 px-2 font-genos rounded-[10px]`}
              >
                30+ Online
              </p>
            </div>
            <button className="bg-[rgba(129,182,22,1)] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 mt-28 mx-10">
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7039 7.62278C14.2639 8.82369 14.2639 11.1763 12.7039 12.3772L4.87198 18.4062C2.89927 19.9248 0.0419922 18.5185 0.0419922 16.029L0.0419922 3.97098C0.0419922 1.48146 2.89927 0.0751767 4.87197 1.59377L12.7039 7.62278Z"
                  fill="white"
                />
              </svg>
              <span className={`font-genos text-xl`}>Join to Stream</span>
            </button>

            {/* Stream Grid */}
          </div>
        </div>
        {/* videos */}
        <div>
          <p
            className={`text-2xl font-semibold text-white bg-[rgb(85,84,84)] py-1 px-2 font-genos rounded-[10px] w-fit mx-4 my-4`}
          >
            My Videos
          </p>
          <div className="flex gap-4 mx-4 my-4">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </main>
    </div>
  );
}

function VideoCard() {
  return (
    <Link
      href={"/video"}
      className={`relative rounded-[10px] overflow-hidden grid grid-cols-2 h-[200px] md:h-[150px] lg:h-[300px] w-full`}
      style={{
        background: `url('/img/stream.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-[linear-gradient(to_right,rgba(33,32,32,0.0001),rgba(0,0,0,0.659),rgba(0,0,0,1))] flex flex-col items-end"
        style={{ gridColumn: "2 " }}
      >
        <div className="flex flex-col justify-between h-full py-4 items-end px-1">
          <div>
            <p className={`font-genos font-semibold lg:text-4xl`}>
              Video Title
            </p>
            <p className={`font-genos font-semibold lg:text-3xl text-right`}>
              12.12.2023
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
