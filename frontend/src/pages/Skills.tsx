import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'JavaScript',
      'TypeScript',
      'Python',
      'C++',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '📚',
    color: 'from-indigo-500 to-blue-500',
    skills: [
      'React',
      'Node.js',
      'Express',
      'FastAPI',
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'from-cyan-500 to-teal-500',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'SQL',
    ],
  },
  {
    title: 'Real-time & Messaging',
    icon: '⚡',
    color: 'from-orange-500 to-red-500',
    skills: [
      'SignalR',
      'Event Hub',
      'Service Bus',
      'Webhooks',
      'Scheduled Jobs',
    ],
  },
  {
    title: 'Integration & APIs',
    icon: '🔄',
    color: 'from-green-500 to-teal-500',
    skills: [
      '2-way CRM Syncing',
      'REST APIs',
      'Webhook Integration',
      'API Development',
    ],
  },
  {
    title: 'Azure Services',
    icon: '☁️',
    color: 'from-blue-600 to-indigo-600',
    skills: [
      'App Service',
      'Azure Functions',
      'Cosmos DB',
      'Azure Key Vault',
      'Event Hub',
      'Service Bus',
      'SignalR',
    ],
  },
  {
    title: 'Google Cloud Platform',
    icon: '🌐',
    color: 'from-red-500 to-yellow-500',
    skills: [
      'App Engine',
      'Cloud Functions',
      'Pub/Sub',
      'Cloud Storage',
    ],
  },
  {
    title: 'Firebase Services',
    icon: '🔥',
    color: 'from-orange-600 to-yellow-600',
    skills: [
      'Firebase Functions',
      'Firebase Hosting',
      'Firebase Database',
      'Firebase Storage',
      'Vertex AI',
      'Cloud Tasks',
    ],
  },
  {
    title: 'Hosting & Deployment',
    icon: '🚀',
    color: 'from-purple-500 to-pink-500',
    skills: [
      'Firebase',
      'Heroku',
      'Vercel',
      'Nordhost',
      'Render',
      'DigitalOcean',
    ],
  },
  {
    title: 'Version Control & DevOps',
    icon: '🔧',
    color: 'from-slate-500 to-gray-600',
    skills: [
      'Git',
      'GitHub',
      'GitLab',
      'CI/CD Pipelines',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-lg mb-12"
        >
          Tools and technologies I work with
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-card/50 via-card to-card/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              {/* Subtle glow effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1), transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {category.icon}
                  </motion.span>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-purple-600/10 text-foreground/90 rounded-lg text-sm font-medium border border-primary/20 hover:border-primary/40 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
