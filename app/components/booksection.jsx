import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import Booking from "@/app/components/booking";

export default function ContactInfo() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="relative z-10 py-10 px-2 flex flex-col max-w-2xl mx-auto">
            <Sparkles className="text-[#F7C873] w-4 h-4 md:w-6 md:h-6 mr-auto" />
            <h2 className="font-elmessiri text-4xl md:text-6xl mb-2 font-bold px-4 py-2 text-center text-[#FAEBCD]">
              Book Your Slot!
            </h2>
            <p className="text-[#FAEBCD] text-sm md:text-base font-poppins text-center">
              Before It's Too Late
            </p>
            <Sparkles className="text-[#F7C873] w-3 h-3 md:w-6 md:h-6 ml-auto -mt-4" />
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-center ">
            <div className="w-full lg:w-auto">
              <Booking />
            </div>
            {/* Contact Details */}
            <div className="grid md:grid-cols-2 gap-6 py-10 lg:w-2/3">
              {/* Email (unchanged style) */}
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#FAEBCD]/50 transition-colors">
                <div className="bg-[#DC9A09] p-2 rounded-lg">
                  <Mail className="w-6 h-6 text-[#FAEBCD]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-elmessiri text-[#1B1B1B] mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@example.com"
                    className="text-[#1B1B1B] font-poppins"
                  >
                    hello@example.com
                  </a>
                  <p className="text-sm text-[#1B1B1B] mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Phone - adjusted to Mail style */}
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#FAEBCD]/50 transition-colors">
                <div className="bg-[#DC9A09] p-2 rounded-lg">
                  <Phone className="w-6 h-6 text-[#FAEBCD]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-elmessiri text-[#1B1B1B] mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-[#1B1B1B] font-poppins"
                  >
                    +974 7409 1133
                  </a>
                </div>
              </div>

              {/* Office - adjusted to Mail style */}
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#FAEBCD]/50 transition-colors">
                <div className="bg-[#DC9A09] p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#FAEBCD]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-elmessiri text-[#1B1B1B] mb-1">
                    Location
                  </h3>
                  <p className="text-[#1B1B1B] font-poppins">Barwa Madinatna</p>
                  <p className="text-[#1B1B1B] font-poppins mt-1">
                    Al Wakrah, Qatar
                  </p>
                </div>
              </div>

              {/* Business Hours - adjusted to Mail style */}
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#FAEBCD]/50 transition-colors">
                <div className="bg-[#DC9A09] p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-[#FAEBCD]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-elmessiri text-[#1B1B1B] mb-1">
                    Business Hours
                  </h3>
                  <p className="text-sm text-[#1B1B1B] font-poppins">
                    Sunday - Wednesday: 10am - 12am
                  </p>
                  <p className="text-sm text-[#1B1B1B] font-poppins mt-1">
                    Thursday - Saturday: 10am - 1am
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
