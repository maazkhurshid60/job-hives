"use client";

import React, { useEffect, useMemo, useState } from "react";
import LandingPageWrapper from "@/components/wrappers/LandingPageWrapper";
import Container from "@/components/common-layout/Container";
import BlogHero from "@/components/pages/blog/BlogHero";
import BlogSidebarCTA from "@/components/pages/blog/BlogSidebarCTA";
import BlogCategoryList from "@/components/pages/blog/BlogCategoryList";
import BlogCard from "@/components/cards/BlogCard";
import Pagination from "@/components/pages/shared/Pagination";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/constant/blogData";

const PAGE_SIZE = 9;

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => BLOG_CATEGORIES.map((cat) => ({ key: cat.key, label: cat.label })), []);

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      if (category !== "all" && post.categoryKey !== category) return false;
      if (query && !post.title.toLowerCase().includes(query) && !post.excerpt.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [search, category]);

  useEffect(() => {
    setPage(1);
  }, [search, category]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const pagePosts = filteredPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <LandingPageWrapper>
      <BlogHero searchValue={search} onSearchChange={setSearch} />

      <section className="py-16 section" id="blog-list">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
            <div className="flex flex-col gap-5 lg:sticky lg:top-[92px]">
              <BlogCategoryList categories={categories} activeCategory={category} onSelect={setCategory} />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-neutral-600 mb-5">
                <span className="font-bold text-neutral-900">{filteredPosts.length}</span> article
                {filteredPosts.length === 1 ? "" : "s"} found
              </p>

              {pagePosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {pagePosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 px-5 text-neutral-500 text-sm bg-neutral-0 border border-solid border-neutral-200 rounded-lg">
                   No articles match your search — try a different keyword or category.
                </div>
              )}

              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          </div>
        </Container>
      </section>

      <Container className="pb-16 blog-page-cta">
        <BlogSidebarCTA />
      </Container>
    </LandingPageWrapper>
  );
}
