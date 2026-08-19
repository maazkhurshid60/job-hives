"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Container from "@/components/common-layout/Container";
import FindJobCard from "@/components/cards/FindJobCard";
import type { JobListing } from "@/constant/findJobsData";

interface SimilarJobsStripProps {
  jobs: JobListing[];
}

// 1.5 slides visible on mobile, 2.5 at >=768px, 3.5 at >=1280px — the next card always peeks in.
// Auto-scrolls continuously; pauses on hover/touch and resumes after.
const SimilarJobsStrip: React.FC<SimilarJobsStripProps> = ({ jobs }) => {
  if (jobs.length === 0) return null;

  return (
    <section className="pt-2 pb-[88px] similar-jobs">
      <Container>
        <div className="flex items-baseline justify-between mb-5 section-head">
          <h2 className="font-heading text-[19px] text-neutral-900">Similar jobs</h2>
          <Link href="/find-jobs" className="font-body font-semibold text-sm text-neutral-700 hover:bg-neutral-100 rounded-md px-4 py-2 transition-colors duration-150">
            View all →
          </Link>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.5}
          loop={jobs.length > 3}
          autoplay={{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={800}
          breakpoints={{
            768: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3.5 },
          }}
          className="!pb-2 similar-scroll"
        >
          {jobs.map((job, i) => (
            <SwiperSlide key={job.id} className="!h-auto">
              <FindJobCard job={job} variantIndex={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default SimilarJobsStrip;
