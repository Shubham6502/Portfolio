import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./About";

const platforms = [
  {
    name: "LeetCode",
    detail: "Arrays, DP, Trees, Graphs & more",
    badge: "Active",
    emoji: "⚡",
    link:"https://leetcode.com/u/shubhampatil6502/"
  },
  {
    name: "HackerRank",
    detail: "Problem Solving Certifications",
    badge: "Certified",
    emoji: "🏆",
    link:"https://www.hackerrank.com/profile/shubhampatil6502"
  },
  {
    name: "GeeksForGeeks",
    detail: "Core CS concepts & practice",
    badge: "Active",
    emoji: "📚",
    link:"https://www.geeksforgeeks.org/profile/shubhampatil6502"
  },
];

export default function DSA() {
  const [ref, visible] = useInView();

  return (
    <section id="dsa" className="py-24 px-6 max-w-7xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionTitle main="DSA" accent="Journey" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left – stats + platforms */}
          <div>
            {/* Stats row */}
            <div className="flex gap-10 mb-8">
              <StatNum num="377+" label="Problems Solved" />
              <StatNum num="3+" label="Platforms" />
              <StatNum num="Top" label="Performer" />
            </div>

            {/* Platform cards */}
            <div className="flex flex-col gap-3">
              {platforms.map((p, i) => (
                <PlatformCard key={i} platform={p} />
              ))}
            </div>
          </div>

          {/* Right – text */}
          <div>
            <p className="text-[#c8d8e0] text-[0.95rem] leading-relaxed mb-5">
              Consistently practicing Data Structures &amp; Algorithms across multiple
              platforms. My focus is on mastering{" "}
              <span className="text-[#00e5c0] font-semibold">
                Arrays, Linked Lists, Trees, Graphs, Dynamic Programming
              </span>
              , and core problem-solving patterns to crack top software engineering
              interviews.
            </p>
            <p className="text-[#c8d8e0] text-[0.95rem] leading-relaxed mb-8">
              Targeting roles at top product companies, I align my preparation with real
              interview patterns and time-complexity analysis, ensuring I can write
              optimal solutions under pressure.
            </p>

            {/* Topic chips */}
            <div className="flex flex-wrap gap-2">
              {[
                "Arrays", "Strings", "Linked List", "Trees", "Graphs",
                "Dynamic Programming", "Recursion", "Sorting", "Binary Search",
              ].map((t) => (
                <span
                  key={t}
                  className="bg-[#0c1a22] border border-[#1a3040] text-[#5a7a88] text-xs font-mono px-3 py-1.5 rounded-full hover:border-[#00e5c0] hover:text-[#00e5c0] transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatNum({ num, label }) {
  return (
    <div>
      <div className="font-mono text-3xl font-black text-[#00e5c0]">{num}</div>
      <div className="text-xs text-[#5a7a88] mt-0.5">{label}</div>
    </div>
  );
}

function PlatformCard({ platform }) {
  return (
    <div className="bg-[#0c1a22] border border-[#1a3040] hover:border-[#00e5c0] rounded-xl px-5 py-4 flex items-center justify-between transition-all group">
      <div className="flex items-center gap-3">
        <span className="text-xl">{platform.emoji}</span>
        <div>
          <div className="text-white font-bold text-sm group-hover:text-[#00e5c0] transition-colors">
            {platform.name}
          </div>
          <div className="text-[#5a7a88] text-xs mt-0.5">{platform.detail}</div>
        </div>
      </div>
      <a href={platform.link} target="_blank" className="flex items-center gap-1.5">
       <span className="text-xs bg-[#00e5c0]/10 border border-[#00e5c0]/30 text-[#00e5c0] font-mono px-2 py-1 rounded-full">{platform.badge}</span>
      </a>
    </div>
  );
}
