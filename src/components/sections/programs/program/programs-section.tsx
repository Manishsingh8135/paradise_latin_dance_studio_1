"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { programsData, ClassCategory, DifficultyLevel } from "../data/programs-data";
import { ProgramCard } from "./program-card";
import { PremiumButton } from "../../../ui/premium-button";
import { HeroParticles } from "../../../ui/hero-particles";
import { Calendar, Filter } from "lucide-react";

type FilterOption = ClassCategory | DifficultyLevel | "All";

interface DropdownProps {
  label: string;
  options: FilterOption[];
  selectedOption: FilterOption;
  onOptionChange: (option: FilterOption) => void;
  layoutId: string;
}

export function ProgramsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ClassCategory | "All">("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | "All">("All");
  const [activeFilters, setActiveFilters] = useState(0);
  
  const filteredPrograms = programsData.filter(program => {
    const categoryMatch = selectedCategory === "All" || program.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === "All" || program.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const categories: (ClassCategory | "All")[] = ["All", "Special Ops", "Strength", "Combat", "Recovery"];
  const difficulties: (DifficultyLevel | "All")[] = ["All", "Beginner", "Intermediate", "Advanced", "Elite"];

  const handleCategoryChange = (category: FilterOption) => {
    if (category === selectedCategory) {
      setSelectedCategory("All");
    } else {
      setSelectedCategory(category as ClassCategory | "All");
    }
    setExpandedId(null);
  };

  const handleDifficultyChange = (difficulty: FilterOption) => {
    if (difficulty === selectedDifficulty) {
      setSelectedDifficulty("All");
    } else {
      setSelectedDifficulty(difficulty as DifficultyLevel | "All");
    }
    setExpandedId(null);
  };

  useEffect(() => {
    let count = 0;
    if (selectedCategory !== "All") count++;
    if (selectedDifficulty !== "All") count++;
    setActiveFilters(count);
  }, [selectedCategory, selectedDifficulty]);

  return (
    <section id="training-programs" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <HeroParticles />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <div className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent font-medium">
                Training Programs
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mt-6 mb-6"
          >
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Elite Training
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              Programs
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg mb-8"
          >
            Experience military-grade fitness programs designed to transform your body and mind.
            Choose from our diverse range of specialized training sessions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <PremiumButton variant="primary">
              View Full Schedule <Calendar className="w-5 h-5 ml-2" />
            </PremiumButton>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-40 max-w-6xl mx-auto mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="flex flex-col space-y-6">
              {/* Filter Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Filter className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-white font-medium">Filter Programs</span>
                  {activeFilters > 0 && (
                    <span className="bg-[#FFD700] text-black text-xs font-medium px-2 py-1 rounded-full">
                      {activeFilters} active
                    </span>
                  )}
                </div>
                {activeFilters > 0 && (
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedDifficulty("All");
                      setExpandedId(null);
                    }}
                    className="text-sm text-white/60 hover:text-[#FFD700] transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>

              {/* Category and Difficulty Dropdowns */}
              <div className="flex flex-col md:flex-row gap-4">
                <Dropdown
                  label="Program Category"
                  options={categories}
                  selectedOption={selectedCategory}
                  onOptionChange={handleCategoryChange}
                  layoutId="categoryGlow"
                />
                <Dropdown
                  label="Difficulty Level"
                  options={difficulties}
                  selectedOption={selectedDifficulty}
                  onOptionChange={handleDifficultyChange}
                  layoutId="difficultyGlow"
                />
              </div>

              {/* Results Count */}
              <div className="text-sm text-white/60">
                Showing {filteredPrograms.length} {filteredPrograms.length === 1 ? 'program' : 'programs'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          layout
          className="relative z-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {filteredPrograms.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                isExpanded={expandedId === program.id}
                onExpand={() => setExpandedId(expandedId === program.id ? null : program.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -left-1/4 top-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,215,0,0.1),transparent_50%)] blur-3xl pointer-events-none" />
        <div className="absolute -right-1/4 bottom-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(218,165,32,0.1),transparent_50%)] blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, selectedOption, onOptionChange, layoutId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative w-full md:w-auto" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={[
                    "w-full px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    "flex items-center justify-between",
                    "hover:shadow-[0_0_20px_-12px] hover:shadow-[#FFD700]/50",
                    selectedOption !== "All"
                        ? "bg-[#FFD700] text-black shadow-[0_0_30px_-12px] shadow-[#FFD700]/50"
                        : "bg-white/10 text-white hover:bg-white/20"
                ].join(" ")}
            >
                <span>{label}: </span>
                <span className="ml-1">{selectedOption}</span>
                <svg
                    className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 mt-2 w-full bg-black/90 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg"
                        style={{ zIndex: 9999 }}
                        layoutId={layoutId}
                    >
                        <div className="py-1">
                            {options.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => {
                                        onOptionChange(option);
                                        setIsOpen(false);
                                    }}
                                    className={[
                                        "block px-4 py-2 text-sm w-full text-left rounded-xl",
                                        "hover:bg-[#FFD700]/20",
                                        selectedOption === option ? "text-[#FFD700]" : "text-white"
                                    ].join(" ")}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};