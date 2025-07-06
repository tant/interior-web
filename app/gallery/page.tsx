import React from 'react';
import Image from 'next/image';

const GalleryPage = () => {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/bathroom.jpg"
            alt="Bathroom interior"
            width={400}
            height={300}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/gallery2.jpg"
            alt="Gallery room 2"
            width={400}
            height={300}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/gallery.jpg"
            alt="Gallery main view"
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/swiper1.jpg"
            alt="Bathroom interior"
            width={400}
            height={300}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/gallery11.jpg"
            alt="Gallery room 2"
            width={400}
            height={300}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/living.jpg"
            alt="Gallery main view"
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/gallery14.jpg"
            alt="Bathroom interior"
            width={400}
            height={300}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/gallery15.jpg"
            alt="Gallery room 2"
            width={400}
            height={300}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/gallery12.jpg"
            alt="Gallery main view"
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/gallery7.jpg"
            alt="Bathroom interior"
            width={400}
            height={300}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/gallery11.jpg"
            alt="Gallery room 2"
            width={400}
            height={300}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/image/gallery3.jpg"
            alt="Gallery main view"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
