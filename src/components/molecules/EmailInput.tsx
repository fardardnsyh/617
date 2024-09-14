"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormData } from "@/types";

export default function EmailInput() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const onSubmitHandler: SubmitHandler<FormData> = () => {
    if (form.current) {
      setIsSending(true);

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
          },
        )
        .then(
          () => {
            alert("Message sent successfully");
          },
          (error) => {
            alert(`Failed to send message, with error: ${error}`);
          },
        )
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  const fieldInputClassName =
    "w-full rounded-md border border-zinc-200 p-2 focus:outline-none dark:border-zinc-800";

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="grid-cols-2 gap-4 md:grid">
        <div className="mb-4">
          <label className="mb-1 block" htmlFor="name">
            Name
          </label>
          <input
            className={fieldInputClassName}
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p role="alert" className="text-red-500">
              *{(errors.name as { message: string }).message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="mb-1 block" htmlFor="email">
            Email
          </label>
          <input
            className={fieldInputClassName}
            id="email"
            type="text"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p role="alert" className="text-red-500">
              *{(errors.email as { message: string }).message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="subject">
          Subject
        </label>
        <input
          className={fieldInputClassName}
          id="subject"
          type="text"
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p role="alert" className="text-red-500">
            *{(errors.subject as { message: string }).message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="message">
          Message
        </label>
        <textarea
          className={`min-h-28 ${fieldInputClassName}`}
          id="message"
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors.message && (
          <p role="alert" className="text-red-500">
            *{(errors.message as { message: string }).message}
          </p>
        )}
      </div>
      <button
        className="w-full rounded-md bg-gradient-to-r from-emerald-200 to-cyan-400 px-4 py-3 font-bold text-white hover:from-emerald-300 hover:to-cyan-500 dark:from-emerald-300 dark:to-cyan-500 dark:text-zinc-950 dark:hover:from-emerald-200 dark:hover:to-cyan-400"
        type="submit"
        disabled={isSending || isSubmitting}
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
