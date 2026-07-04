import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'OneMetric',
    formerly: 'formerly Growtomation',
    role: 'Full-Stack Developer',
    period: 'Apr 2025 — Present',
    current: true,
    bullets: [
      'Building production-grade MERN features and AI agent systems',
      'Owning end-to-end development of the SuprConfig CRM deployment product',
      'Architecting multi-agent pipelines using LangGraph and Claude API',
      'Built 40+ integrations between platforms like Salesforce, HubSpot, QuickBooks, Zoho Books, NetSuite, etc.',
      'Built TrueDialog — public HubSpot app enabling one-to-one and mass SMS campaigns for 100k+ contacts',
    ],
  },
  {
    company: 'Deftsoft Informatics',
    role: 'Full-Stack Developer',
    period: 'Jun 2024 — Apr 2025',
    current: false,
    bullets: [
      'Delivered full-stack MERN applications with third-party API integrations',
      'Built an Educational Learning Management Platform (LMS)',
      'Built Eu Pro Scene — a gaming tournament platform with PayPal wallet top-ups, credit-based tournament entry, and withdrawals',
      'Implemented Azure-hosted infrastructure: App Service, Functions, SignalR, Service Bus',
      'Regular production deployments with CI/CD pipelines',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 border-b border-border">
      <div className="w-full mx-auto px-8 max-w-screen-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          Where I've worked
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-[7px] hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="md:pl-10 relative"
              >
                <div className="hidden md:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <span className="font-semibold text-foreground">{exp.company}</span>
                    {exp.formerly && (
                      <span className="text-xs text-muted-foreground ml-2">({exp.formerly})</span>
                    )}
                    <span className="text-muted-foreground mx-2">·</span>
                    <span className="text-sm text-muted-foreground">{exp.role}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-medium">
                        Current
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1 shrink-0">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
