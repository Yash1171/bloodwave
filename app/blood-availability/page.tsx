import BloodBanksComponent from "@/components/bloodbanks-v0";
import { DropletsIcon } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <DropletsIcon className="h-6 w-6" />
          <span className="ml-2 text-xl font-semibold">BloodWave</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Donate
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Volunteer
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Get Help
          </Link>
        </nav>
      </header>
      <div className="flex-1">
        <BloodBanksComponent />
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© Blood Bank Locator. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}