import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import LandingPageWrapper from "@/components/wrappers/LandingPageWrapper";
import Container from "@/components/common-layout/Container";
import JobDetailHeader from "@/components/pages/job-detail/JobDetailHeader";
import JobDetailBody from "@/components/pages/job-detail/JobDetailBody";
import ApplyCard from "@/components/pages/job-detail/ApplyCard";
import SimilarJobsStrip from "@/components/pages/job-detail/SimilarJobsStrip";
import { JOBS, getJobById, getSimilarJobs } from "@/constant/findJobsData";

interface JobDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return JOBS.map((job) => ({ id: job.id }));
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) notFound();

  const similarJobs = getSimilarJobs(job);

  return (
    <LandingPageWrapper>
      <Container className="pt-5 text-[13.5px] text-neutral-500 breadcrumb">
        <Link href="/find-jobs" className="text-neutral-500 hover:text-primary-600">
          Find Jobs
        </Link>{" "}
        / <span>{job.title}</span>
      </Container>

      <Container className="pt-5 pb-20 detail-wrap">
        <div className="grid grid-cols-1 min-[960px]:grid-cols-[2fr_1fr] gap-7 detail-grid">
          <div className="order-2 min-[960px]:order-1">
            <JobDetailHeader job={job} />
            <JobDetailBody job={job} />
          </div>
          <ApplyCard job={job} className="order-1 min-[960px]:order-2" />
        </div>
      </Container>

      <SimilarJobsStrip jobs={similarJobs} />
    </LandingPageWrapper>
  );
}
