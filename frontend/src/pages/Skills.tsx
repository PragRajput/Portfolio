import { motion } from 'framer-motion';

const featured = {
  title: 'AI & Agents',
  skills: ['Claude API', 'LangGraph', 'LangChain', 'Prompt Engineering', 'Multi-Agent Pipelines', 'RAG'],
};

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'WebSockets'],
  },
  {
    title: 'Databases & Queues',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose', 'BullMQ', 'Cosmos DB'],
  },
  {
    title: 'Integration & APIs',
    skills: ['2-way CRM Syncing', 'REST APIs', 'Webhooks', 'HubSpot API', 'Zoho API', 'Salesforce API'],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: ['Azure App Service', 'Azure Functions', 'GCP Cloud Run', 'GCP Pub/Sub', 'Firebase Functions', 'Vertex AI'],
  },
  {
    title: 'DevOps & Tooling',
    skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Vercel', 'Heroku'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 border-b border-border">
      <div className="w-full mx-auto px-8 max-w-screen-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          Technologies I work with
        </motion.h2>

        {/* AI & Agents — featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mb-4 rounded-lg border border-primary/30 bg-primary/5 p-6"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">{featured.title}</p>
          <div className="flex flex-wrap gap-2">
            {featured.skills.map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-md border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Rest — 2 col grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-lg border border-border bg-card p-5"
            >
              <p className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">{category.title}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-md bg-secondary border border-border text-muted-foreground text-xs font-medium hover:text-foreground hover:border-primary/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
