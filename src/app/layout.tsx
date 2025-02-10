import type { Metadata } from "next";
import "@/style/globals.css";

export const metadata: Metadata = {
  title: "Posts App",
  description:
    "it's a simple app that gets some posts from a fake API ,display them and you can make some actions on them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
