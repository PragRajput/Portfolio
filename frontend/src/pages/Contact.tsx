import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ContactForm } from '@/types';

export function Contact() {
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
      case 'email': {
        if (!value.trim()) return 'Required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email';
        return undefined;
      }
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

  const inputClass = (field: 'name' | 'email' | 'message') =>
    `w-full px-4 py-3 bg-secondary border rounded-md text-sm font-medium transition-colors outline-none focus:ring-2 ${
      errors[field] && touched[field]
        ? 'border-destructive focus:ring-destructive/20'
        : 'border-border focus:border-primary focus:ring-primary/20'
    }`;

  return (
    <section id="contact" className="py-24">
      <div className="w-full mx-auto px-8 max-w-screen-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        >
          Let's work together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-12"
        >
          Have a project in mind or want to discuss an opportunity? Drop me a message.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5 max-w-xl"
        >
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              {errors.name && touched.name && (
                <span className="text-xs text-destructive">{errors.name}</span>
              )}
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass('name')}
              placeholder="Your name"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              {errors.email && touched.email && (
                <span className="text-xs text-destructive">{errors.email}</span>
              )}
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass('email')}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              {errors.message && touched.message && (
                <span className="text-xs text-destructive">{errors.message}</span>
              )}
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={5}
              className={inputClass('message')}
              placeholder="Tell me about your project..."
            />
          </div>

          {submitStatus.type && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm ${submitStatus.type === 'success' ? 'text-primary' : 'text-destructive'}`}
            >
              {submitStatus.message}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
