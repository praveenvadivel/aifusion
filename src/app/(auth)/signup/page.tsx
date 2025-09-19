import { SignupForm } from "@/components/auth/signup-form";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">
                Enter your details below to create your HealthMate account.
            </p>
        </div>
        <SignupForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
            href="/login"
            className="underline underline-offset-4 hover:text-primary"
            >
            Already have an account? Sign In
            </Link>
        </p>
    </div>
  );
}
