"use client";

import Comments from "./comments";
import PhotoAlbum from "./photoAlbum";

export default function Home() {
  return (
    <div className="relative p-6 overflow-hidden w-full  flex flex-col justify-center items-center gap-4">
      <PhotoAlbum />
      <Comments />
    </div>
  );
}
