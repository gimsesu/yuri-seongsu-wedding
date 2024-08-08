import Image from "next/image";
import { STUDIO_PICS } from "../assets/images";
import React from "react";

export default function GallerySection() {
  return (
    <section
      className={
        "bg-gradient-to-br from-c-1a to-c-1b py-8 px-4 border-b border-solid border-black"
      }
    >
      <div className={"max-w-[800px] mx-auto my-0"}>
        <h1 className={"mb-8"}>우리의 모습</h1>
        <div className="columns-1 gap-4">
          {STUDIO_PICS.map((pic, index) => (
            <div
              key={index}
              className="after:content group relative mb-5 block w-full cursor-auto after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Gallery photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={pic.blurDataURL}
                src={pic}
                quality={100}
                sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
