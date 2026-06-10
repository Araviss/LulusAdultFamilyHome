import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  contact: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setServerError(
          "Something went wrong — please call us directly at 206-372-1541."
        );
      }
    } catch {
      setServerError(
        "Something went wrong — please call us directly at 206-372-1541."
      );
    }
  };

  if (submitted) {
    return (
      <p
        style={{
          fontSize: "17px",
          color: "rgba(17,17,17,0.72)",
          lineHeight: 1.65,
        }}
      >
        Thanks. Your message was sent. We'll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Name */}
      <div style={{ marginBottom: "32px" }}>
        <label className="contact-label" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="contact-field"
          autoComplete="name"
          {...register("name", { required: "Please enter your name" })}
        />
        {errors.name && (
          <p className="contact-error">{errors.name.message}</p>
        )}
      </div>

      {/* Phone or email */}
      <div style={{ marginBottom: "32px" }}>
        <label className="contact-label" htmlFor="contact">
          Phone or email
        </label>
        <input
          id="contact"
          type="text"
          className="contact-field"
          autoComplete="email"
          {...register("contact", {
            required: "Please enter a phone number or email",
          })}
        />
        {errors.contact && (
          <p className="contact-error">{errors.contact.message}</p>
        )}
      </div>

      {/* Message */}
      <div style={{ marginBottom: "40px" }}>
        <label className="contact-label" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="contact-field"
          {...register("message", { required: "Please include a message" })}
        />
        {errors.message && (
          <p className="contact-error">{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <p
          style={{
            fontSize: "14px",
            color: "rgba(17,17,17,0.6)",
            marginBottom: "16px",
          }}
        >
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          fontWeight: 600,
          color: "#ffffff",
          background: isSubmitting
            ? "var(--color-brand-muted)"
            : "var(--color-brand-sage)",
          border: "none",
          padding: "12px 28px",
          borderRadius: "8px",
          cursor: isSubmitting ? "not-allowed" : "pointer",
          minHeight: "44px",
          transition: "background 0.2s",
        }}
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
