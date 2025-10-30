import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, {
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className={`mb-16 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-amber-500 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="text-xl text-amber-400 font-semibold ml-16 italic">
            {subtitle}
          </p>
        )}
      </div>
      <div className="glass-effect rounded-2xl p-8 md:p-10 border border-slate-700/50 prose prose-invert max-w-none prose-p:text-slate-300 prose-p:text-lg prose-p:leading-relaxed prose-headings:text-amber-300 prose-strong:text-amber-400 prose-strong:font-bold prose-ul:list-disc prose-ul:ml-8 prose-li:my-2 prose-li:text-slate-300 prose-a:text-amber-400 prose-a:no-underline hover:prose-a:text-amber-300">
        {children}
      </div>
    </section>
  );
};

export default Section;
