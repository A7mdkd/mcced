


"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const serviceLinks = [
    { href: '/services/cargo-service', label: 'Cargo Service' },
    { href: '/services/air-freight', label: 'Air Freight' },
    { href: '/services/sea-freight', label: 'Sea Freight' },
    { href: '/services/road-freight', label: 'Road Freight' },
    { href: '/services/rail-freight', label: 'Rail Freight' },
    { href: '/services/customs', label: 'Customs' },
];

const solutionLinks = [
    { href: '/solutions/consultation', label: 'Consultation' },
    { href: '/solutions/supply-chain', label: 'Supply Chain' },
    { href: '/solutions/logistics', label: 'Logistics' },
    { href: '/solutions/business-development', label: 'Business Development' },
];

const navLinks = [
  { href: "/services", label: "Services", sublinks: serviceLinks },
  { href: "/solutions", label: "Solutions", sublinks: solutionLinks },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  // إغلاق السايد منيو عند التنقل
  const handleMobileNavClick = (href: string) => {
    setMenuOpen(false);
    window.location.href = href;
  };

  return (
    <header className="absolute top-0 z-50 w-full text-white drop-shadow-xl">
      {/* Top bar */}
      <div className="bg-gray-800/80 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto flex h-12 items-center justify-between px-4 text-sm">
          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center gap-2">
                <a href="/contact" className="hover:text-primary transition-colors">Customer Service</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild size="sm" className="bg-primary/90 hover:bg-primary shadow-md">
              <Link href="/quote" className="drop-shadow-md">Get a Quote</Link>
            </Button>
             <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex h-24 items-center justify-center px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center border-b border-white/20 pb-4">
            <nav className="flex items-center gap-8 text-lg font-medium">
                <Link href="/" className="mr-4 drop-shadow-lg">
                    <Logo />
                </Link>
                {navLinks.map((link) => (
                  link.sublinks ? (
                    <DropdownMenu key={link.href}>
                      <DropdownMenuTrigger asChild>
                        <div
                          className={cn(
                            "group transition-colors py-2 relative text-shadow-lg text-lg flex items-center cursor-pointer normal-case drop-shadow-lg",
                            pathname.startsWith(link.href) ? "text-primary" : "text-white hover:text-primary"
                          )}
                        >
                          <span>{link.label}</span>
                           <ChevronDown size={20} className="ml-1 group-hover:rotate-180 transition-transform drop-shadow-lg" />
                          <span
                              className={cn(
                                  "absolute bottom-[-18px] left-0 h-0.5 bg-primary transition-all duration-300",
                                  pathname.startsWith(link.href) ? "w-full" : "w-0 group-hover:w-full"
                              )}
                          ></span>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="drop-shadow-xl">
                        {link.sublinks.map(sublink => (
                          <DropdownMenuItem key={sublink.href} asChild>
                             <Link href={sublink.href} className="drop-shadow-md">{sublink.label}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "group transition-colors py-2 relative text-shadow-lg text-lg normal-case drop-shadow-lg",
                            pathname === link.href ? "text-primary" : "text-white hover:text-primary"
                        )}
                    >
                        <span>{link.label}</span>
                        <span
                            className={cn(
                                "absolute bottom-[-18px] left-0 h-0.5 bg-primary transition-all duration-300",
                                pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                            )}
                        ></span>
                    </Link>
                  )
                ))}
            </nav>
        </div>
        
        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex w-full justify-between items-center drop-shadow-xl">
          <Link href="/">
            <Logo />
          </Link>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <Link href="/" className="mb-6" onClick={() => handleMobileNavClick("/") }>
                <Logo />
              </Link>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  link.sublinks ? (
                     <div key={link.href}>
                        <span className={cn(
                          "text-muted-foreground font-semibold",
                           pathname.startsWith(link.href) && "text-primary"
                        )}>{link.label}</span>
                        <div className="flex flex-col space-y-2 mt-2 pl-4">
                        {link.sublinks.map(sublink => (
                            <a
                                key={sublink.href}
                                href={sublink.href}
                                className={cn(
                                "text-muted-foreground hover:text-primary",
                                pathname === sublink.href && "text-primary"
                                )}
                                onClick={() => handleMobileNavClick(sublink.href)}
                            >
                                {sublink.label}
                            </a>
                        ))}
                        </div>
                    </div>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-muted-foreground hover:text-primary",
                        pathname === link.href && "text-primary font-semibold"
                      )}
                      onClick={() => handleMobileNavClick(link.href)}
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </nav>
               <div className="mt-8">
                 <Button asChild className="w-full">
                    <a href="/quote" onClick={() => handleMobileNavClick("/quote")}>Get a Quote</a>
                 </Button>
               </div>
            </SheetContent>
          </Sheet>
        </div>
    </div>
    </header>
  );
}
