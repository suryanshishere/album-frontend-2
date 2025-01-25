"use client";

import { useEffect, useState } from "react";
import Comments from "./comments";
import PhotoAlbum from "./photoAlbum";

export default function Home() {
  const [data, setData] = useState<{ message: string } | null>(null);
  useEffect(() => {
    // Call your API endpoint
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  console.log(data?.message);
  return (
    <div className="relative p-6 overflow-hidden w-full  flex flex-col justify-center items-center gap-4">
      <PhotoAlbum />
      <Comments />
    </div>
  );
}
