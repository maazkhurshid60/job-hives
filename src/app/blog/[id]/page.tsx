import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import LandingPageWrapper from "@/components/wrappers/LandingPageWrapper";
import Container from "@/components/common-layout/Container";
import BlogDetailHero from "@/components/pages/blog/BlogDetailHero";
import BlogTocSidebar from "@/components/pages/blog/BlogTocSidebar";
import BlogContent from "@/components/pages/blog/BlogContent";
import BlogShareBar from "@/components/pages/blog/BlogShareBar";
import { BLOG_POSTS, getBlogById } from "@/constant/blogData";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: post.id }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = getBlogById(id);

  if (!post) notFound();

  return (
    <LandingPageWrapper>
      <BlogDetailHero post={post} />

      <Container className="pt-5 text-[13.5px] text-neutral-500 breadcrumb">
        <Link href="/blog" className="text-neutral-500 hover:text-primary-600">
          Blog
        </Link>{" "}
        / <span>{post.title}</span>
      </Container>

      <Container className="pt-5 pb-20 detail-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start detail-grid">
          <BlogTocSidebar sections={post.sections} className="order-1 lg:order-1 lg:col-span-4 xl:col-span-3" />
          <BlogContent post={post} className="order-2 lg:order-2 lg:col-span-8 xl:col-span-9" />
        </div>
      </Container>

      <Container className="pb-16 share-bar-wrap">
        <BlogShareBar />
      </Container>
    </LandingPageWrapper>
  );
}
