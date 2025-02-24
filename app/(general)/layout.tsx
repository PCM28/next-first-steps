import { Navbar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
        <Navbar />
        <main className="flex flex-col items-center p-24">
          <span>Heyy World!!</span>
          { children }
        </main>
    </>
  );
}