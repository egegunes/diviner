"use client";

import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [above, setAbove] = useState(false);

  return (
    <div
      className="w-full"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image
        src="/pepe-mandelbrot.gif"
        alt="Pepe Mandelbrot"
        fill
        style={{ zIndex: 1 }}
      />
      <div
        style={{
          position: "fixed",
          zIndex: 2,
          width: "100%",
          height: "8rem",
        }}
        onClick={() => {
          setAbove(true);
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          zIndex: 2,
          width: "100%",
          height: "8rem",
          bottom: 0,
        }}
        onClick={() => {
          if (above) {
            alert("As above, so below. Welcome...");
            router.push("/select");
          }
        }}
      ></div>
    </div>
  );
}
