"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, X } from "lucide-react";
import { useEffect } from "react";

export type FormSubmitStatusType = "idle" | "sending" | "success" | "error";

type FormSubmitStatusProps = {
  status: FormSubmitStatusType;
  message?: string | null;
  successMessage?: string;
  variant?: "inline" | "toast";
  onDismiss?: () => void;
};

export default function FormSubmitStatus({
  status,
  message,
  successMessage = "Message sent successfully! We will get back to you soon.",
  variant = "inline",
  onDismiss,
}: FormSubmitStatusProps) {
  const displayMessage =
    status === "success"
      ? successMessage
      : status === "sending"
        ? "Sending your message..."
        : message;

  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    const timer = window.setTimeout(() => {
      onDismiss?.();
    }, status === "success" ? 6000 : 8000);

    return () => window.clearTimeout(timer);
  }, [status, onDismiss]);

  const content = (
    <AnimatePresence mode="wait">
      {status !== "idle" && displayMessage && (
        <motion.div
          key={status}
          initial={{ opacity: 0, y: variant === "toast" ? -24 : -8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: variant === "toast" ? -24 : -8, scale: 0.96 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`relative flex items-start gap-3 shadow-lg text-black !important ${
            variant === "toast"
              ? "fixed top-6 left-1/2 z-[9999] w-[min(92vw,480px)] -translate-x-1/2 rounded-2xl border px-5 py-4 text-sm font-medium"
              : "rounded-xl border px-4 py-3 text-sm font-medium"
          } ${
            status === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : status === "error"
                ? "border-red-200 bg-red-50 text-red-800"
                : "border-blue-200 bg-blue-50 text-blue-800"
          }`}
        >
          <motion.span
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.05 }}
            className="mt-0.5 shrink-0"
          >
            {status === "success" && (
              <CheckCircle2 className={`${variant === "toast" ? "h-6 w-6" : "h-5 w-5"} text-green-600`} />
            )}
            {status === "error" && (
              <AlertCircle className={`${variant === "toast" ? "h-6 w-6" : "h-5 w-5"} text-red-600`} />
            )}
            {status === "sending" && (
              <Loader2 className={`${variant === "toast" ? "h-6 w-6" : "h-5 w-5"} animate-spin text-blue-600`} />
            )}
          </motion.span>

          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.25 }}
              className="leading-relaxed"
            >
              {status === "success" && variant === "toast" && (
                <span className="mb-1 block text-base font-bold text-green-700">
                  Sent Successfully!
                </span>
              )}
              {status === "error" && variant === "toast" && (
                <span className="mb-1 block text-base font-bold text-red-700">
                  Failed to Send
                </span>
              )}
              {displayMessage}
            </motion.p>
          </div>

          {variant === "toast" && status !== "sending" && onDismiss && (
            <button
              type="button"
              onClick={onDismiss}
              className="shrink-0 rounded-full p-1 text-current/60 hover:bg-black/5 hover:text-current"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          {status === "success" && variant === "toast" && (
            <motion.span
              className="absolute bottom-0 left-0 h-1 rounded-b-2xl bg-green-500"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 6, ease: "linear" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return content;
}
