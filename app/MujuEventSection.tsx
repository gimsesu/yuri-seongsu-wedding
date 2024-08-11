import React from "react";
import BasicMap from "./BasicMap";

export default function MujuEventSection() {
  return (
    <section className={"py-8 px-4 border-b border-solid border-black"}>
      <div className={"max-w-[800px] mx-auto my-0"}>
        <h1 className={"mb-4"}>첫 번째 장소!</h1>
        <div>
          그린가든에서 특별한 동네잔치를 엽니다.
          <br />
          누구든지 오셔서 따뜻한 밥 한 끼 드시고 가세요.
        </div>
        <InfoTable />
        <BasicMap lat={35.82795551161191} lng={127.6389739124942} />
      </div>
    </section>
  );
}

const InfoTable = () => {
  return (
    <table
      className={
        "border-t-0.5 border-solid border-black w-full mx-0 my-5 relative"
      }
    >
      <tbody>
        <tr className={"border-b-0.5 border-solid border-black"}>
          <td
            className={
              "align-top px-0 py-4 first-of-type:font-bold first-of-type:w-1/4"
            }
          >
            언제
          </td>
          <td className={"align-top px-0 py-4"}>24년 10월 05일 토요일 12:00</td>
        </tr>
        <tr className={"border-b-0.5 border-solid border-black"}>
          <td
            className={
              "align-top px-0 py-4 first-of-type:font-bold first-of-type:w-1/4"
            }
          >
            어디서
          </td>
          <td className={"align-top px-0 py-4"}>그린가든, 무주</td>
        </tr>
        <tr>
          <td
            className={
              "align-top px-0 py-4 first-of-type:font-bold first-of-type:w-1/4"
            }
          >
            주소
          </td>
          <td className={"align-top px-0 py-4"}>
            전북특별자치도 무주군 안성면 장무로 1543-4
          </td>
        </tr>
      </tbody>
    </table>
  );
};
