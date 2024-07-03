import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Page",
  description: "register page next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
