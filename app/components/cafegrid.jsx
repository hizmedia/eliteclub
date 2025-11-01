import Image from "next/image";

export default function CafeImageGrid() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-2">
        {/* Left column - 2 stacked images */}
        <div className="flex flex-col gap-2">
          <div className="bg-[#F5E6D3] rounded-lg aspect-[4/3] relative overflow-hidden">
            <Image
              src="/placeholder1.jpg"
              alt="Cafe image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#F5E6D3] rounded-lg aspect-[4/3] relative overflow-hidden">
            <Image
              src="/placeholder2.jpg"
              alt="Cafe image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Right column - 1 tall image */}
        <div className="bg-[#F5E6D3] rounded-lg relative overflow-hidden">
          <Image
            src="/placeholder3.jpg"
            alt="Cafe image 3"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}