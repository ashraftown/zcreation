"use client";

import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/site-content";

const initialForm = {
  name: "",
  contact: "",
  service: "",
  message: ""
};

export function ContactSection() {
  const { contact } = siteContent;
  const [formState, setFormState] = useState(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Zcreation enquiry from ${formState.name || "website visitor"}`;
    const body = [
      `Name: ${formState.name}`,
      `Phone or Email: ${formState.contact}`,
      `Service needed: ${formState.service}`,
      "",
      "Message:",
      formState.message
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="content-section contact-section" id="contact">
      <div className="contact-intro">
        <SectionHeading
          eyebrow="Contact"
          title="Start the conversation on WhatsApp, phone, email, or the enquiry form"
          description="The form opens your email app in this first release, so you can review and send the message directly."
        />
        <div className="contact-links">
          <a className="contact-pill contact-pill-primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp Zcreation
          </a>
          <a className="contact-pill" href={`tel:${contact.phone}`}>
            {contact.phone}
          </a>
          <a className="contact-pill" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
            required
          />
        </label>
        <label>
          Phone or email
          <input
            type="text"
            name="contact"
            value={formState.contact}
            onChange={(event) => setFormState((current) => ({ ...current, contact: event.target.value }))}
            required
          />
        </label>
        <label>
          Service needed
          <input
            type="text"
            name="service"
            value={formState.service}
            onChange={(event) => setFormState((current) => ({ ...current, service: event.target.value }))}
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows={6}
            value={formState.message}
            onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
            required
          />
        </label>
        <button type="submit" className="button button-primary">
          Open email draft
        </button>
      </form>
    </section>
  );
}
