"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AuthSlidingPanelProps {
  leftForm: React.ReactNode;
  rightForm: React.ReactNode;
  leftOverlayTitle: string;
  leftOverlayText: string;
  leftOverlayButtonText: string;
  rightOverlayTitle: string;
  rightOverlayText: string;
  rightOverlayButtonText: string;
}

export function AuthSlidingPanel({
  leftForm,
  rightForm,
  leftOverlayTitle,
  leftOverlayText,
  leftOverlayButtonText,
  rightOverlayTitle,
  rightOverlayText,
  rightOverlayButtonText,
}: AuthSlidingPanelProps) {
  // isRightActive = true -> User is interacting with the form on the Right (Responsável)
  // isRightActive = false -> User is interacting with the form on the Left (Terapeuta)
  const [isRightActive, setIsRightActive] = useState(true);

  return (
    <div className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
      
      {/* Forms Container */}
      <div className="relative w-full flex flex-row lg:grid lg:grid-cols-2">
        {/* Left Form (Terapeuta) */}
        <div
          className={`w-full flex-shrink-0 flex flex-col items-center justify-center p-6 py-10 lg:p-12 transition-all duration-700 ease-in-out z-10 ${
            isRightActive
              ? "-translate-x-full opacity-0 pointer-events-none lg:translate-x-0 lg:opacity-100 lg:pointer-events-auto"
              : "translate-x-0 opacity-100 pointer-events-auto"
          }`}
        >
          {leftForm}
        </div>

        {/* Right Form (Responsável) */}
        <div
          className={`w-full flex-shrink-0 flex flex-col items-center justify-center p-6 py-10 lg:p-12 transition-all duration-700 ease-in-out z-10 ${
            isRightActive
              ? "-translate-x-full opacity-100 pointer-events-auto lg:translate-x-0"
              : "translate-x-0 opacity-0 pointer-events-none lg:translate-x-0 lg:opacity-100 lg:pointer-events-auto"
          }`}
        >
          {rightForm}
        </div>
      </div>

      {/* Overlay Container (Desktop only - mobile usually hides overlay or stacks it) */}
      <motion.div
        className="hidden lg:block absolute top-0 left-0 w-1/2 h-full bg-primary z-30 overflow-hidden shadow-2xl rounded-tl-[2rem] rounded-bl-[2rem]"
        initial={false}
        animate={{
          x: isRightActive ? "0%" : "100%",
          borderTopLeftRadius: isRightActive ? "2rem" : "0",
          borderBottomLeftRadius: isRightActive ? "2rem" : "0",
          borderTopRightRadius: isRightActive ? "0" : "2rem",
          borderBottomRightRadius: isRightActive ? "0" : "2rem",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.8 }}
      >
        {/* We use an absolute background element that spans 200% width so its background can shift conversely to avoid moving with the panel container */}
        <div className="absolute inset-0 w-full h-full text-white bg-gradient-to-br from-[#89B5C4] to-[#355979] overflow-hidden">
          
          {/* Decorative Waves imitating prototypes */}
          <div className="absolute inset-0 opacity-70">
            <svg viewBox="0 0 500 700" preserveAspectRatio="none" className="w-full h-full drop-shadow-2xl">
              <path fill="#6CA1B0" d="M0 0 C 150 200, 350 150, 500 350 C 350 550, 150 500, 0 700 Z" />
              <path fill="#355979" opacity="0.8" d="M500 0 C 350 200, 150 150, 0 350 C 150 550, 350 500, 500 700 Z" />
              <path fill="#2A4860" opacity="0.6" d="M0 200 C 200 300, 300 400, 500 500 L 500 700 L 0 700 Z" />
              <path fill="#F28A25" opacity="0.1" d="M500 200 C 300 300, 200 400, 0 500 L 0 700 L 500 700 Z" />
            </svg>
          </div>

          <div className="relative w-full h-full">
            {/* Left Overlay Content (Visible when isRightActive is true) */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
              initial={false}
              animate={{
                x: isRightActive ? 0 : "-20%",
                opacity: isRightActive ? 1 : 0,
                pointerEvents: isRightActive ? "auto" : "none"
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-sans">{leftOverlayTitle}</h2>
              <p className="mb-8">{leftOverlayText}</p>
              <button
                type="button"
                onClick={() => setIsRightActive(false)}
                className="px-10 py-3 bg-white text-primary text-sm font-bold uppercase rounded-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {leftOverlayButtonText}
              </button>
            </motion.div>

            {/* Right Overlay Content (Visible when isRightActive is false) */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
              initial={false}
              animate={{
                x: isRightActive ? "20%" : 0,
                opacity: isRightActive ? 0 : 1,
                pointerEvents: isRightActive ? "none" : "auto"
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-sans">{rightOverlayTitle}</h2>
              <p className="mb-8">{rightOverlayText}</p>
              <button
                type="button"
                onClick={() => setIsRightActive(true)}
                className="px-10 py-3 bg-white text-primary text-sm font-bold uppercase rounded-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {rightOverlayButtonText}
              </button>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Mobile Toggle Button (Visible only on small screens since overlay is hidden) */}
      <div className="lg:hidden absolute bottom-4 left-0 w-full flex justify-center z-50">
        <button
          onClick={() => setIsRightActive(!isRightActive)}
          className="text-sm font-semibold underline text-primary mt-4 bg-white/80 p-2 rounded cursor-pointer"
        >
          {isRightActive ? "Ir para Terapeuta" : "Ir para Responsável"}
        </button>
      </div>

    </div>
  );
}
