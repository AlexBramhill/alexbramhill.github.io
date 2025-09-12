import { Footer } from "@/_components/footer";
import { Header } from "@/_components/header";

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-dvh">
      <Header />
      <main className="max-w-4xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
