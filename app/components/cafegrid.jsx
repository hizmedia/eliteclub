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
              src="https://res.cloudinary.com/dky6bti4g/image/upload/v1762107206/in-a-heartwarming-scene-a-professional-chef-serve-2025-01-15-16-17-03-utc_qgr4fh.jpg"
              alt="Cafe image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#F5E6D3] rounded-lg aspect-[4/3] relative overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dky6bti4g/image/upload/v1762107206/customers-of-coffee-shop-making-an-order-talking-2024-12-08-04-08-13-utc_dlqfzi.jpg"
              alt="Cafe image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Right column - 1 tall image */}
        <div className="bg-[#F5E6D3] rounded-lg relative overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dky6bti4g/image/upload/v1762107206/customers-of-coffee-shop-making-an-order-talking-2024-12-08-04-08-13-utc_dlqfzi.jpg"
            alt="Cafe image 3"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}