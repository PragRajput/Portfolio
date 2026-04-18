import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'SuprConfig — HubSpot Deployment Platform',
    description: 'Enterprise SaaS product by SuprDense enabling one-click HubSpot deployments and asset management. Built comprehensive platform for importing and deploying HubSpot assets (workflows, templates, lists, forms) across multiple portals. Features include pre-built module library, sandbox-to-production transfers, and automated deployment system delivering 5x faster HubSpot implementations.',
    image: '/projects/supr-config.svg',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase Functions', 'Firebase Hosting', 'Firebase Database', 'Firebase Storage', 'Vertex AI', 'Cloud Tasks', 'Stripe', 'HubSpot API'],
    demoUrl: 'https://www.suprdense.com/config',
  },
  {
    id: '2',
    title: 'TrueDialog SMS Platform',
    description: 'Enterprise SMS messaging platform for US-based client supporting one-to-one messaging, mass SMS campaigns (up to 100k contacts), workflow automation, and template-based messaging with batch processing capabilities for 10k+ contacts.',
    image: '/projects/truedialog.png',
    technologies: ['React', 'Node.js', 'TypeScript', 'SMS API', 'Azure Functions', 'Azure App Service', 'Cosmos DB', 'SignalR', 'Azure Key Vault', 'Service Bus'],
    demoUrl: 'https://www.truedialog.com/',
  },
  {
    id: '3',
    title: 'Cin7 & HubSpot Integration',
    description: 'Built bi-directional data synchronization between Cin7 inventory management and HubSpot CRM. Automated order creation, invoice calculations, and real-time updates using webhooks. Seamless cross-platform workflow automation.',
    image: '/placeholder-project.jpg',
    technologies: ['Node.js', 'HubSpot API', 'Cin7 API', 'Webhooks', 'Express', 'Firebase Functions'],
    demoUrl: 'https://circleg.world/home.html',
  },
  {
    id: '4',
    title: 'Zoho & HubSpot Multi-Org Integration',
    description: 'Developed scalable integration supporting multiple Zoho organizations with HubSpot. Implemented 2-way data synchronization, multi-tenant architecture, and automated data mapping across different organizational structures.',
    image: '/placeholder-project.jpg',
    technologies: ['TypeScript', 'Python', 'FastAPI', 'Zoho API', 'HubSpot API', 'Webhooks', 'Heroku'],
  },
  {
    id: '5',
    title: 'Educational Learning Management Platform',
    description: 'Comprehensive 4-tier learning platform with hierarchical access: Super Admin creates interactive lessons with drag-and-drop UI; School Admin manages teachers and students; Teachers customize lessons and mark attendance; Students access assignments and submit feedback with real-time dashboard updates.',
    image: '/placeholder-project.jpg',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Role-Based Access', 'Real-time Dashboard'],
  },
  {
    id: '6',
    title: 'SFTP × HubSpot Data Migration',
    description: 'Enterprise-scale data processing system using Python FastAPI handling 200,000–300,000 daily records. Automated cron jobs fetch files from SFTP, upload to GCP Cloud Storage, perform data cleaning including de-duplication and null handling, then migrate to HubSpot via batch processing.',
    image: '/placeholder-project.jpg',
    technologies: ['Python', 'FastAPI', 'GCP Cloud Storage', 'GCP App Engine', 'SFTP', 'HubSpot API', 'Cron Jobs', 'Batch Processing'],
  },
  {
    id: '7',
    title: 'BlendsBooking Integration',
    description: 'Comprehensive booking integration system syncing reservation data with HubSpot across contacts, orders, products, and cancellations. Real-time booking management with automated workflow triggers.',
    image: '/placeholder-project.jpg',
    technologies: ['React', 'Node.js', 'HubSpot API', 'Booking System', 'Nordhost'],
  },
  {
    id: '8',
    title: 'Telegram × HubSpot CRM',
    description: 'Embedded Telegram inside HubSpot CRM for seamless team communication. Automatically generates deal-based Telegram groups to streamline collaboration across sales and business development.',
    image: '/placeholder-project.jpg',
    technologies: ['Telegram API', 'HubSpot API', 'Node.js', 'TypeScript', 'Automated Workflows'],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 border-b border-border">
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          Selected work
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="bg-card border border-border rounded-lg p-5 cursor-pointer group hover:border-primary/50 transition-colors flex flex-col gap-3"
            >
              <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-secondary text-muted-foreground rounded text-xs border border-border">
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
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between p-6 border-b border-border">
                <h2 className="text-lg font-semibold pr-4">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {selectedProject.description}
                </p>

                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Visit project
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}

                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-secondary text-muted-foreground rounded text-xs font-medium border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
