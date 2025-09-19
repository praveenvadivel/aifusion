"use client";

import Link from "next/link";
import {
  HeartPulse,
  Menu,
  Search,
  User,
  LayoutDashboard,
  Landmark,
  FileText,
  PlusCircle,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const mobileNavItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/schemes", icon: Landmark, label: "Schemes" },
    { href: "/report", icon: FileText, label: "Report" },
    { href: "/add-user", icon: PlusCircle, label: "Add User" },
  ];

export function Header() {
  const userAvatar = PlaceHolderImages.find((p) => p.id === 'user-avatar-1');
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {/* Desktop nav can be empty if sidebar is primary */}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <HeartPulse className="h-6 w-6 text-accent" />
              <span className="font-headline">HealthMate</span>
            </Link>
            {mobileNavItems.map(item => (
                <Link
                key={item.href}
                href={item.href}
                className={cn("flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground", pathname === item.href && "text-foreground")}
                >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              {userAvatar ? (
                  <Image
                    src={userAvatar.imageUrl}
                    width={36}
                    height={36}
                    alt={userAvatar.description}
                    data-ai-hint={userAvatar.imageHint}
                    className="rounded-full"
                  />
              ) : <User className="h-5 w-5" />}
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link href="/profile">Profile</Link></DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link href="/login">Logout</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
