import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, BrainCircuit, Code2, Database, Download,
  ExternalLink, Linkedin, Mail, Menu, X, Terminal, Cpu, Sparkles,
  Layers, Award, MapPin, Phone, GraduationCap
} from "lucide-react";

const navItems = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Journey", "#journey"], ["Contact", "#contact"]
];

const skillGroups = [
  { title: "Machine Learning", icon: BrainCircuit, skills: ["Scikit-learn", "TensorFlow", "XGBoost"] },
  { title: "Data Science", icon: Database, skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { title: "Programming & Web", icon: Code2, skills: ["Python", "Flask"] },
  { title: "Developer Tools", icon: Terminal, skills: ["Git", "GitHub", "VS Code"] }
];

const projects = [
  {
    number: "01",
    title: "ExplainAI Studio",
    label: "EXPLAINABLE AUTOML",
    status: "IN PROGRESS",
    description: "Developing an Explainable AutoML platform that automates data preprocessing, model training and evaluation. Integrating SHAP, LIME and LLM-based explanations to make model behaviour more interpretable.",
    stack: ["Python", "AutoML", "SHAP", "LIME"],
    href: "https://github.com/Praneeth8354"
  },
  {
    number: "02",
    title: "Arecanut Price Prediction",
    label: "MACHINE LEARNING + GENERATIVE AI",
    status: "PROJECT",
    description: "Built a Flask-based application to predict arecanut prices using historical agricultural data and machine learning models. Integrated Generative AI to provide natural-language explanations and visual insights.",
    stack: ["Python", "Flask", "Machine Learning", "Generative AI"],
    href: "https://github.com/Praneeth8354/AgroNova"
  }
];

const certifications = [
  "Microsoft Certified Azure Fundamentals",
  "IBM Rapid Development for AI Services",
  "NPTEL – Machine Learning"
];

function SectionHeading({ number, eyebrow, children }) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-xs font-bold tracking-[.32em] text-cyan-300">{number} / {eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {children}<span className="text-cyan-300">.</span>
      </h2>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#070b14] text-slate-300">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-[.12]"
        style={{ backgroundImage: "linear-gradient(rgba(34,211,238,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.12) 1px, transparent 1px)", backgroundSize: "58px 58px", maskImage: "linear-gradient(to bottom, black, transparent 75%)" }} />

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070b14]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-black tracking-widest text-white">PK<span className="text-cyan-300">.</span></a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, href]) => <a key={label} href={href} className="text-sm text-slate-400 transition hover:text-cyan-300">{label}</a>)}
          </div>
          <a href="#contact" className="hidden rounded-full border border-cyan-300/50 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950 md:block">Let's Connect</a>
          <button className="text-white md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <div className="border-t border-white/10 bg-[#070b14] px-6 py-4 md:hidden">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block py-3 text-slate-300 hover:text-cyan-300">{label}</a>)}
        </div>}
      </header>

      <main className="relative z-10">
        <section id="home" className="relative flex min-h-screen items-center px-6 pb-20 pt-32">
          <div className="pointer-events-none absolute -right-40 top-24 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[130px]" />
          <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
              <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[.35em] text-cyan-300"><span className="h-px w-12 bg-cyan-300" /> MACHINE LEARNING · GENERATIVE AI</p>
              <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-7xl">
                Hi, I'm<br />Praneeth<span className="text-cyan-300">.</span>
              </h1>
              <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">Machine Learning &<br className="hidden sm:block" /> Generative AI Enthusiast</h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                I build AI-driven applications and explore ways to make machine learning more useful, explainable and accessible.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-200">Explore my work <ArrowUpRight size={18} /></a>
                <a href="/documents/Praneeth_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"><Download size={18} /> Resume</a>
              </div>
              <div className="mt-14 flex flex-wrap gap-9 border-t border-white/10 pt-7 text-sm text-slate-500">
                <div><p className="text-2xl font-bold text-white">2023–27</p><p>BE · AIML</p></div>
                <div><p className="text-2xl font-bold text-white">2</p><p>Featured projects</p></div>
                <div><p className="text-2xl font-bold text-white">3</p><p>Certifications</p></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9 }} className="relative mx-auto flex aspect-square w-full max-w-[470px] items-center justify-center">
              <div className="absolute inset-[7%] rounded-full border border-cyan-300/20" />
              <div className="absolute inset-[17%] rounded-full border border-cyan-300/20" />
              <div className="absolute inset-[27%] rounded-full border border-dashed border-cyan-300/30" />
              <div className="absolute h-[65%] w-[65%] rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute h-[52%] w-[52%] rotate-45 rounded-[2.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-blue-500/5" />
              <div className="relative flex h-44 w-44 items-center justify-center rounded-[2.7rem] border border-cyan-200/40 bg-[#0d1b2b]/90 shadow-[0_0_80px_rgba(34,211,238,.12)] sm:h-52 sm:w-52">
                <BrainCircuit size={112} strokeWidth={1} className="text-cyan-200" />
              </div>
              <div className="absolute right-[8%] top-[15%] rounded-2xl border border-white/10 bg-[#101c2b] p-4 text-cyan-200 shadow-xl"><Cpu size={27} /></div>
              <div className="absolute bottom-[16%] left-[5%] rounded-2xl border border-white/10 bg-[#101c2b] p-4 text-cyan-200 shadow-xl"><Code2 size={27} /></div>
              <div className="absolute bottom-[9%] right-[13%] rounded-2xl border border-white/10 bg-[#101c2b] p-4 text-cyan-200 shadow-xl"><Database size={27} /></div>
              <div className="absolute left-[16%] top-[17%] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_5px_rgba(34,211,238,.6)]" />
            </motion.div>
          </div>
          <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-cyan-300 md:block"><ArrowDown className="animate-bounce" /></a>
        </section>

        <section id="about" className="scroll-mt-24 px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading number="01" eyebrow="PROFILE">About me</SectionHeading>
            <div className="grid gap-12 lg:grid-cols-2">
              <h3 className="text-2xl font-semibold leading-relaxed text-white sm:text-3xl">Curious about intelligence. Focused on building practical technology.</h3>
              <div className="space-y-5 leading-8 text-slate-400">
                <p>I'm pursuing a Bachelor of Engineering in Artificial Intelligence and Machine Learning at Yenepoya Institute of Technology (2023–2027). My experience includes machine learning, data analysis, Flask web development and Generative AI applications.</p>
                <p>I'm especially interested in Explainable AI and AutoML—building systems that not only make predictions, but also help people understand the results.</p>
                <p className="flex items-center gap-2 pt-2 text-cyan-200"><MapPin size={18} /> Dakshina Kannada, Karnataka</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 bg-[#0b1220] px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading number="02" eyebrow="TECH STACK">Skills & tools</SectionHeading>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group, i) => {
                const Icon = group.icon;
                return <motion.div key={group.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="rounded-2xl border border-white/10 bg-[#101c2b] p-7 transition hover:-translate-y-1 hover:border-cyan-300/40">
                  <Icon size={30} className="mb-6 text-cyan-300" />
                  <h3 className="mb-5 text-lg font-bold text-white">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">{group.skills.map(skill => <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">{skill}</span>)}</div>
                </motion.div>;
              })}
            </div>
            <p className="mt-7 max-w-4xl text-sm leading-7 text-slate-500">Coursework: Machine Learning, Deep Learning, Artificial Intelligence, DBMS, Operating Systems and Computer Networks.</p>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading number="03" eyebrow="SELECTED WORK">Featured projects</SectionHeading>
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, i) => <motion.article key={project.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="group flex flex-col rounded-2xl border border-white/10 bg-[#101c2b] p-8 transition hover:-translate-y-1 hover:border-cyan-300/40">
                <div className="mb-8 flex items-center justify-between"><span className="text-4xl font-black text-cyan-300/30">{project.number}</span><Layers className="text-cyan-300" /></div>
                <p className="mb-3 text-xs font-bold tracking-[.2em] text-cyan-300">{project.label}</p>
                <h3 className="mb-4 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mb-7 flex-1 leading-8 text-slate-400">{project.description}</p>
                <div className="mb-7 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="rounded-full bg-white/5 px-3 py-2 text-xs text-slate-300">{item}</span>)}</div>
                <div className="flex items-center justify-between border-t border-white/10 pt-5"><span className="text-xs font-semibold tracking-widest text-slate-500">{project.status}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} link`} className="text-cyan-300 transition group-hover:translate-x-1"><ExternalLink size={20} /></a></div>
              </motion.article>)}
            </div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-24 bg-[#0b1220] px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading number="04" eyebrow="EDUCATION & MILESTONES">My journey</SectionHeading>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#101c2b] p-8">
                <div className="mb-5 flex items-center gap-3 text-cyan-300"><GraduationCap size={25} /><h3 className="text-xl font-bold text-white">Education</h3></div>
                <p className="text-lg font-semibold text-white">Bachelor of Engineering</p>
                <p className="mt-1 text-cyan-200">Artificial Intelligence and Machine Learning</p>
                <p className="mt-3 text-slate-400">Yenepoya Institute of Technology</p>
                <p className="mt-1 text-sm text-slate-500">2023 – 2027</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#101c2b] p-8">
                <div className="mb-5 flex items-center gap-3 text-cyan-300"><Award size={25} /><h3 className="text-xl font-bold text-white">Certifications</h3></div>
                <ul className="space-y-4">{certifications.map(cert => <li key={cert} className="border-b border-white/10 pb-3 text-slate-300">{cert}</li>)}</ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#101c2b] p-8 lg:col-span-2">
                <h3 className="mb-3 text-xl font-bold text-white">HackABHiGNA Hackathon</h3>
                <p className="max-w-4xl leading-8 text-slate-400">Participated in a 24-hour hackathon focused on developing innovative AI-based solutions for real-world challenges. Collaborated with a multidisciplinary team to design, develop and present a working prototype, strengthening teamwork, rapid problem-solving and presentation skills.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading number="05" eyebrow="GET IN TOUCH">Let's connect</SectionHeading>
            <div className="grid gap-12 lg:grid-cols-2">
              <div><h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">Have an idea?<span className="block text-cyan-300">Let's build something meaningful.</span></h3><p className="mt-6 max-w-lg leading-8 text-slate-400">Interested in AI, machine learning or building useful technology? Feel free to connect.</p></div>
              <div className="space-y-4">
                <a href="mailto:praneethkulal777@gmail.com" className="flex items-center justify-between rounded-xl border border-white/10 bg-[#101c2b] p-5 transition hover:border-cyan-300/50"><span className="flex items-center gap-4"><Mail className="text-cyan-300" /> <span className="text-white">praneethkulal777@gmail.com</span></span><ArrowUpRight /></a>
                <a href="tel:+918105774391" className="flex items-center justify-between rounded-xl border border-white/10 bg-[#101c2b] p-5 transition hover:border-cyan-300/50"><span className="flex items-center gap-4"><Phone className="text-cyan-300" /> <span className="text-white">+91 8105774391</span></span><ArrowUpRight /></a>
                <a href="https://github.com/Praneeth8354" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 bg-[#101c2b] p-5 transition hover:border-cyan-300/50"><span className="flex items-center gap-4"><Code2 className="text-cyan-300" /> <span className="text-white">GitHub</span></span><ArrowUpRight /></a>
                <a href="https://www.linkedin.com/in/praneeth-8ba232292" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 bg-[#101c2b] p-5 transition hover:border-cyan-300/50"><span className="flex items-center gap-4"><Linkedin className="text-cyan-300" /> <span className="text-white">LinkedIn</span></span><ArrowUpRight /></a>
                <a href="/documents/Praneeth_Resume.pdf" download className="flex items-center justify-center gap-3 rounded-xl bg-cyan-300 p-5 font-bold text-slate-950 transition hover:bg-cyan-200"><Download size={19} /> Download my resume</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row"><p>© {new Date().getFullYear()} Praneeth. Built with curiosity.</p><a href="#home" className="transition hover:text-cyan-300">Back to top ↑</a></div>
      </footer>
    </div>
  );
}
