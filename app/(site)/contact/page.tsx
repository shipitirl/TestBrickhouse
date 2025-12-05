"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                e.currentTarget.reset();
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl">
                    <h1 className="mb-6 text-center font-display text-5xl font-bold uppercase text-white sm:text-6xl">
                        Get in <span className="text-brick-500">Touch</span>
                    </h1>
                    <p className="mb-12 text-center text-lg text-cream-200/80">
                        Have a question, feedback, or want to book the banquet room? Fill
                        out the form below and we&apos;ll get back to you as soon as possible.
                    </p>

                    <div className="rounded-lg bg-charcoal-900 p-8 shadow-xl">
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                                    <Send className="h-8 w-8" />
                                </div>
                                <h3 className="mb-2 text-2xl font-bold text-white">
                                    Message Sent!
                                </h3>
                                <p className="text-cream-200/80">
                                    Thanks for reaching out. We&apos;ll be in touch shortly.
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-6 text-sm font-bold text-brick-500 hover:text-brick-400"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="text-sm font-bold uppercase tracking-wide text-cream-200/60"
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full rounded-md border border-white/10 bg-charcoal-800 px-4 py-3 text-white placeholder-white/20 focus:border-brick-500 focus:outline-none focus:ring-1 focus:ring-brick-500"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-bold uppercase tracking-wide text-cream-200/60"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full rounded-md border border-white/10 bg-charcoal-800 px-4 py-3 text-white placeholder-white/20 focus:border-brick-500 focus:outline-none focus:ring-1 focus:ring-brick-500"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="phone"
                                            className="text-sm font-bold uppercase tracking-wide text-cream-200/60"
                                        >
                                            Phone (Optional)
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            className="w-full rounded-md border border-white/10 bg-charcoal-800 px-4 py-3 text-white placeholder-white/20 focus:border-brick-500 focus:outline-none focus:ring-1 focus:ring-brick-500"
                                            placeholder="(920) 555-0123"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="inquiryType"
                                            className="text-sm font-bold uppercase tracking-wide text-cream-200/60"
                                        >
                                            Inquiry Type
                                        </label>
                                        <select
                                            id="inquiryType"
                                            name="inquiryType"
                                            className="w-full rounded-md border border-white/10 bg-charcoal-800 px-4 py-3 text-white focus:border-brick-500 focus:outline-none focus:ring-1 focus:ring-brick-500"
                                        >
                                            <option value="general">General Question</option>
                                            <option value="banquet">Banquet Room Inquiry</option>
                                            <option value="catering">Catering</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-bold uppercase tracking-wide text-cream-200/60"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className="w-full rounded-md border border-white/10 bg-charcoal-800 px-4 py-3 text-white placeholder-white/20 focus:border-brick-500 focus:outline-none focus:ring-1 focus:ring-brick-500"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex w-full items-center justify-center rounded-md bg-brick-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brick-700 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
