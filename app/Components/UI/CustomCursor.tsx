"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('role') === 'button' ||
        target.closest('a') ||
        target.closest('button');

      setIsHovered(!!isClickable);

      // Check for brand green background color
      const computedStyle = window.getComputedStyle(target);
      const bgColor = computedStyle.backgroundColor;

      // Brand green: rgb(148, 203, 61)
      const brandGreenRGB = "rgb(148, 203, 61)";
      const isBrandGreen = bgColor.replace(/\s/g, "") === brandGreenRGB.replace(/\s/g, "") ||
        bgColor.replace(/\s/g, "") === "rgba(148,203,61,1)";

      setIsInverted(isBrandGreen);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-[3px] pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
        scale: isHovered ? 1.5 : 1,
        borderColor: isInverted ? "#ffffff" : "#94cb3d",
        backgroundColor: isHovered ? (isInverted ? "rgba(255, 255, 255, 0.2)" : "rgba(148, 203, 61, 0.2)") : "transparent",
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.2 },
        borderColor: { duration: 0.2 }
      }}
    >
      <div
        className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
        style={{ backgroundColor: isInverted ? "#ffffff" : "#94cb3d" }}
      />
    </motion.div>
  );
};

export default CustomCursor;
