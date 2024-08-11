import React from "react";
import Image from "next/image";
import wedding from "public/wedding_main.jpg";

export default function MainImageSection() {
  return (
    <div className={"max-w-full relative"}>
      <Image
        className={"!relative !h-unset"}
        src={wedding}
        alt="웨딩"
        draggable={false}
        quality={100}
        priority={true}
        style={{
          objectFit: "cover",
          overflow: "hidden",
        }}
        fill={true}
      />
    </div>
  );
}
