"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePanel } from "@/components/panel/provider";
import { panelCopy } from "@/lib/panel/copy";
import { startDemoSession } from "@/lib/panel/demo-session";
import { acceptsDemoCredentials } from "@/lib/panel/logic";

// Demo sign-in: any non-empty credentials work. This gate is a UI affordance,
// not authentication — see docs/24 Phase 2.
export function LoginForm({ year }: { year: number }) {
  const { t, language, setLanguage } = usePanel();
  const router = useRouter();
  const [recovery, setRecovery] = useState(false);
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const identity = String(fields.get("email") ?? "");
    const password = String(fields.get("password") ?? "");
    if (!identity.trim() || (!recovery && !acceptsDemoCredentials(identity, password))) {
      setNotice("Enter an email or username and a password.");
      return;
    }
    setLoading(true);
    setNotice("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      form.reset();
      if (recovery) {
        setNotice("Password reset is not connected yet. No reset email was sent.");
      } else {
        startDemoSession();
        router.push("/dashboard");
      }
    } catch {
      setNotice("Sign-in could not be completed. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="login-page" lang={language}>
      <div className="login-top">
        <Link href="/" className="login-home">
          <ArrowLeft size={16} />
          {t("Back to Biddakool")}
        </Link>
        <div className="language-switch">
          <Button
            variant="ghost"
            size="sm"
            aria-pressed={language === "bn"}
            onClick={() => setLanguage("bn")}
            className={language === "bn" ? "selected" : ""}
          >
            বাং
          </Button>
          <Button
            variant="ghost"
            size="sm"
            aria-pressed={language === "en"}
            onClick={() => setLanguage("en")}
            className={language === "en" ? "selected" : ""}
          >
            EN
          </Button>
        </div>
      </div>
      <div className="login-content">
        <Link href="/" aria-label="Biddakool home">
          <Brand />
        </Link>
        <span className="login-icon">
          <LockKeyhole />
        </span>
        <h1>{t(recovery ? "Forgot your password?" : "Welcome back.")}</h1>
        <p>
          {t(
            recovery
              ? "Let’s get you back to your institution."
              : "Your institution. Your connected workspace.",
          )}
        </p>
        <form onSubmit={submit} className="demo-form" noValidate>
          <label>
            {t("Email address")}
            <Input
              name="email"
              type="text"
              placeholder="you@institution.example"
              autoComplete="off"
              required
              disabled={loading}
            />
          </label>
          {!recovery && (
            <label>
              {t("Password")}
              <Input
                name="password"
                type="password"
                placeholder={t("Enter your password")}
                autoComplete="off"
                required
                disabled={loading}
              />
            </label>
          )}
          {!recovery && (
            <Button
              variant="link"
              type="button"
              onClick={() => {
                setRecovery(true);
                setNotice("");
              }}
            >
              {t("Forgot password?")}
            </Button>
          )}
          <Button size="lg" type="submit" disabled={loading}>
            {t(loading ? "Signing in…" : recovery ? "Request reset link" : "Sign in")}
            <ArrowRight />
          </Button>
          {notice && (
            <p role="status" className="login-notice">
              {t(notice)}
            </p>
          )}
        </form>
        {recovery && (
          <Button
            variant="link"
            onClick={() => {
              setRecovery(false);
              setNotice("");
            }}
          >
            <ArrowLeft />
            {t("Back to sign in")}
          </Button>
        )}
        <p className="form-note">{t(panelCopy.signInNote)}</p>
      </div>
      <span className="login-copyright">© {year} Biddakool</span>
    </main>
  );
}
