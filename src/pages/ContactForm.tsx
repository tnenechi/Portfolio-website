import { useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = formRef.current;

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(() => {
        alert("Message sent!");
        form.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="w-full max-w-5xl mx-auto border rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p>
          If you'd like to make an enquiry, please feel free to get in touch,
          and I will respond as soon as possible.
        </p>
        <p>If you prefer to contact me directly, send your email to:</p>
        <p className="font-semibold break-all">adam@adamhartwig.co.uk</p>
        <p>
          Follow me on Twitter <span className="font-semibold">@ImAdamTM</span>
        </p>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block font-semibold mb-1">Name *</label>
          <input
            type="text"
            name="user_name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email *</label>
          <input
            type="email"
            name="user_email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Email Address"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Message *{" "}
            <span className="text-sm font-normal">(1000 characters)</span>
          </label>
          <textarea
            name="message"
            rows={6}
            maxLength={1000}
            className="w-full border rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Message"
            required
          />
        </div>

        <p className="text-sm italic">*</p>

        <button
          type="submit"
          className="ml-auto block px-6 py-2 border rounded-lg font-semibold shadow hover:translate-x-1 transition"
        >
          Send →
        </button>
      </form>
    </div>
  );
};
