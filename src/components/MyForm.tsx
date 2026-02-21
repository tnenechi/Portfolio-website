import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

type formProps = {
  feedbackForm?: boolean;
};

export default function MyForm({ feedbackForm }: formProps) {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          if (form.current) {
            form.current.reset();
          }

          setIsSubmitting(false);
          toast.success("Thank you for you message!");
        },
        (error) => {
          toast.error("Something went wrong. Please try again.");
          console.log("Error sending form: ", error);
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="text-black w-1/2 mx-auto bg-white shadow-md rounded-2xl p-6 space-y-5 border border-gray-200"
    >
      {feedbackForm ? (
        <div>
          <p className="text-2xl font-semibold text-gray-800">Share Feedback</p>
          <p className="text-sm text-gray-500 mt-1">
            I appreciate your feedback to help improve my portfolio and work.
          </p>
        </div>
      ) : (
        <div>
          <p className="text-2xl font-semibold text-gray-800">
            Get in touch with Thony.
          </p>
        </div>
      )}

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="your@email.com"
          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
        />
      </div>

      <div className="space-y-2">
        {feedbackForm ? (
          <label className="block text-sm font-medium text-gray-700">
            Feedback
          </label>
        ) : (
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
        )}
        <textarea
          name="user_message"
          rows={4}
          placeholder={
            feedbackForm
              ? "Share suggestions or areas for improvement..."
              : "Your message"
          }
          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition resize-none"
        ></textarea>
      </div>

      <div
        className={`${feedbackForm ? "block" : "hidden"}  flex items-center space-x-3`}
      >
        <input
          type="checkbox"
          id="contact"
          name="user_canContact"
          value="Yes"
          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
        />
        <label htmlFor="contact" className="text-sm text-gray-700">
          May I contact you for follow-up?
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer w-full bg-black text-white font-medium py-2.5 rounded-xl hover:bg-accent active:scale-[0.98] transition"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      <Toaster />
    </form>
  );
}
