"use client";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import Script from "next/script";

export default function BasicMap({
  lat,
  lng,
  locationId,
}: {
  lat: number;
  lng: number;
  locationId: number;
}) {
  const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOJSKEY!}&libraries=services,clusterer,drawing&autoload=false`;
  const MapLink = `https://map.kakao.com/link/map/${locationId}`;

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
