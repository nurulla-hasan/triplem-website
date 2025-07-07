"use client";

import PageLayout from "../layout/PageLayout";
import Image from "next/image";

const Collecting = () => {
  return (
    <div className="bg-content-bg">
      <PageLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:py-10">
          {/* Images section */}
          <div className="relative w-full h-[400px] md:h-[450px]">
            {/* Left image */}
            <div className="absolute md:-top-10 left-0 md:w-[340px] w-[240px] h-[240px] md:h-[340px] rounded-3xl overflow-hidden shadow-md z-10">
              <Image
                src="/images/offer1.jpg"
                alt="Working on laptop"
                fill
                sizes="(max-width: 768px) 240px, 340px"
                className="object-cover"
              />
            </div>

            {/* Right image slightly offset */}
            <div className="absolute -bottom-0 md:-bottom-10 right-0 md:right-8 w-[240px] h-[240px] md:w-[340px] md:h-[340px] rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/images/offer2.jpg"
                alt="Shopping Bag"
                fill
                sizes="(max-width: 768px) 240px, 340px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-title leading-tight">
              Seamless Shopping. <br />
              Serious Collecting.
            </h2>
            <p className="text-text-muted mt-6 text-base leading-relaxed">
              Enjoy a fast, secure, and mobile-friendly experience designed
              specifically for trading card lovers and collectors.
            </p>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Collecting;
