"use client";
import React, { useState, useRef, useEffect } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ""
  });

  // Initialize EmailJS with your public key
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Please fill in all required fields."
      });
      return;
    }

    // Set submitting state
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ""
    });

    try {
      // Using environment variables for Email.js credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

      // Validate that we have the required credentials
      if (!serviceId || !templateId) {
        throw new Error("Email.js credentials are missing. Please check your environment variables.");
      }

      // Send the email using Email.js
      if (formRef.current) {
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current
        );
      }

      // Set success state
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: "Your message has been sent successfully!"
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // Set error state
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Failed to send message. Please try again later."
      });
    }
  };
  return (
    <section id="contact" className="py-20 bg-black relative">
      <BackgroundBeams />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500">
              Get In Touch
            </h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800/50">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary-500/20 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Email</h4>
                    <p className="text-zinc-400">00a20.j50@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary-500/20 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Location</h4>
                    <p className="text-zinc-400">Raipur, Chhattisgarh, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary-500/20 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Working Hours</h4>
                    <p className="text-zinc-400">Monday - Friday, 9AM - 5PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-6 text-white">Follow Me</h3>
                <div className="flex space-x-5">
                  <a
                    href="https://github.com/repo-anuj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anuj-0-dubey-26963527b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="https://anujkidding-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                  <div className="bg-zinc-900 p-8 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>

                    <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                      {formStatus.message && (
                        <div className={`p-3 rounded-lg text-sm ${formStatus.isError ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'}`}>
                          {formStatus.message}
                        </div>
                      )}

                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">
                          Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="user_email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className={`w-full px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium rounded-lg transition-all ${formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                      >
                        {formStatus.isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : 'Send Message'}
                      </button>

                      {formStatus.isSubmitted && (
                        <div className="text-center text-sm text-green-400 mt-2">
                          Thank you for your message! I&apos;ll get back to you soon.
                        </div>
                      )}

                      {/* This is a development note - you can remove this in production */}
                      {process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && (
                        <div className="text-xs text-amber-400 mt-2 p-2 bg-amber-900/20 rounded-lg">
                          <strong>Developer Note:</strong> Email.js credentials are not set. Make sure you have created a .env.local file with your Email.js credentials.
                        </div>
                      )}
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
