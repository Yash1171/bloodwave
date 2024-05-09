import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export function HomePageV0() {
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-red-50 flex justify-center text-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to BloodWave
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Connecting donors and recipients. Making a difference, one drop at a time.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 disabled:pointer-events-none disabled:opacity-50"
                  href="/blood-availability"
                >
                  Find Blood
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-200 disabled:pointer-events-none disabled:opacity-50"
                  href="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center text-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We aim to bridge the gap between blood donors and recipients, providing a platform for easy access to
                  life-saving resources.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Locate Blood Banks</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Find nearby blood banks and information about their services.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Donor Registration</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Sign up to donate and save lives. Every drop counts.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Request Blood</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Submit a request for blood and connect with donors.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Volunteer Opportunities</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Become a part of our community and help in various capacities.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-50 flex justify-center text-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Superheroes</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Meet the brave donors who have recently contributed to saving lives.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">John Doe</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Donated on Dec 15, 2023</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Jane Smith</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Donated on Dec 14, 2023</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Robert Johnson</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Donated on Dec 13, 2023</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Emily Davis</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">Donated on Dec 12, 2023</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© BloodWave. All rights reserved.</p>
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
