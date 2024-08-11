"use client";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import Script from "next/script";

export default function BasicMap({ lat, lng }: { lat: number; lng: number }) {
  const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOJSKEY!}&libraries=services,clusterer,drawing&autoload=false`;

  return (
    <div>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: lat, lng: lng }}
        style={{ width: "100%", height: "20rem" }}
      >
        <MapMarker position={{ lat: lat, lng: lng }}></MapMarker>
      </Map>
    </div>
  );
}
