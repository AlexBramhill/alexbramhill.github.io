import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-dvh ">
      <Header />
      <main className="grid place-items-center px-5 sm:px-10">{children}</main>
      <Footer />
    </div>
  );
}
