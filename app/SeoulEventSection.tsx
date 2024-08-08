import React from "react";
import BasicMap from "./BasicMap";

export default function SeoulEventSection() {
  return (
    <section
      className={
        "bg-gradient-to-br from-c-3a to-c-3b py-8 px-4 border-b border-solid border-black"
      }
    >
      <div className={"max-w-[800px] mx-auto my-0"}>
        <h1 className={"mb-8"}>두 번째 장소!</h1>
        <div>가족과 친지분들을 모시고 소소한 결혼식을 올립니다.</div>
        <InfoTable />
        <BasicMap x={482300} y={1117420} />
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
        <tr
          className={
            "first-of-type:border-b first-of-type:border-solid first-of-type:border-black"
          }
        >
          <td
            className={
              "align-top px-0 py-4 first-of-type:font-bold first-of-type:w-1/4"
            }
          >
            언제
          </td>
          <td
            className={
              "align-top px-0 py-4 first-of-type:font-bold first-of-type:w-1/4"
            }
          >
            24년 10월 12일 토요일 12:00
          </td>
        </tr>
        <tr
          className={
            "first-of-type:border-b first-of-type:border-solid first-of-type:border-black"
          }
        >
          <td
            className={
              "align-top px-0 py-4 first-of-type:font-bold first-of-type:w-1/4"
            }
          >
            어디서
          </td>
          <td
            className={
              "align-top px-0 py-4 first-of-type:font-bold first-of-type:w-1/4"
            }
          >
            세상의 모든 아침, 여의도
          </td>
        </tr>
      </tbody>
    </table>
  );
};
