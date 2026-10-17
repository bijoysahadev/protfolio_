import { useState } from "react";
import { motion } from "framer-motion";

// Edit this list to add or remove tools.
// `slug` is the icon name on simpleicons.org (https://simpleicons.org).
const TECH = [
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Framer Motion", slug: "framer" }, // Simple Icons uses the Framer mark
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Vite", slug: "vite" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Figma", slug: "figma" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

function TechCard({ name, slug }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex flex-col items-center gap-3 rounded-2xl
                 border border-white/10 bg-white/5 p-6 backdrop-blur-md
                 transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
    >
      {/* Glow behind the card on hover */}
      <div
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl
                   bg-gradient-to-br from-indigo-500/0 via-fuchsia-500/0 to-cyan-500/0
                   opacity-0 blur-xl transition-all duration-500
                   group-hover:from-indigo-500/30 group-hover:via-fuchsia-500/20
                   group-hover:to-cyan-500/30 group-hover:opacity-100"
      />

      {failed ? (
        // Fallback if an icon is missing: show the first letter
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl font-bold text-white">
          {name[0]}
        </div>
      ) : (
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-12 w-12 object-contain opacity-60 grayscale
                     transition duration-300
                     group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
        />
      )}

      <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white">
        {name}
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-3 text-white/50">Tools I use to build for the web.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {TECH.map((t) => (
            <TechCard key={t.slug} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
