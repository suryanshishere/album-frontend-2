"use client";

import React from "react";
import HTMLFlipBook from "react-pageflip";

import IMAGES from "./images.json";

export default function PhotoAlbum() {
  return (
    <div className="p-4 sm:p-8 flex items-center justify-center h-screen">
      {/* @ts-ignore */}
      <HTMLFlipBook width={300} height={400} showCover autoSize drawShadow>
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
