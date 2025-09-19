import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">
            Enter your phone number and date of birth to sign in.
            </p>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
            href="/signup"
            className="underline underline-offset-4 hover:text-primary"
            >
            Don&apos;t have an account? Sign Up
            </Link>
        </p>
    </div>
  );
}
