"use client";
import { HeroParallax } from "../components/ui/hero";
import WavyBackground from "../components/ui/WavyBackground";
import { useLocale } from "use-intl";
import Navbar from '../components/common/Navbar';
import React, { useState, useEffect } from "react";

export default function Home() {
  const locale = useLocale();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(`/api/blogs`);
        const data = await response.json();
        if (Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else {
          console.error('Fetched data is not an array:', data);
          setBlogs([]);
        }
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
        setBlogs([]);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <HeroParallax products={blogs.map(blog => ({
        title: blog.title,
        link: `/${locale}/blog/${blog._id}`,
        thumbnail: blog.thumbnail,
      }))} />

      <WavyBackground>
        <p className="text-2xl md:text-4xl lg:text-7xl dark:text-white font-bold inter-var text-center">
        Inspiring content, every day.
        </p>
      </WavyBackground>
    </>
  );
}
