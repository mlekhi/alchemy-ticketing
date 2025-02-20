import Image from 'next/image';

export default function SponsorsSection() {
  return (
    <div className="mt-32 w-full max-w-7xl text-center space-y-16">
      <div className="flex justify-center gap-32">
        <a href="https://w5entrepreneurs.ca/" target="_blank" rel="noopener noreferrer">
          <Image src="/logos/w5.png" alt="W5 Logo" className="h-20 w-auto object-contain" width={20} height={20} />
        </a>
        <a href="https://www.momentum.place/" target="_blank" rel="noopener noreferrer">
          <Image src="/logos/momentum.png" alt="Momentum Logo" className="h-20 w-auto object-contain" width={20} height={20} />
        </a>
      </div>
      <div className="flex justify-center gap-16">
        <p>Thank you to our sponsors</p>
        <Image src="/logos/cansbridge.png" alt="Sponsor 1" className="h-16 w-auto object-contain" width={200} height={200} />
        <Image src="/logos/nucleus.png" alt="Sponsor 2" className="h-16 w-auto object-contain" width={200} height={200} />
      </div>
    </div>
  );
}
