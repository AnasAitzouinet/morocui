import type { Metadata } from "next";
import { Inter, Roboto, Forum } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Forum({
  subsets: ["latin"],

  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(inter.className, "bg-neutral-950")}>

        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        {children}

      </body>
    </html>
  );
}
