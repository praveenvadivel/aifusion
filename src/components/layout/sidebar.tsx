"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  User,
  HeartPulse,
  FileText,
  PlusCircle,
  LogOut,
  Landmark,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/profile", icon: User, label: "Profile" },
  { href: "/schemes", icon: Landmark, label: "Schemes" },
  { href: "/report", icon: FileText, label: "Download Report" },
  { href: "/add-user", icon: PlusCircle, label: "Add User" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r bg-card md:flex">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-headline text-lg font-semibold text-primary">
          <HeartPulse className="h-6 w-6 text-accent" />
          <span>HealthMate</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-card-foreground/80 transition-all hover:text-primary hover:bg-secondary",
              pathname === item.href && "bg-secondary font-semibold text-primary"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-4">
         <Link
            href="/login"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-card-foreground/80 transition-all hover:text-primary hover:bg-secondary"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
      </div>
    </aside>
  );
}
