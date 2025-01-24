"use client";

import React from "react";
import { HTMLFlipBook } from "react-pageflip";

import IMAGES from "./images.json";

export default function PhotoAlbum() {
  return (
    <div className="p-4 sm:p-8 flex items-center justify-center h-screen">
      <HTMLFlipBook
        width={600}
        height={800}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1200}
        drawShadow={true}
        maxShadowOpacity={0.5}
        showCover={true}
        useMouseEvents={true}
        className="photo-album"
      >
        {IMAGES.map((image, index) => (
          <div key={index} className="page">
            <img
              src={image.src}
              alt={image.title}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
