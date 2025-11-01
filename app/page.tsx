import Image from "next/image";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
    </div>
  );
}
