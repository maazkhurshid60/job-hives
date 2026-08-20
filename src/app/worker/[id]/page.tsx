import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import LandingPageWrapper from "@/components/wrappers/LandingPageWrapper";
import Container from "@/components/common-layout/Container";
import WorkerDetailHeader from "@/components/pages/worker-detail/WorkerDetailHeader";
import WorkerDetailBody from "@/components/pages/worker-detail/WorkerDetailBody";
import WorkerContactCard from "@/components/pages/worker-detail/WorkerContactCard";
import SimilarWorkersStrip from "@/components/pages/worker-detail/SimilarWorkersStrip";
import DemoUnlockToggle from "@/components/pages/find-workers/DemoUnlockToggle";
import { WORKERS, getWorkerById, getSimilarWorkers } from "@/constant/findWorkersData";
import { WorkerUnlockProvider } from "@/context/WorkerUnlockContext";

interface WorkerDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return WORKERS.map((worker) => ({ id: worker.id }));
}

export default async function WorkerDetailPage({ params }: WorkerDetailPageProps) {
  const { id } = await params;
  const worker = getWorkerById(id);

  if (!worker) notFound();

  const similarWorkers = getSimilarWorkers(worker);

  return (
    <WorkerUnlockProvider>
      <LandingPageWrapper>
        <Container className="pt-5 text-[13.5px] text-neutral-500 breadcrumb">
          <Link href="/find-workers" className="text-neutral-500 hover:text-primary-600">
            Find Workers
          </Link>{" "}
          / <span>{worker.name}</span>
        </Container>

        <Container className="pt-4">
          <DemoUnlockToggle />
        </Container>

        <Container className="pt-5 pb-20 detail-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7 detail-grid">
            <div className="order-2 lg:order-1">
              <WorkerDetailHeader worker={worker} />
              <WorkerDetailBody worker={worker} />
            </div>
            <WorkerContactCard worker={worker} className="order-1 lg:order-2" />
          </div>
        </Container>

        <SimilarWorkersStrip workers={similarWorkers} />
      </LandingPageWrapper>
    </WorkerUnlockProvider>
  );
}
