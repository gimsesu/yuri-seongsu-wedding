"use client";
import useKakaoLoader from "../components/use-kakao-loader";
import { Map } from "react-kakao-maps-sdk";
import React from "react";

export default function BasicMap({ x, y }: { x: number; y: number }) {
  useKakaoLoader();

  // useEffect(() => {
  //   if (rendered.current !== 0) {
  //     return;
  //   }
  //   new daum.roughmap.Lander({
  //     timestamp: "1720928602134",
  //     key: "2k29e",
  //     mapHeight: "360",
  //   }).render();
  //   rendered.current += 1;
  // }, []);

  return (
    <Map
      className={"w-full, h-80"}
      center={{ x: x, y: y }}
      level={3}
      // style={{ width: "100%", height: "360px" }}
    />
    // <div
    //   id="daumRoughmapContainer1720928602134"
    //   className="root_daum_roughmap root_daum_roughmap_landing"
    //   style={{ width: "100%" }}
    // ></div>
  );
}
