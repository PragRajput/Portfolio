import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center border-b border-border">
      <div className="w-full mx-auto px-8 max-w-screen-2xl grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-4"
          >
            Hi, I'm a<br />
            <span className="text-primary">Full-Stack</span> Dev
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-sm font-medium"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Open to Work
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 min-h-[32px]"
          >
            <TypeAnimation
              sequence={[
                'Crafting clean full-stack web experiences',
                2000,
                'Building multi-agent AI pipelines with LangGraph',
                2000,
                'Specialized in React, Next.js & TypeScript frontends',
                2000,
                'Building scalable Node.js & Express backends',
                2000,
                'Integrating APIs with 2-way CRM synchronization',
                2000,
                'Prompt engineering & Claude API integrations',
                2000,
                'Deploying on Azure, GCP, Firebase and Vercel',
                2000,
              ]}
              wrapper="span"
              speed={60}
              deletionSpeed={75}
              repeat={Infinity}
              cursor={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:bg-primary/90 transition-colors text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border rounded-md font-medium text-sm hover:bg-secondary transition-colors text-center"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right — code card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block"
        >
          <div className="border border-border rounded-lg overflow-hidden bg-card font-mono text-sm">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/50">
              <span className="group/btn relative w-3 h-3 rounded-full bg-red-500 flex items-center justify-center cursor-pointer hover:brightness-110 transition-all">
                <span className="hidden group-hover/btn:block text-[7px] leading-none text-red-900 font-bold select-none">✕</span>
              </span>
              <span className="group/btn relative w-3 h-3 rounded-full bg-yellow-400 flex items-center justify-center cursor-pointer hover:brightness-110 transition-all">
                <span className="hidden group-hover/btn:block text-[7px] leading-none text-yellow-900 font-bold select-none">−</span>
              </span>
              <span className="group/btn relative w-3 h-3 rounded-full bg-green-500 flex items-center justify-center cursor-pointer hover:brightness-110 transition-all">
                <span className="hidden group-hover/btn:block text-[7px] leading-none text-green-900 font-bold select-none">↗</span>
              </span>
              <span className="ml-3 text-xs text-muted-foreground">dev.ts</span>
            </div>
            <div className="p-6 space-y-1 text-xs leading-6">
              <p><span className="text-blue-500 dark:text-blue-400">const</span> <span className="text-foreground">dev</span> <span className="text-muted-foreground">=</span> <span className="text-muted-foreground">{'{'}</span></p>
              <p className="pl-4"><span className="text-primary">name</span><span className="text-muted-foreground">:</span> <span className="text-amber-600 dark:text-amber-300">"Prag Dev Singh"</span><span className="text-muted-foreground">,</span></p>
              <p className="pl-4"><span className="text-primary">role</span><span className="text-muted-foreground">:</span> <span className="text-amber-600 dark:text-amber-300">"Full-Stack + AI Developer"</span><span className="text-muted-foreground">,</span></p>
              <p className="pl-4"><span className="text-primary">company</span><span className="text-muted-foreground">:</span> <span className="text-amber-600 dark:text-amber-300">"OneMetric"</span><span className="text-muted-foreground">,</span></p>
              <p className="pl-4"><span className="text-primary">stack</span><span className="text-muted-foreground">: [</span></p>
              <p className="pl-8"><span className="text-amber-600 dark:text-amber-300">"React"</span><span className="text-muted-foreground">,</span> <span className="text-amber-600 dark:text-amber-300">"Node.js"</span><span className="text-muted-foreground">,</span> <span className="text-amber-600 dark:text-amber-300">"TypeScript"</span><span className="text-muted-foreground">,</span></p>
              <p className="pl-8"><span className="text-amber-600 dark:text-amber-300">"LangGraph"</span><span className="text-muted-foreground">,</span> <span className="text-amber-600 dark:text-amber-300">"Claude API"</span><span className="text-muted-foreground">,</span></p>
              <p className="pl-8"><span className="text-amber-600 dark:text-amber-300">"MongoDB"</span><span className="text-muted-foreground">,</span> <span className="text-amber-600 dark:text-amber-300">"Redis"</span><span className="text-muted-foreground">,</span></p>
              <p className="pl-4"><span className="text-muted-foreground">],</span></p>
              <p className="pl-4"><span className="text-primary">openToWork</span><span className="text-muted-foreground">:</span> <span className="text-blue-500 dark:text-blue-400">true</span><span className="text-muted-foreground">,</span></p>
              <p><span className="text-muted-foreground">{'}'}</span></p>
              <p className="pt-2 text-muted-foreground/50">// 2+ yrs · 15+ projects · 3+ AI agents</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
