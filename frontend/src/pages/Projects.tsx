import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'SuprConfig - HubSpot Deployment Platform',
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
    technologies: ['React', 'Node.js', 'TypeScript', 'SMS API', 'Workflows', 'Azure Functions', 'Azure App Service', 'Cosmos DB', 'SignalR', 'Azure Key Vault', 'Service Bus'],
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
    technologies: ['TypeScript', 'Python', 'FastAPI', 'Zoho API', 'HubSpot API', 'Multi-tenant', 'Webhooks', 'Heroku'],
  },
  {
    id: '5',
    title: 'Educational Learning Management Platform',
    description: 'Comprehensive 4-tier learning platform with hierarchical access: Super Admin creates interactive lessons with drag-and-drop UI and gamified learning modules; School Admin manages institutional data, teachers, and students; Teachers customize lessons, mark attendance, and review leave requests; Students access assignments, personalized feedback, and submit leave applications with real-time dashboard updates across all hierarchy levels.',
    image: '/placeholder-project.jpg',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Drag & Drop', 'Role-Based Access', 'Real-time Dashboard'],
  },
  {
    id: '6',
    title: 'SFTP x HubSpot Data Migration',
    description: 'Built for French-based client: Enterprise-scale data processing system using Python FastAPI handling 200,000-300,000 daily records from 3 files. Automated daily cron jobs fetch files from SFTP server, upload to GCP Cloud Storage, perform comprehensive data cleaning including de-duplication, formatting, and null data handling, then migrate processed data to HubSpot via batch processing. Entire pipeline hosted on GCP infrastructure.',
    image: '/placeholder-project.jpg',
    technologies: ['Python', 'FastAPI', 'GCP Cloud Storage', 'GCP App Engine', 'SFTP', 'HubSpot API', 'Cron Jobs', 'Batch Processing', 'Data Cleaning'],
  },
  {
    id: '7',
    title: 'BlendsBooking Integration Platform',
    description: 'Created comprehensive booking integration system syncing reservation data with HubSpot across multiple objects including contacts, orders, products, and cancellations. Real-time booking management and automated workflow triggers.',
    image: '/placeholder-project.jpg',
    technologies: ['React', 'Node.js', 'HubSpot API', 'Booking System', 'Nordhost'],
  },
  {
    id: '8',
    title: 'Telegram Integration',
    description: 'Embedded Telegram inside HubSpot CRM for seamless communication. Generates deal-based Telegram groups automatically to streamline collaboration across sales and business development teams.',
    image: '/placeholder-project.jpg',
    technologies: ['Telegram API', 'HubSpot API', 'Node.js', 'TypeScript', 'CRM Integration', 'Automated Workflows'],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>( null );

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map( ( project, index ) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedProject( project )}
              className="bg-card rounded-xl border border-border shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all group cursor-pointer p-5 flex flex-col min-h-[160px]"
            >
              <div className="flex-1 flex flex-col">
                <h3 className="text-base font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {project.title}
                </h3>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice( 0, 3 ).map( ( tech ) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ) )}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ) )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject( null )}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={( e ) => e.stopPropagation()}
              className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-primary/20 shadow-2xl relative"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject( null )}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-destructive hover:text-destructive-foreground transition-colors flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Project details */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                >
                  {selectedProject.title}
                </motion.h2>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-primary hover:text-primary/80 font-medium text-sm group transition-colors"
                    >
                      <span>Visit live project</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-3">Technologies and Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map( ( tech, index ) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:border-primary/40 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ) )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
