import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-16 border-b border-border">
      <div className="w-full mx-auto px-8 max-w-screen-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          Building things that matter
        </motion.h2>

        <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">

          {/* Left — photo + stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-lg overflow-hidden border border-border relative h-[340px]">
              <img src="/profile.jpg" alt="Prag" className="w-full absolute" style={{ top: '-18%' }} loading="eager" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Focus', value: 'Full-Stack + AI' },
                { label: 'Experience', value: '2+ Years' },
                { label: 'Location', value: 'Gurugram, IN' },
                { label: 'Status', value: 'Open to work' },
              ].map((item) => (
                <div key={item.label} className="border border-border rounded-md p-3">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-medium text-foreground text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio + what I do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a full-stack developer with 2+ years building production-grade systems —
              CRM integrations, real-time sync engines, and AI agent pipelines using
              LangGraph and Claude API.
            </p>
            <p>
              I enjoy working across the full stack — from designing APIs and async pipelines
              to shipping clean, performant frontends. I take ownership end-to-end, from
              architecture decisions through deployment and monitoring.
            </p>
            <p>
              I'm drawn to hard problems at the intersection of AI and practical engineering —
              systems that don't just work, but scale. Multi-tenant architectures, event-driven
              sync engines, and agents that automate real workflows are where I do my best work.
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">What I do</p>
              <ul className="space-y-3">
                {[
                  'Build full-stack MERN applications with real-time capabilities',
                  'Design and ship multi-agent AI pipelines using LangGraph & Claude',
                  'Create bidirectional CRM integrations (HubSpot, Zoho, Salesforce)',
                  'Architect async systems with BullMQ, Redis, and event-driven patterns',
                  'Deploy and manage cloud infrastructure on Azure, GCP & Firebase',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="text-primary mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
