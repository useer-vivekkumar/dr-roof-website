const projects = [
  { label: "Roswell · Shingle re-roof", tone: "from-slate-700 to-slate-900" },
  { label: "Marietta · Storm repair", tone: "from-copper-600 to-copper-700" },
  { label: "Atlanta · Commercial flat roof", tone: "from-slate-600 to-slate-800" },
  { label: "Roswell · Metal roof install", tone: "from-copper-500 to-copper-600" },
  { label: "Marietta · Flashing & gutters", tone: "from-slate-800 to-slate-950" },
  { label: "Atlanta · Full replacement", tone: "from-copper-700 to-slate-900" },
];

function RoofGlyph() {
  return (
    <svg viewBox="0 0 120 60" className="h-16 w-28 opacity-30" aria-hidden="true">
      <path
        d="M0,60 L0,40 L30,10 L60,40 L90,10 L120,40 L120,60 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600">
              Recent work
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
              A sample of roofs we&apos;ve stood behind.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-500">
            Representative project types across our service area. Full
            before/after photo sets are available on request.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.label}
              className={`group relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl bg-gradient-to-br ${project.tone} p-6 shadow-card transition-transform hover:-translate-y-1`}
            >
              <div className="absolute right-4 top-4 text-white">
                <RoofGlyph />
              </div>
              <p className="relative font-display text-lg font-semibold text-white">
                {project.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
