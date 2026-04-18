import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'FastAPI'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'SQL', 'Cosmos DB'],
  },
  {
    title: 'Real-time & Messaging',
    skills: ['SignalR', 'Event Hub', 'Service Bus', 'Webhooks', 'Scheduled Jobs'],
  },
  {
    title: 'Integration & APIs',
    skills: ['2-way CRM Syncing', 'REST APIs', 'Webhook Integration', 'API Development'],
  },
  {
    title: 'Azure Services',
    skills: ['App Service', 'Azure Functions', 'Azure Key Vault', 'Event Hub', 'Service Bus', 'SignalR'],
  },
  {
    title: 'Google Cloud Platform',
    skills: ['App Engine', 'Cloud Functions', 'Pub/Sub', 'Cloud Storage'],
  },
  {
    title: 'Firebase',
    skills: ['Firebase Functions', 'Firebase Hosting', 'Firestore', 'Storage', 'Vertex AI', 'Cloud Tasks'],
  },
  {
    title: 'DevOps & Deployment',
    skills: ['Git', 'GitHub', 'CI/CD', 'Vercel', 'Heroku', 'DigitalOcean', 'Render'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 border-b border-border">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-background p-6"
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-secondary text-muted-foreground rounded text-xs font-medium border border-border"
                  >
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
