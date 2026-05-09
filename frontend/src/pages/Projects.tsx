import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: '11',
    title: 'LexigoAI — Vocabulary Learning App',
    description: 'AI-powered vocabulary and language learning app. Surfaces 3 fresh AI-generated words daily, lets you search or generate any word with definitions, synonyms, antonyms, and translations. Quiz yourself across 4 modes (flashcard, multiple choice, fill-in-blank, match) plus a Random AI Quiz. Per-account word and sentence collections with full attempt history.',
    image: '/placeholder-project.jpg',
    technologies: ['Next.js 16', 'React 19', 'Supabase', 'OpenRouter', 'Zustand', 'Tailwind CSS v4', 'shadcn/ui', 'Netlify'],
    demoUrl: 'https://lexigoai.netlify.app/',
    personal: true,
  },
  {
    id: '1',
    title: 'Synker — Integration Automation Platform',
    description: 'Webhook-driven workflow engine for real-time CRM/ERP sync across HubSpot, QuickBooks, Close CRM, Zoho, and Cin7. Workflows are defined as typed step graphs (get_record, lookup, branch, iterate, update_record) scoped per connection — preventing O(n) webhook fan-out. Ships a conversational AI builder (Claude) backed by a provider knowledge base encoding connector field paths, upsert patterns, and failure modes. Includes end-to-end bidirectional HubSpot ↔ QuickBooks sync with QB invoice write-back and loop-guard branch patterns. Custom HubSpot property detection surfaces missing fields before they silently fail at runtime. BullMQ + Redis for async processing with retry; OAuth 2.0 token refresh handled transparently per connector.',
    image: '/placeholder-project.jpg',
    technologies: ['Node.js', 'TypeScript', 'Python', 'FastAPI', 'LangGraph', 'Claude API', 'Tool Calling', 'Next.js', 'BullMQ', 'Redis', 'MongoDB', 'Express', 'OAuth 2.0', 'Webhooks'],
    demoUrl: 'https://synker-landing-gq88.vercel.app/',
    personal: true,
  },
  {
    id: '2',
    title: 'HubMetrics — CRM Audit Agent',
    description: 'AI-powered multi-agent audit platform (orchestrator → narrator pipeline) running 25+ health checks across HubSpot Sales, Marketing, and Service Hub. Uses Claude AI to generate prioritized, severity-labeled reports with PDF export.',
    image: '/placeholder-project.jpg',
    technologies: ['Claude API', 'LangGraph', 'Tool Calling', 'Node.js', 'TypeScript', 'Express', 'MongoDB'],
    personal: true,
  },
  {
    id: '3',
    title: 'SuprConfig Chrome Extension',
    description: 'Chrome extension built to bypass HubSpot API limitations, enabling support for reports and dashboards within the SuprConfig deployment ecosystem. Extends the core platform capabilities beyond what the HubSpot API officially exposes.',
    image: '/placeholder-project.jpg',
    technologies: ['Chrome Extension', 'JavaScript', 'TypeScript', 'HubSpot API', 'React'],
  },
  {
    id: '4',
    title: 'SuprConfig — HubSpot Deployment Platform',
    description: 'Enterprise SaaS product by SuprDense enabling one-click HubSpot deployments and asset management. Built comprehensive platform for importing and deploying HubSpot assets (workflows, templates, lists, forms) across multiple portals. Features include pre-built module library, sandbox-to-production transfers, and automated deployment system delivering 5x faster HubSpot implementations.',
    image: '/projects/supr-config.svg',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase Functions', 'Firebase Hosting', 'Firebase Database', 'Firebase Storage', 'Vertex AI', 'Cloud Tasks', 'Stripe', 'HubSpot API'],
    demoUrl: 'https://www.suprdense.com/config',
  },
  {
    id: '5',
    title: 'TrueDialog SMS Platform',
    description: 'Enterprise SMS messaging platform for US-based client supporting one-to-one messaging, mass SMS campaigns (up to 100k contacts), workflow automation, and template-based messaging with batch processing capabilities for 10k+ contacts.',
    image: '/projects/truedialog.png',
    technologies: ['React', 'Node.js', 'TypeScript', 'SMS API', 'Azure Functions', 'Azure App Service', 'Cosmos DB', 'SignalR', 'Azure Key Vault', 'Service Bus'],
    demoUrl: 'https://www.truedialog.com/',
  },
  {
    id: 'p6',
    title: 'Cin7 & HubSpot Integration',
    description: 'Built bi-directional data synchronization between Cin7 inventory management and HubSpot CRM. Automated order creation, invoice calculations, and real-time updates using webhooks. Seamless cross-platform workflow automation.',
    image: '/placeholder-project.jpg',
    technologies: ['Node.js', 'HubSpot API', 'Cin7 API', 'Webhooks', 'Express', 'Firebase Functions'],
    demoUrl: 'https://circleg.world/home.html',
  },
  {
    id: '9',
    title: 'DailyLog — Work Tracking App',
    description: 'Personal work tracking app for developers to log daily tasks, track time per project, and browse history via a calendar view. Features AI-powered standup summaries via Gemini API, Google OAuth sign-in, and profile customization with Cloudinary avatar uploads.',
    image: '/placeholder-project.jpg',
    technologies: ['Next.js 14', 'TypeScript', 'Express', 'MongoDB', 'Google OAuth', 'Gemini API', 'Cloudinary', 'Tailwind CSS', 'Framer Motion'],
    personal: true,
  },
  {
    id: '10',
    title: 'DailyPing — VS Code Dev Tracker',
    description: 'VS Code extension that silently tracks coding activity in the background and generates AI-powered standup summaries with zero interruption. Local dashboard shows hourly productivity charts and per-project language breakdown. Fully private — no cloud sync, no telemetry, all data stays on your machine.',
    image: '/placeholder-project.jpg',
    technologies: ['VS Code API', 'TypeScript', 'Express', 'React', 'Vite', 'Redux Toolkit', 'Recharts', 'Gemini API', 'esbuild'],
    personal: true,
  },
  {
    id: 'p7',
    title: 'Zoho & HubSpot Multi-Org Integration',
    description: 'Developed scalable integration supporting multiple Zoho organizations with HubSpot. Implemented 2-way data synchronization, multi-tenant architecture, and automated data mapping across different organizational structures.',
    image: '/placeholder-project.jpg',
    technologies: ['TypeScript', 'Python', 'FastAPI', 'Zoho API', 'HubSpot API', 'Webhooks', 'Heroku'],
  },
  {
    id: 'p8',
    title: 'Educational Learning Management Platform',
    description: 'Comprehensive 4-tier learning platform with hierarchical access: Super Admin creates interactive lessons with drag-and-drop UI; School Admin manages teachers and students; Teachers customize lessons and mark attendance; Students access assignments and submit feedback with real-time dashboard updates.',
    image: '/placeholder-project.jpg',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Role-Based Access', 'Real-time Dashboard'],
  },
  {
    id: 'p11',
    title: 'SFTP × HubSpot Data Migration',
    description: 'Enterprise-scale data processing system using Python FastAPI handling 200,000–300,000 daily records. Automated cron jobs fetch files from SFTP, upload to GCP Cloud Storage, perform data cleaning including de-duplication and null handling, then migrate to HubSpot via batch processing.',
    image: '/placeholder-project.jpg',
    technologies: ['Python', 'FastAPI', 'GCP Cloud Storage', 'GCP App Engine', 'SFTP', 'HubSpot API', 'Cron Jobs', 'Batch Processing'],
  },
  {
    id: 'p12',
    title: 'BlendsBooking Integration',
    description: 'Comprehensive booking integration system syncing reservation data with HubSpot across contacts, orders, products, and cancellations. Real-time booking management with automated workflow triggers.',
    image: '/placeholder-project.jpg',
    technologies: ['React', 'Node.js', 'HubSpot API', 'Booking System', 'Nordhost'],
  },
  {
    id: 'p13',
    title: 'Telegram × HubSpot CRM',
    description: 'Embedded Telegram inside HubSpot CRM for seamless team communication. Automatically generates deal-based Telegram groups to streamline collaboration across sales and business development.',
    image: '/placeholder-project.jpg',
    technologies: ['Telegram API', 'HubSpot API', 'Node.js', 'TypeScript', 'Automated Workflows'],
  },
];

