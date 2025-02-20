
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import PersonalizeModal from "@/components/PersonalizeModal";
import { useRouter } from "next/navigation";

export default function ActionButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();

  const handleRSVP = () => {
    if (name) {
      router.push(`https://lu.ma/75qc0lv2?utm_source=ticketing-${name}`);
    } else {
      router.push("https://lu.ma/75qc0lv2?utm_source=ticketing");
    }
  };

  return (
    <div className="flex justify-center gap-4 mt-8">
      <Button 
        onClick={handleRSVP} 
        className="border-2 border-white text-white bg-black px-10 py-5 text-2xl font-bold transition-transform transform hover:scale-105 hover:bg-gray-800 hover:text-white"
      >
        RSVP
      </Button>
      <Button 
        onClick={() => setIsModalOpen(true)} 
        className="border-2 border-white text-white bg-black px-10 py-5 text-2xl font-bold transition-transform transform hover:scale-105 hover:bg-gray-800 hover:text-white"
      >
        Personalize Invite
      </Button>
      <PersonalizeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} setName={setName} />
    </div>
  );
}
