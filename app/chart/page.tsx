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
    <div className="container mx-auto my-10 flex-1">
        <table className="w-full mx-auto">
            <tr className="title">
                <th>S.No.</th>
                <th>Affiliated blood banks</th>
                <th>State</th>
                <th>City</th>
                <th>Pincode</th>
                <th>Contact</th>
                <th>Mobile</th>
            </tr>
            <tr>
                <td>1</td>
                <td>District Hospital Blood Bank</td>
                <td>Madhya Pradesh</td>
                <td>Sehore</td>
                <td>466001</td>
                <td>07562 226737</td>
                <td>9425650196</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Chirayu Medical College and Hospital Blood Bank</td>
                <td>Madhya Pradesh</td>
                <td>Bhopal</td>
                <td>462030</td>
                <td> 0755 6679000,<br />0755 6679101,<br />0755 6679102,<br />0755 6679103</td>
                <td>776679132</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Gandhi Medical College Blood Bank</td>
                <td>Madhya Pradesh</td>
                <td>Bhopal</td>
                <td>462001</td>
                <td>0755 4050148</td>
                <td>9425010647</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Indian Red7091 Cross Society(IIRS)Blood Bank</td>
                <td>Madhya Pradesh</td>
                <td>Bhopal</td>
                <td>462016</td>
                <td>0755 2526108</td>
                <td>9303132652</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Chirayu Health and Medicare Blood Bank Malipura</td>
                <td>Madhya Pradesh</td>
                <td>Bhopal</td>
                <td>462001</td>
                <td>0755 2737401,<br />0755 2737402,<br /> 0755 2737403</td>
                <td>9303132652</td>
            </tr>
            <tr>
                <td>6</td>
                <td>City Blood Bank of Bhojpal Chaitable Trust</td>
                <td>Madhya Pradesh</td>
                <td>Bhopal</td>
                <td>462046</td>
                <td> </td>
                <td>9425438695</td>
            </tr>
            <tr>
                <td>7</td>
                <td>JK Hospital and Medical Research Centre Blood Bank </td>
                <td>Madhya Pradesh</td>
                <td>Bhopal</td>
                <td>462042</td>
                <td>0755 40870000</td>
                <td>NA</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Manas Blood Bank of Chinmayi Swasthya Seva Sadhbgav Shikshan Samiti</td>
                <td>Madhya Pradesh</td>
                <td>Bhopal</td>
                <td>462001</td>
                <td>0755 4250909</td>
                <td>9993914499</td>
            </tr>
            <tr>
                <td>9</td>
                <td>RKDF Medical College Hospital and Research Centre Blood Bank</td>
                <td>Madhya Pradesh</td>
                <td>Bhopal</td>
                <td>462026</td>
                <td>0755 6710300</td>
                <td>NA</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Bansal Hospital</td>
                <td>Madhya Pradesh</td>
                <td>Bhopal</td>
                <td>462016</td>
                <td>0755 70866000,<br /> 0755 4086099</td>
                <td>7898301792</td>
            </tr>
        </table>
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
