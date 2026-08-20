"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Container from "@/components/common-layout/Container";
import SimilarWorkerCard from "@/components/pages/worker-detail/SimilarWorkerCard";
import type { WorkerListing } from "@/constant/findWorkersData";

interface SimilarWorkersStripProps {
  workers: WorkerListing[];
}

const SimilarWorkersStrip: React.FC<SimilarWorkersStripProps> = ({ workers }) => {
  if (workers.length === 0) return null;

  return (
    <section className="pt-2 pb-[88px] similar-workers">
      <Container>
        <div className="flex items-baseline justify-between mb-5 section-head">
          <h2 className="font-heading text-[19px] text-neutral-900">Similar workers</h2>
          <Link href="/find-workers" className="font-body font-semibold text-sm text-neutral-700 hover:bg-neutral-100 rounded-md px-4 py-2 transition-colors duration-150">
            View all →
          </Link>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.5}
          loop={workers.length > 3}
          autoplay={{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={800}
          breakpoints={{
            768: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3.5 },
          }}
          className="!pb-2 similar-scroll"
        >
          {workers.map((worker) => (
            <SwiperSlide key={worker.id} className="!h-auto">
              <SimilarWorkerCard worker={worker} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default SimilarWorkersStrip;
