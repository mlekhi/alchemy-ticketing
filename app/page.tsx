import Image from 'next/image';
import SplineViewer from "@/components/3DViewer";
import ActionButtons from "@/components/ActionButtons";
import Footer from "@/components/Footer";
import EventDetails from "@/components/EventDetails";
import SponsorsSection from "@/components/SponsorsSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
    <main className="flex flex-col items-center text-white min-h-screen pt-24 pb-32 space-y-24 md:pt-32 md:pb-40">
      <h1 className="text-5xl md:text-6xl text-center lowercase">You Are Warmly Invited To</h1>
        <SplineViewer />
        <ActionButtons />
        <EventDetails />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}