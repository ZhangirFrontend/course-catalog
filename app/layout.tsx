import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "University Course Catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-4 border-b p-4">
          <Link href="/">
            Home
          </Link>

          <Link href="/courses">
            Courses
          </Link>

          <Link href="/about">
            About
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
}