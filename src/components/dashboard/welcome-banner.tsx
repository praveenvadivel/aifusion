import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, PlusCircle } from "lucide-react";

type WelcomeBannerProps = {
    name: string;
}

export function WelcomeBanner({ name }: WelcomeBannerProps) {
  return (
    <div className="rounded-xl bg-gradient-to-r from-primary to-purple-700 p-6 text-primary-foreground shadow-lg">
      <h2 className="text-2xl font-bold">Welcome back, {name}!</h2>
      <p className="mt-1 text-primary-foreground/80">
        Here is your health summary. Stay proactive, stay healthy.
      </p>
      <div className="mt-4 flex gap-2">
        <Button asChild variant="secondary" className="bg-primary-foreground/20 hover:bg-primary-foreground/30 border-0 text-primary-foreground">
            <Link href="/add-user">
                <PlusCircle className="mr-2 h-4 w-4" /> Add User
            </Link>
        </Button>
        <Button asChild variant="outline" className="bg-transparent border-primary-foreground/50 hover:bg-primary-foreground/10 text-primary-foreground">
            <Link href="/report">
                <FileText className="mr-2 h-4 w-4" /> Download Report
            </Link>
        </Button>
      </div>
    </div>
  );
}
