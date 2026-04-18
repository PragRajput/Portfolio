import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ContactForm } from '@/types';

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Required';
        if (value.trim().length < 2) return 'At least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Required';
        if (value.trim().length < 10) return 'At least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    try {
      const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/+$/, '');
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: "Message sent. I'll get back to you soon." });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTouched({ name: false, email: false, message: false });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send. Please try again.' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name as keyof typeof touched]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus({ type: null, message: '' });
  };

  const inputClass = (field: 'name' | 'email' | 'message') =>
    `w-full px-4 py-3 bg-background border rounded-lg text-sm transition-colors outline-none focus:ring-2 placeholder:text-muted-foreground/50 ${
      errors[field] && touched[field]
        ? 'border-destructive focus:ring-destructive/20'
        : 'border-border focus:border-primary focus:ring-primary/10'
    }`;

  const contacts = [
    {
      href: 'mailto:paragdev168@gmail.com',
      label: 'Email',
      value: 'paragdev168@gmail.com',
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
      href: 'https://www.linkedin.com/in/prag-dev-singh-aa65b617b',
      label: 'LinkedIn',
      value: 'Prag Dev Singh',
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    },
    {
      href: 'https://github.com/PragRajput',
      label: 'GitHub',
      value: 'PragRajput',
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
    },
  ];

  return (
    <section id="contact" className="py-16 border-t border-border">
      <div className="w-full mx-auto px-8 max-w-screen-2xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's work together</h2>
              <p className="text-muted-foreground leading-relaxed">Have a project in mind, need an integration built, or want to discuss an opportunity? I'd love to hear from you.</p>
            </div>

            <div className="space-y-3">
              {contacts.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg border border-border bg-secondary flex items-center justify-center text-muted-foreground group-hover:border-primary/40 group-hover:text-primary transition-all shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <p className="text-sm text-muted-foreground">Available for freelance & full-time roles</p>
            </div>
          </motion.div>

          {/* Right — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border border-border rounded-xl bg-card p-8 flex flex-col gap-5 items-start h-full"
          >
            <div>
              <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">Send a message</p>
              <p className="text-2xl font-bold tracking-tight mb-3">Got a project in mind?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Fill out the form and I'll get back to you within 24 hours — no fluff, just a straight conversation about what you need built.</p>
            </div>
            <div className="w-full border-t border-border pt-5 space-y-3">
              {[
                { label: 'Response time', value: 'Within 24 hours' },
                { label: 'Availability', value: 'Open to freelance & full-time' },
                { label: 'Timezone', value: 'IST (UTC+5:30)' },
              ].map(item => (
                <div key={item.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="text-foreground font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Send a Message
            </button>
          </motion.div>

        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-xl w-full max-w-lg"
            >
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <h3 className="text-base font-semibold">Send a Message</h3>
                <button onClick={closeModal} className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-secondary rounded-md">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
                <div>
                  <div className="flex justify-between mb-1.5">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    {errors.name && touched.name && <span className="text-xs text-destructive">{errors.name}</span>}
                  </div>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={inputClass('name')} placeholder="Your name" />
                </div>

                <div>
                  <div className="flex justify-between mb-1.5">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    {errors.email && touched.email && <span className="text-xs text-destructive">{errors.email}</span>}
                  </div>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={inputClass('email')} placeholder="you@example.com" />
                </div>

                <div>
                  <div className="flex justify-between mb-1.5">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    {errors.message && touched.message && <span className="text-xs text-destructive">{errors.message}</span>}
                  </div>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} rows={4} className={inputClass('message')} placeholder="Tell me about your project..." />
                </div>

                {submitStatus.type && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-sm ${submitStatus.type === 'success' ? 'text-primary' : 'text-destructive'}`}>
                    {submitStatus.message}
                  </motion.p>
                )}

                <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
