import { useState } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

// ------------------------------------------------------------------
// STEP 1: Make the form actually send emails.
// Create a free form at https://formspree.io (or Web3Forms), then paste
// your endpoint here. Until you do, the form will show a
// "not connected" error on submit.
// ------------------------------------------------------------------
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const LIMITS = { nameMin: 2, nameMax: 60, messageMin: 10, messageMax: 500 };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};

  const name = values.name.trim();
  if (!name) errors.name = "Please enter your name.";
  else if (name.length < LIMITS.nameMin)
    errors.name = `Name must be at least ${LIMITS.nameMin} characters.`;
  else if (name.length > LIMITS.nameMax)
    errors.name = `Name must be under ${LIMITS.nameMax} characters.`;

  const email = values.email.trim();
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_REGEX.test(email))
    errors.email = "That email doesn't look right. Example: name@example.com";

  const subject = values.subject.trim();
  if (!subject) errors.subject = "Please add a subject.";
  else if (subject.length < 3)
    errors.subject = "Subject must be at least 3 characters.";

  const message = values.message.trim();
  if (!message) errors.message = "Please write a message.";
  else if (message.length < LIMITS.messageMin)
    errors.message = `Message must be at least ${LIMITS.messageMin} characters.`;
  else if (message.length > LIMITS.messageMax)
    errors.message = `Message must be under ${LIMITS.messageMax} characters.`;

  return errors;
}

const fieldBase =
  "w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-white/30 " +
  "outline-none backdrop-blur-md transition-colors duration-200 ";

function Field({ label, error, touched, children }) {
  const showError = touched && error;
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/70">
        {label}
      </label>
      {children(showError)}
      <div className="min-h-[1.25rem] pt-1">
        <AnimatePresence mode="wait">
          {showError && (
            <motion.p
              key={error}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              role="alert"
              className="text-xs text-rose-400"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function inputClass(showError) {
  return (
    fieldBase +
    (showError
      ? "border-rose-500/70 focus:border-rose-400"
      : "border-white/10 focus:border-indigo-400 focus:bg-white/10")
  );
}

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "", // honeypot: real users never see or fill this
  });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [serverError, setServerError] = useState("");
  const shake = useAnimationControls();

  const errors = validate(values);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show every error at once
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(errors).length > 0) {
      shake.start({
        x: [0, -10, 10, -8, 8, -4, 4, 0],
        transition: { duration: 0.45 },
      });
      return;
    }

    // Bots fill hidden fields. Pretend it worked and send nothing.
    if (values.company) {
      setStatus("success");
      return;
    }

    if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
      setServerError(
        "The form isn't connected yet. Add your Formspree endpoint in ContactForm.jsx."
      );
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");
      setServerError("");
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "", company: "" });
      setTouched({});
    } catch {
      setServerError("Something went wrong. Please try again in a moment.");
      setStatus("error");
    }
  };

  const messageLeft = LIMITS.messageMax - values.message.length;

  return (
    <section id="contact" className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-3 text-white/50">
            Have a project or an opportunity? Send me a message.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
        >
          {/* Soft background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="relative flex flex-col items-center py-12 text-center"
              >
                <motion.svg
                  viewBox="0 0 52 52"
                  className="h-20 w-20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.circle
                    cx="26"
                    cy="26"
                    r="23"
                    className="text-emerald-400"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.path
                    d="M15 27 l8 8 l15 -16"
                    className="text-emerald-400"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  />
                </motion.svg>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  Message sent
                </h3>
                <p className="mt-2 text-white/60">
                  Thanks for reaching out. I'll reply as soon as I can.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 rounded-full border border-white/20 px-6 py-2 text-sm text-white/80 transition hover:bg-white/10"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                animate={shake}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <div className="grid gap-x-4 sm:grid-cols-2">
                  <Field label="Name" error={errors.name} touched={touched.name}>
                    {(showError) => (
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        autoComplete="name"
                        maxLength={LIMITS.nameMax + 20}
                        aria-invalid={!!showError}
                        className={inputClass(showError)}
                      />
                    )}
                  </Field>

                  <Field label="Email" error={errors.email} touched={touched.email}>
                    {(showError) => (
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@example.com"
                        autoComplete="email"
                        aria-invalid={!!showError}
                        className={inputClass(showError)}
                      />
                    )}
                  </Field>
                </div>

                <Field label="Subject" error={errors.subject} touched={touched.subject}>
                  {(showError) => (
                    <input
                      type="text"
                      name="subject"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="What is this about?"
                      aria-invalid={!!showError}
                      className={inputClass(showError)}
                    />
                  )}
                </Field>

                <Field label="Message" error={errors.message} touched={touched.message}>
                  {(showError) => (
                    <>
                      <textarea
                        name="message"
                        rows={5}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Write your message here..."
                        aria-invalid={!!showError}
                        className={inputClass(showError) + " resize-none"}
                      />
                      <p
                        className={
                          "mt-1 text-right text-xs " +
                          (messageLeft < 0 ? "text-rose-400" : "text-white/30")
                        }
                      >
                        {messageLeft} characters left
                      </p>
                    </>
                  )}
                </Field>

                {/* Honeypot: hidden from real users */}
                <input
                  type="text"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                />

                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 overflow-hidden rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-300"
                      role="alert"
                    >
                      {serverError}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={status === "sending" ? {} : { scale: 1.02 }}
                  whileTap={status === "sending" ? {} : { scale: 0.98 }}
                  className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <motion.span
                        className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
