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
      <main className="container mx-auto p-2 md:p-4 flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
          <SidebarItem image="/img/dest.jpg" title="Stream Destpek" />
          <SidebarItem image="/img/tv.jpg" title="TV Channels" />
          <SidebarItem image="/img/stereo.jpg" title="Live Streams" />
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          <h2
            className={`text-[32px] font-semibold mb-4 px-4 py-2 bg-[rgba(255,255,255,0.25)] w-fit rounded-[10px] ${genos.className}`}
          >
            Planned Streams
          </h2>

          {/* Stream Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StreamCard
              src="#"
              channelName="Channel Name"
              image="/img/podcast.jpg"
              category="Politic"
              views="159K"
              time="Today 18:00"
            />
            <StreamCard
              src="/channel"
              channelName="Channel Name"
              image="/img/stream.png"
              category="Life Style"
              views="159K"
              time="Today 18:00"
            />
            <StreamCard
              src="/live"
              channelName="Channel Name"
              image="/img/add.jpg"
              category="Politic"
              views="159K"
              time="Tomorrow 18:00"
            />
          </div>

          {/* ON Air Button */}
          <div className="my-6 flex">
            <Button
              className={`bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-8 rounded-[10px] text-lg ${genos.className}`}
            >
              ON Air
            </Button>
          </div>

          {/* Live Streams */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <StreamCard
              src="#"
              channelName="Channel Name"
              image="/img/podcast.jpg"
              category="Politic"
              views="159K"
              liveTag={true}
            />
            <StreamCard
              src="/channel"
              channelName="Channel Name"
              image="/img/stream.png"
              category="Life Style"
              views="159K"
              liveTag={true}
            />
            <StreamCard
              src="/live"
              channelName="Channel Name"
              image="/img/add.jpg"
              category="Politic"
              views="159K"
              liveTag={true}
            />
          </div>

          {/* More Streams */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StreamCard
              src="/#"
              channelName="Channel Name"
              image="/img/podcast.jpg"
              category="Politic"
              views="159K"
              liveTag={true}
            />
            <StreamCard
              src="/channel"
              channelName="Channel Name"
              image="/img/stream.png"
              category="Life Style"
              views="159K"
              liveTag={true}
            />
            <StreamCard
              channelName="Channel Name"
              src="/live"
              image="/img/add.jpg"
              category="Politic"
              views="159K"
              liveTag={true}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
