"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  CalendarDays,
  Timer,
  ArrowRight,
  Sparkles,
  Music,
  Flame,
} from "lucide-react";
import Link from "next/link";
import { ScheduleSectionProps } from "../types/schedule-types";

// ─── Unified Gold Palette — warm tonal shifts only ───────────

const levelStyles = {
  foundations: {
    accent: "#E8C547",
    accentRgb: "232,197,71",
    icon: Sparkles,
    intensity: 0.5,
  },
  rhythm: {
    accent: "#FFD700",
    accentRgb: "255,215,0",
    icon: Music,
    intensity: 0.7,
  },
  dynamics: {
    accent: "#FDB931",
    accentRgb: "253,185,49",
    icon: Flame,
    intensity: 1,
  },
} as const;

type LevelId = keyof typeof levelStyles;

// ─── Class Level Data ────────────────────────────────────────

const classLevels = [
  {
    id: "foundations" as LevelId,
    name: "Dance Foundations",
    shortName: "Foundations",
    tagline: "Best for New Dancers",
    description:
      "Learn the fundamentals of Salsa & Bachata in a fun, welcoming environment. No experience needed — just bring your energy.",
    days: "Mon · Wed · Fri",
    time: "8:30 PM",
    duration: "60 min",
    level: 1,
  },
  {
    id: "rhythm" as LevelId,
    name: "Dance Rhythm",
    shortName: "Rhythm",
    tagline: "For Experienced Dancers",
    description:
      "Take your skills further with complex patterns, musicality, and styling. Dance with confidence and flow.",
    days: "Mon · Wed · Fri",
    time: "7:30 PM",
    duration: "60 min",
    level: 2,
  },
  {
    id: "dynamics" as LevelId,
    name: "Dance Dynamics",
    shortName: "Dynamics",
    tagline: "For Advanced Dancers",
    description:
      "Master intricate partner work, advanced techniques, and performance-level choreography.",
    days: "Tue · Thu",
    time: "7:00 PM",
    duration: "90 min",
    level: 3,
  },
];

// ─── Weekly Overview Data ────────────────────────────────────

const weekSchedule = [
  {
    day: "MON",
    classes: [
      { id: "rhythm" as LevelId, time: "7:30 PM" },
      { id: "foundations" as LevelId, time: "8:30 PM" },
    ],
  },
  {
    day: "TUE",
    classes: [{ id: "dynamics" as LevelId, time: "7:00 PM" }],
  },
  {
    day: "WED",
    classes: [
      { id: "rhythm" as LevelId, time: "7:30 PM" },
      { id: "foundations" as LevelId, time: "8:30 PM" },
    ],
  },
  {
    day: "THU",
    classes: [{ id: "dynamics" as LevelId, time: "7:00 PM" }],
  },
  {
    day: "FRI",
    classes: [
      { id: "rhythm" as LevelId, time: "7:30 PM" },
      { id: "foundations" as LevelId, time: "8:30 PM" },
    ],
  },
];

function getLevel(id: LevelId) {
  return classLevels.find((c) => c.id === id)!;
}

// ─── Main Component ──────────────────────────────────────────

