import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ContactForm } from '@/types';

export function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [touched, setTouched] = useState<{
    name: boolean;
    email: boolean;
    message: boolean;
  }>({ name: false, email: false, message: false });

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email': {
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return undefined;
      }
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });

    // Validate all fields
    const newErrors: typeof errors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== undefined)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/+$/, '');
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTouched({ name: false, email: false, message: false });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate on change if field has been touched
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg"
          >
            Have a question or want to work together? Drop me a message!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-br from-card/50 via-card to-card/50 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-primary/20 relative overflow-hidden"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Particle 1 */}
              <motion.div
                className="absolute w-2 h-2 bg-primary/40 rounded-full blur-sm"
                style={{ top: '15%', left: '10%' }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Particle 2 */}
              <motion.div
                className="absolute w-3 h-3 bg-purple-500/30 rounded-full blur-sm"
                style={{ top: '70%', right: '12%' }}
                animate={{
                  y: [20, -20, 20],
                  x: [10, -10, 10],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Particle 3 */}
              <motion.div
                className="absolute w-2 h-2 bg-primary/50 rounded-full blur-sm"
                style={{ top: '35%', right: '8%' }}
                animate={{
                  y: [-15, 15, -15],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Particle 4 */}
              <motion.div
                className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full blur-sm"
                style={{ bottom: '20%', left: '15%' }}
                animate={{
                  y: [10, -10, 10],
                  x: [-5, 5, -5],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Particle 5 */}
              <motion.div
                className="absolute w-2.5 h-2.5 bg-primary/35 rounded-full blur-sm"
                style={{ top: '8%', right: '30%' }}
                animate={{
                  y: [-10, 10, -10],
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Particle 6 */}
              <motion.div
                className="absolute w-2 h-2 bg-purple-500/45 rounded-full blur-sm"
                style={{ bottom: '15%', right: '25%' }}
                animate={{
                  x: [15, -15, 15],
                  y: [-8, 8, -8],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground/90">
                <span className="text-primary">✦</span> Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                whileFocus={{ scale: 1.01 }}
                className={`w-full px-5 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 font-medium ${
                  errors.name && touched.name
                    ? 'border-red-500 focus:ring-4 focus:ring-red-500/30 bg-red-50/50 dark:bg-red-950/30 shadow-lg shadow-red-500/20'
                    : 'border-border/50 focus:ring-4 focus:ring-primary/30 bg-background/50 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 focus:border-primary'
                }`}
                placeholder="Your name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground/90">
                <span className="text-primary">✦</span> Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                whileFocus={{ scale: 1.01 }}
                className={`w-full px-5 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 font-medium ${
                  errors.email && touched.email
                    ? 'border-red-500 focus:ring-4 focus:ring-red-500/30 bg-red-50/50 dark:bg-red-950/30 shadow-lg shadow-red-500/20'
                    : 'border-border/50 focus:ring-4 focus:ring-primary/30 bg-background/50 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 focus:border-primary'
                }`}
                placeholder="your.email@example.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground/90">
                <span className="text-primary">✦</span> Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={6}
                whileFocus={{ scale: 1.01 }}
                className={`w-full px-5 py-4 border-2 rounded-xl focus:outline-none resize-none transition-all duration-300 font-medium ${
                  errors.message && touched.message
                    ? 'border-red-500 focus:ring-4 focus:ring-red-500/30 bg-red-50/50 dark:bg-red-950/30 shadow-lg shadow-red-500/20'
                    : 'border-border/50 focus:ring-4 focus:ring-primary/30 bg-background/50 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10 focus:border-primary'
                }`}
                placeholder="Tell me about your project or idea..."
              />
            </motion.div>
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className={`relative z-10 p-5 rounded-xl font-medium text-center shadow-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-gradient-to-r from-green-500/20 via-green-400/20 to-green-500/20 text-green-700 dark:text-green-300 border-2 border-green-500/30'
                    : 'bg-gradient-to-r from-red-500/20 via-red-400/20 to-red-500/20 text-red-700 dark:text-red-300 border-2 border-red-500/30'
                }`}
              >
                <motion.span
                  className="flex items-center justify-center gap-2"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {submitStatus.type === 'success' ? '✓ ' : '✗ '}
                  {submitStatus.message}
                </motion.span>
              </motion.div>
            )}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary via-purple-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative z-10 group overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block"
                    >
                      ⏳
                    </motion.span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </>
                )}
              </span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
