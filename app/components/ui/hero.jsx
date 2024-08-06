"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { FlipWords } from "./FlipWords";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20 font-bold text-3xl">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const words = ["Simple", "Dynamic", "Vibrant", "Interactive"];
  return (
    <div
      style={{ zIndex: 999 }}
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0"
    >
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Content Made
        <FlipWords words={words} /> <br />
      </div>
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> blog management system
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
      <div className="test"></div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const productId = product.link.split("/")[3];
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/blogs/${productId}`);
      setShowConfirmDialog(false);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const confirmDelete = () => {
    setShowConfirmDialog(true);
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
  };

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.id}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          }
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>

      {showConfirmDialog && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="mb-4">Do you really want to delete?</p>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white p-2 rounded mr-2"
            >
              Yes
            </button>
            <button
              onClick={cancelDelete}
              className="bg-gray-600 text-white p-2 rounded"
            >
              No
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};