export function ScheduleSection({ className = "" }: ScheduleSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      className={`relative py-24 sm:py-32 lg:py-40 overflow-hidden ${className}`}
    >
      {/* ─── Background ─── */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,215,0,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(253,185,49,0.04),transparent_60%)]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,215,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 z-10">
        {/* ─── Header ─── */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#FFD700]/70 to-transparent" />
            <span className="text-[#FFD700] uppercase tracking-[0.25em] text-[10px] sm:text-xs font-medium">
              Class Schedule
            </span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-[#FFD700]/70 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
          >
            <span className="text-white">Your Week at </span>
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent">
              Paradise
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 sm:mt-6 text-white/55 text-base sm:text-lg lg:text-xl max-w-xl mx-auto font-light"
          >
            Three levels. Five nights. One dance floor.
          </motion.p>
        </div>

        {/* ─── Class Level Cards ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {classLevels.map((cls, i) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i + 0.3 }}
            >
              <ClassCard
                level={cls}
                isHovered={hoveredCard === cls.id}
                onHover={() => setHoveredCard(cls.id)}
                onLeave={() => setHoveredCard(null)}
              />
            </motion.div>
          ))}
        </div>

        {/* ─── Weekly At-a-Glance ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 sm:mt-20 lg:mt-24 max-w-5xl mx-auto"
        >
          <WeeklyOverview />
        </motion.div>

        {/* ─── CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <Link
            href="/trial"
            className="group relative inline-flex items-center gap-3 px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black font-semibold text-base sm:text-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,215,0,0.3)]"
          >
            <span className="relative z-10">Start Your Free Trial</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDB931] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          <p className="mt-5 text-white/45 text-sm font-light">
            No commitment. No experience needed. Just come dance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Class Card ──────────────────────────────────────────────

function ClassCard({
  level,
  isHovered,
  onHover,
  onLeave,
}: {
  level: (typeof classLevels)[number];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const style = levelStyles[level.id];
  const Icon = style.icon;
  const rgb = style.accentRgb;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative h-full rounded-2xl overflow-hidden transition-all duration-700"
      style={{
        boxShadow: isHovered
          ? `0 0 50px rgba(255,215,0,0.12), 0 25px 60px rgba(0,0,0,0.5)`
          : "0 0 0 transparent, 0 4px 24px rgba(0,0,0,0.2)",
      }}
    >
      {/* Top accent line */}
      <div
        className="h-[2px] w-full transition-all duration-700"
        style={{
          background: `linear-gradient(90deg, transparent 5%, rgba(${rgb}, ${isHovered ? 1 : 0.5}) 50%, transparent 95%)`,
        }}
      />

      {/* Card body */}
      <div className="relative bg-white/[0.04] p-7 sm:p-8 lg:p-10 flex flex-col h-full border border-white/[0.08] border-t-0 rounded-b-2xl transition-all duration-700 group-hover:bg-white/[0.06] group-hover:border-white/[0.12]">
        {/* Ambient glow — top right corner */}
        <div
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl transition-opacity duration-1000 pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(255,215,0,0.1), transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Level indicator + icon */}
        <div className="flex items-center justify-between mb-7">
          {/* Level dots + tagline */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className="w-2 h-2 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor:
                      dot <= level.level
                        ? `rgba(${rgb}, ${isHovered ? 1 : 0.7})`
                        : "rgba(255,255,255,0.1)",
                  }}
                />
              ))}
            </div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-[#FFD700]/70 transition-colors duration-500 group-hover:text-[#FFD700]">
              {level.tagline}
            </span>
          </div>

          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-700 border"
            style={{
              backgroundColor: `rgba(255,215,0,${isHovered ? 0.15 : 0.08})`,
              borderColor: `rgba(255,215,0,${isHovered ? 0.25 : 0.1})`,
            }}
          >
            <Icon
              className="w-[18px] h-[18px] transition-all duration-500"
              style={{
                color: `rgba(${rgb}, ${isHovered ? 1 : 0.65})`,
              }}
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-2xl sm:text-[1.65rem] lg:text-[1.85rem] font-bold text-white mb-2 tracking-tight">
          {level.name}
        </h3>

        {/* Gold accent line */}
        <div
          className="w-10 h-[2px] mb-5 rounded-full transition-all duration-700"
          style={{
            background: `rgba(${rgb}, ${isHovered ? 0.7 : 0.35})`,
          }}
        />

        {/* Description */}
        <p className="text-white/55 text-[13px] sm:text-sm leading-relaxed mb-8 font-light flex-grow transition-colors duration-500 group-hover:text-white/70">
          {level.description}
        </p>

        {/* Schedule details */}
        <div className="space-y-3.5 mb-8 py-5 border-t border-white/[0.08]">
          <div className="flex items-center gap-3">
            <CalendarDays className="w-4 h-4 shrink-0 text-[#FFD700]/50 transition-colors duration-500 group-hover:text-[#FFD700]/80" />
            <span className="text-white/70 text-sm transition-colors duration-500 group-hover:text-white/85">
              {level.days}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 shrink-0 text-[#FFD700]/50 transition-colors duration-500 group-hover:text-[#FFD700]/80" />
            <span className="text-white/70 text-sm transition-colors duration-500 group-hover:text-white/85">
              {level.time}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Timer className="w-4 h-4 shrink-0 text-[#FFD700]/50 transition-colors duration-500 group-hover:text-[#FFD700]/80" />
            <span className="text-white/70 text-sm transition-colors duration-500 group-hover:text-white/85">
              {level.duration}
            </span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/trial"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-500 group/btn border border-[#FFD700]/20 bg-[#FFD700]/[0.07] text-[#FFD700]/80 hover:border-[#FFD700]/40 hover:bg-[#FFD700]/[0.14] hover:text-[#FFD700]"
        >
          Book a Free Trial
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}

// ─── Weekly Overview ─────────────────────────────────────────

function WeeklyOverview() {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-10 py-5 sm:py-6 border-b border-white/[0.07] flex items-center justify-between">
        <h3 className="text-sm sm:text-base font-semibold text-white/80 tracking-wide">
          Weekly Overview
        </h3>
        {/* Legend */}
        <div className="hidden sm:flex items-center gap-5">
          {classLevels.map((cls) => {
            const s = levelStyles[cls.id];
            return (
              <div key={cls.id} className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor:
                          dot <= cls.level
                            ? `rgba(${s.accentRgb}, 0.8)`
                            : "rgba(255,255,255,0.1)",
                      }}
                    />
                  ))}
                </div>
                <span className="text-[11px] sm:text-xs text-white/55 font-medium">
                  {cls.shortName}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
        <div className="grid grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {weekSchedule.map((day) => (
            <div key={day.day} className="text-center">
              {/* Day label */}
              <div className="mb-3 sm:mb-4">
                <div className="text-[10px] sm:text-xs font-bold text-white/60 tracking-[0.15em]">
                  {day.day}
                </div>
              </div>

              {/* Classes */}
              <div className="space-y-2 sm:space-y-2.5">
                {day.classes.map((cls) => {
                  const level = getLevel(cls.id);
                  const s = levelStyles[cls.id];
                  return (
                    <div
                      key={cls.id}
                      className="group/cell relative rounded-lg sm:rounded-xl py-3 sm:py-3.5 px-1.5 sm:px-2 border transition-all duration-500 cursor-default hover:scale-[1.02]"
                      style={{
                        backgroundColor: `rgba(255,215,0,${0.04 * s.intensity})`,
                        borderColor: `rgba(255,215,0,0.1)`,
                      }}
                    >
                      {/* Top accent line */}
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-500 w-5 group-hover/cell:w-10"
                        style={{
                          backgroundColor: `rgba(${s.accentRgb}, 0.5)`,
                        }}
                      />
                      <div
                        className="text-[10px] sm:text-xs font-bold mt-0.5 transition-colors duration-300"
                        style={{ color: `rgba(${s.accentRgb}, 0.85)` }}
                      >
                        {level.shortName}
                      </div>
                      <div className="text-[9px] sm:text-[11px] text-white/40 mt-0.5 font-medium hidden sm:block">
                        {cls.time}
                      </div>
                    </div>
                  );
                })}

                {/* Empty slot — keeps grid aligned */}
                {day.classes.length === 1 && (
                  <div className="py-3 sm:py-3.5 px-1.5 sm:px-2 rounded-lg sm:rounded-xl border border-dashed border-white/[0.06]">
                    <div className="text-[10px] sm:text-xs text-white/[0.12] font-medium">
                      —
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile legend */}
      <div className="sm:hidden px-6 pb-5 pt-2 border-t border-white/[0.06]">
        <div className="flex items-center justify-center gap-5">
          {classLevels.map((cls) => {
            const s = levelStyles[cls.id];
            return (
              <div key={cls.id} className="flex items-center gap-1.5">
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor:
                          dot <= cls.level
                            ? `rgba(${s.accentRgb}, 0.7)`
                            : "rgba(255,255,255,0.1)",
                      }}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-white/50 font-medium">
                  {cls.shortName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
