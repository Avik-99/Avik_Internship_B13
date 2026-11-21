import type { Metadata } from "next";
import { LoginForm } from "@/components/panel/login-form";
import { getYear } from "@/lib/year";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "Your Biddakool institution portal. Sign-in preview for administrators, teachers, students, and guardians.",
  alternates: { canonical: "/login" },
  robots: { index: false },
  openGraph: {
    title: "Sign in — Biddakool",
    description: "Access your institution’s connected Biddakool workspace.",
    url: "/login",
  },
};

// Demo sign-in (any non-empty credentials work). The year is cached at build
// time: cache components block raw `new Date()` during prerender.
export default async function LoginPage() {
  const year = await getYear();
  return <LoginForm year={year} />;
}
