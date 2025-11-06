"use client"

import Image from "next/image"
import data from "@/data.json"
import React from "react";

export default function Home() {
  const averageScore : number = Math.round(
    data.reduce((acc, item) => acc + item.score, 0) / data.length
  )

  const colorMap : { [key: string]: string } = {
    Reaction: "#FF5252",
    Memory: "#FFB21E",
    Verbal: "#00BB8F",
    Visual: "#1125D4",
  } as const

 const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="bg-[#EEF2FF] min-h-screen flex items-center justify-center">
      <main className="grid items-center justify-center px-10 md:px-32  grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">

        {/* LEFT CARD */}
        <section className="max-w-sm md:max-w-xs bg-[linear-gradient(to_bottom,#7857FF,#2E2BE9)] rounded-[32px] px-14 py-10 text-white flex flex-col items-center">
          <h2 className="text-lg font-bold text-white/80 mb-6">Your Result</h2>

          <div
            className="rounded-full w-40 h-40 flex flex-col items-center justify-center mb-6
            bg-[radial-gradient(hsla(256,70%,46%,1),hsla(241,72%,46%,0))]
            shadow-[inset_10px_10px_30px_rgba(0,0,0,0.25),inset_-10px_-10px_30px_rgba(255,255,255,0.15)]
            "
          >
            <span className="text-7xl font-extrabold text-white">{averageScore}</span>
            <span className="text-white/50 font-medium text-sm">of 100</span>
          </div>

          <h3 className="text-2xl font-semibold mb-2">Great</h3>

          <p className="text-center font-medium text-sm text-white/75 max-w-[260px]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>

        {/* RIGHT CARD */}
        <section className="max-w-sm md:max-w-xs bg-white rounded-[32px] p-8 shadow-lg ">
          <h2 className="font-bold text-xl mb-4 text-[#303B5A]">Summary</h2>

          {data.map(item => (
            <div
              key={item.category}
              className="flex items-center justify-between rounded-xl px-4 py-3 mb-3"
              style={{ backgroundColor: `${colorMap[item.category as keyof typeof colorMap]}15` }} // subtle tint
            >
              <div className="flex items-center gap-2">
                <Image src={item.icon} alt={item.category} width={20} height={20} />
                <span
                  className="font-medium"
                  style={{ color: colorMap[item.category as keyof typeof colorMap] }}
                >
                  {item.category}
                </span>
              </div>

              <span className="font-bold text-[#303B5A]">
                {item.score} <span className="text-[#303B5A]/50">/ 100</span>
              </span>
            </div>
          ))}

        <button
            onClick={() => setIsActive(!isActive)}
            className={`text-white font-semibold w-full py-3 rounded-full mt-4 transition-all
              ${isActive
                ? "bg-[linear-gradient(to_bottom,#7857FF,#2E2BE9)]"
                : "bg-[#303B5A] hover:bg-[#454F73]"
              }
            `}
          >
            Continue
         </button>
                   </section>

      </main>
    </div>
  )
}
