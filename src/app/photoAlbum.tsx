"use client";

import React from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import IMAGES from "./images.json";

export default function PhotoAlbum() {
  return (
    <div className="h-full w-full absolute flex items-center justify-center ">
      {/* @ts-expect-error: Ignoring type error due to incompatible types from react-pageflip */}
      <HTMLFlipBook width={300} height={400} showCover autoSize drawShadow>
        {IMAGES.map((image, index) => (
          <div key={index} className="page">
            <Image
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
