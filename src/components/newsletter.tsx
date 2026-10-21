"use client";

import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setStatus(valid ? "success" : "error");
    if (valid) setEmail("");
  };

  return (
    <section id="kontak" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
      <div className="neo-card rounded-3xl bg-pink p-8 text-black sm:p-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">DAPATKAN DROP DULUAN</h2>
            <p className="mt-3 font-medium">
              Daftar newsletter untuk akses awal koleksi baru dan diskon 10% pertama.
            </p>
          </div>

          <form onSubmit={submit} noValidate className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder="nama@email.com"
                aria-label="Alamat email"
                aria-invalid={status === "error"}
                className="neo-input h-14 flex-1 rounded-xl px-4 text-lg font-semibold text-black"
              />
              <button type="submit" className="neo-btn h-14 rounded-xl bg-ink px-6 font-bold text-background">
                Daftar
              </button>
            </div>
            {status === "error" && (
              <p role="alert" className="font-bold">
                Format email belum valid.
              </p>
            )}
            {status === "success" && (
              <p role="status" className="font-bold">
                Terima kasih! Cek inbox kamu.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
