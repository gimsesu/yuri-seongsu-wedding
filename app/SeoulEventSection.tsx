import React from "react";
import BasicMap from "./BasicMap";

export default function SeoulEventSection() {
  return (
    <section className={"py-8 px-4 border-b border-solid border-black"}>
      <div className={"max-w-[800px] mx-auto my-0"}>
        <h1 className={"mb-4"}>두 번째 장소!</h1>
        <div>가족과 친지분들을 모시고 소소한 결혼식을 올립니다.</div>
        <InfoTable />
        <BasicMap
          lat={37.522172488709955}
          lng={126.91992017913941}
          locationId={27353169}
        />
      </div>
    </section>
  );
}

const InfoTable = () => {
  return (
    <table
      className={"border-t border-solid border-black w-full mx-0 my-5 relative"}
    >
      <tbody>
        <tr className={"border-b border-solid border-black"}>
          <td
            className={
              "align-top px-0 py-4 first-of-type:font-bold first-of-type:w-1/4"
            }
          >
            언제
          </td>
          <td className={"align-top px-0 py-4"}>24년 10월 12일 토요일 12:00</td>
        </tr>
        <tr className={"border-b border-solid border-black"}>
          <td
            className={
              "align-top px-0 py-4 first-of-type:font-bold first-of-type:w-1/4"
            }
          >
            어디서
          </td>
          <td className={"align-top px-0 py-4"}>세상의 모든 아침, 여의도</td>
        </tr>
        <tr>
          <td
            className={
              "align-top px-0 py-4 first-of-type:font-bold first-of-type:w-1/4 text-sm"
            }
          >
            주소
          </td>
          <td className={"align-top px-0 py-4"}>
            서울 영등포구 여의대로 24 FKI타워 50층
          </td>
        </tr>
      </tbody>
    </table>
  );
};
