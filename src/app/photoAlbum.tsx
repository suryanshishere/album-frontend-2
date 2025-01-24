"use client";

import React from "react";
import HTMLFlipBook from "react-pageflip";

import IMAGES from "./images.json";

export default function PhotoAlbum() {
  return (
    <div className="h-full w-full absolute flex items-center justify-center ">
       {/* @ts-expect-error */}
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