type Tab = 'all' | 'personal' | 'work';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'personal') return p.personal === true;
    if (activeTab === 'work') return !p.personal;
    return true;
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const tabs: { key: Tab; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'personal', label: 'Personal' },
    { key: 'work', label: 'Work' },
  ];

  return (
    <section id="projects" className="pt-16 pb-4 border-b border-border">
      <div className="w-full mx-auto px-8 max-w-screen-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
        >
          Projects
        </motion.p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Selected work
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 p-1 bg-secondary rounded-lg border border-border self-start sm:self-auto"
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => { setActiveTab(tab.key); setShowAll(false); }}
                className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-card text-foreground shadow-sm border border-border'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="bg-card border border-border rounded-lg p-5 cursor-pointer group hover:border-primary/50 transition-all flex flex-col gap-3 hover:bg-card/80"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-secondary text-muted-foreground rounded-full text-xs border border-border">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-0.5 text-muted-foreground text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-8 mb-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 border border-border rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              {showAll ? 'Show less' : `Show ${filteredProjects.length - 6} more projects`}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-xl max-w-xl w-full max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between p-6 pb-4">
                <h2 className="text-base font-semibold pr-4 leading-snug">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors shrink-0 p-1 hover:bg-secondary rounded-md"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className={`px-6 space-y-5 ${selectedProject.demoUrl ? 'pb-4' : 'pb-6'}`}>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {selectedProject.description}
                </p>

                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-secondary text-muted-foreground rounded-full text-xs font-medium border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {selectedProject.demoUrl && (
                <div className="flex items-center justify-end px-6 py-3 border-t border-border">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border hover:border-primary/60 bg-secondary/50 hover:bg-primary/5 text-xs font-medium text-foreground hover:text-primary transition-all duration-200"
                  >
                    Visit project
                    <svg className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
