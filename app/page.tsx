import Image from 'next/image';
import SplineViewer from "@/components/3DViewer";
import ActionButtons from "@/components/ActionButtons";
import Footer from "@/components/Footer";
import EventDetails from "@/components/EventDetails";
import SponsorsSection from "@/components/SponsorsSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <main className="flex flex-col items-center p-16 text-white min-h-screen space-y-24">
        <h1 className="text-6xl mb-16 text-center lowercase">You Are Warmly Invited To</h1>
        <SplineViewer />
        <ActionButtons />
        <EventDetails />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}