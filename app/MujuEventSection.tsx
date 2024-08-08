import React from "react";
import BasicMap from "./BasicMap";

export default function MujuEventSection() {
  return (
    <section
      className={
        "bg-gradient-to-br from-c-3a to-c-3b py-8 px-4 border-b border-solid border-black"
      }
    >
      <div className={"max-w-[800px] mx-auto my-0"}>
        <h1 className={"mb-8"}>첫 번째 장소!</h1>
        <div>
          그린가든에서 특별한 동네잔치를 엽니다.
          <br />
          누구든지 오셔서 따뜻한 밥 한 끼 드시고 가세요.
        </div>
        <InfoTable />
        <BasicMap x={644345} y={647867} />
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
            24년 9월 28일 토요일 12:00
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
            그린가든, 무주
          </td>
        </tr>
      </tbody>
    </table>
  );
};
