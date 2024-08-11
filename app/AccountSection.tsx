"use client";
import React from "react";
import Collapsible from "../components/Collapsible";
import copyTextToClipboard from "../utils/copyToClipboard";

export default function AccountSection() {
  return (
    <section className={"py-8 px-4 border-b border-solid border-black"}>
      <div className={"max-w-[800px] my-0 mx-auto"}>
        <h1 className={"mb-4"}>멀리서 마음 전하기</h1>
        <Collapsible
          title="신랑측 계좌번호 보기"
          contents={
            <div>
              <CopyInfo />
              <Account
                bankName="농협"
                accountNo="1072-02-079576"
                name="김목중"
              />
              <Account
                bankName="농협"
                accountNo="601138-56-046470"
                name="김문자"
              />
              <Account
                bankName="카카오뱅크"
                accountNo="3333-16-3343278"
                name="김성수"
              />
            </div>
          }
        />
        <Collapsible
          title="신부측 계좌번호 보기"
          contents={
            <div>
              <CopyInfo />
              <Account
                bankName="우체국"
                accountNo="400523-02-069315"
                name="이길재"
              />
              <Account
                bankName="농협"
                accountNo="505055-51-062666"
                name="김정미"
              />
              <Account
                bankName="카카오뱅크"
                accountNo="3333-14-1723339"
                name="이유리"
              />
            </div>
          }
        />
        <div>
          축의금을 보내셨다면 알려주세요.
          <br />
          감사 인사를 드리고 싶습니다.
        </div>
      </div>
    </section>
  );
}

const CopyInfo = () => (
  <div className={"italic text-sm mb-3"}>클릭하면 계좌번호가 복사됩니다.</div>
);

const Account = ({
  bankName,
  accountNo,
  name,
}: {
  bankName: string;
  accountNo: string;
  name: string;
}) => {
  return (
    <div
      className={"flex flex-row justify-between mb-1.5"}
      onClick={() => {
        copyTextToClipboard(accountNo, () => {
          alert(`${name}님의 ${bankName} 계좌번호를 복사했습니다.`);
        });
      }}
    >
      <div className={"basis-3/25"}>{bankName}</div>
      <div>{accountNo}</div>
      <div>{name}</div>
    </div>
  );
};
