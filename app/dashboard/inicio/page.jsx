"use client";
import React, { useEffect, useState } from "react";
import FlotingCarg from "../../componets/secciones/inicio/FlotingCard";
import Button from "../../componets/ui/Button";
import { ArrowRight } from "lucide-react";

import LeftContent from "../../componets/secciones/inicio/LeftContent";

export default function Page() {
  const [VideoComp, setVideoComp] = useState(null);


  const videoSrc =
    process.env.NEXT_PUBLIC_BG_VIDEO_URL ||
    "/videos/video_ingeneria.mp4";

  return (
      <section className="relative w-full min-h-[100svh] flex items-center py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT CONTENT (texto principal) */}
        <div className="flex flex-col gap-6">
          <LeftContent />
        </div>

        {/* VIDEO ESTÉTICO (no fondo) */}
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/15 bg-black/20 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]">
          {VideoComp ? (
            <VideoComp
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="w-full h-full aspect-video object-cover filter brightness-95 contrast-110 saturate-[1.08]"
            />
          ) : (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="w-full h-full aspect-video object-cover filter brightness-95 contrast-110 saturate-[1.08]"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
          <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
