import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Seo from '../components/layout/Seo'
import PageTransition from '../components/layout/PageTransition'
import RevealText from '../components/ui/RevealText'
import Magnetic from '../components/ui/Magnetic'
import { cn } from '../lib/cn'

interface FormState {
  name: string
  email: string
  budget: string
  message: string
}

const budgets = ['< $10k', '$10k – $25k', '$25k – $50k', '$50k+']

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)

  const validate = (): boolean => {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Required'
    if (!form.email.trim()) next.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email'
    if (!form.budget) next.budget = 'Select a range'
    if (form.message.trim().length < 10)
      next.message = 'Tell us a little more (10+ characters)'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSent(true)
  }

  return (
    <PageTransition>
      <Seo
        title="Contact"
        description="Start a project with Studio Null — branding, visual identity and editorial direction."
      />
      <section className="container-x pt-32 md:pt-48">
        <p className="label mb-4">contact</p>
        <RevealText as="h1" className="font-display text-display text-paper">
          {'Start a\nProject'}
        </RevealText>

        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label mb-4">studio</p>
            <address className="not-italic text-sm leading-relaxed text-paper/80">
              91 Wythe Avenue, Floor 3<br />
              Brooklyn, NY 11249<br />
              United States
            </address>
            <div className="mt-6">
              <p className="label mb-2">email</p>
              <a
                href="mailto:hello@studionull.studio"
                className="text-sm text-paper underline underline-offset-4"
              >
                hello@studionull.studio
              </a>
            </div>
            <div className="mt-6">
              <p className="label mb-2">phone</p>
              <p className="text-sm text-paper/80">+1 212 555 0148</p>
            </div>
          </div>

          <div className="md:col-span-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                className="border border-line p-10 md:p-16"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink">
                  <Check size={20} />
                </div>
                <h2 className="font-display text-3xl uppercase tracking-tight text-paper md:text-5xl">
                  Message received
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
                  Thank you, {form.name.split(' ')[0] || 'friend'}. We read every
                  enquiry and will reply within two working days.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-8" noValidate>
                <Field
                  label="Name"
                  error={errors.name}
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  id="name"
                />
                <Field
                  label="Email"
                  type="email"
                  error={errors.email}
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  id="email"
                />

                <div>
                  <label className="label mb-3 block">Budget</label>
                  <div className="flex flex-wrap gap-3">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setForm({ ...form, budget: b })}
                        className={cn(
                          'rounded-full border px-5 py-2 text-label uppercase tracking-[0.2em] transition-colors',
                          form.budget === b
                            ? 'border-paper bg-paper text-ink'
                            : 'border-line text-paper/70 hover:text-paper'
                        )}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  {errors.budget && (
                    <p className="mt-2 text-label text-red-400">{errors.budget}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="label mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={cn(
                      'w-full resize-none border-b bg-transparent py-3 text-paper outline-none transition-colors focus:border-paper',
                      errors.message ? 'border-red-400' : 'border-line'
                    )}
                  />
                  {errors.message && (
                    <p className="mt-2 text-label text-red-400">{errors.message}</p>
                  )}
                </div>

                <div>
                  <Magnetic>
                    <button type="submit" className="pill">
                      send message →
                    </button>
                  </Magnetic>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <div className="h-24 md:h-40" />
    </PageTransition>
  )
}

interface FieldProps {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  type?: string
  error?: string
}

function Field({ label, id, value, onChange, type = 'text', error }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="label mb-2 block">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'w-full border-b bg-transparent py-3 text-paper outline-none transition-colors focus:border-paper',
          error ? 'border-red-400' : 'border-line'
        )}
      />
      {error && <p className="mt-2 text-label text-red-400">{error}</p>}
    </div>
  )
}