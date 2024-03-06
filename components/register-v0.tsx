import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function RegisterPageV0() {
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
      <main className="flex-1 flex items-center justify-center bg-white">
        <Card className="w-full max-w-md p-6 md:p-8 bg-red-50">
          <CardHeader>
            <h2 className="text-2xl font-bold tracking-tighter text-center sm:text-3xl md:text-4xl">Register</h2>
          </CardHeader>
          <CardContent>
            <input
              className="w-full p-2 mb-4 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-red-400"
              placeholder="Email Address"
            />
            <input
              className="w-full p-2 mb-4 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-red-400"
              placeholder="Password"
              type="password"
            />
            <input
              className="w-full p-2 mb-4 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-red-400"
              placeholder="Re-Enter Password"
              type="password"
            />
            <button className="w-full h-9 items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 disabled:pointer-events-none disabled:opacity-50">
              Register
            </button>
            <p className="mt-4 text-center text-gray-500">
              Already have an account?{' '}
              <Link className="font-medium text-red-600 hover:underline" href="/login">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>
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

function DropletsIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  )
}
