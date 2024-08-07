import React from "react";
import { COLORS } from "src/assets/theme";
import Collapsible from "src/components/Collapsible";
import Section from "src/components/Section";
import copyTextToClipboard from "src/utils/copyToClipboard";

const AccountSection = () => {
  return (
    <Section
      backgroundPrimaryColor={COLORS.bg4Primary}
      backgroundSecondaryColor={COLORS.bg4Secondary}
      title="멀리서 마음 전하기"
    >
      <Collapsible
        title="신랑측 계좌번호 보기"
        contents={
          <div>
            <CopyInfo />
            <Acocunt bankName="농협" accountNo="1072-02-079576" name="김목중" />
            <Acocunt
              bankName="농협"
              accountNo="601138-56-046470"
              name="김문자"
            />
            <Acocunt
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
            <Acocunt
              bankName="우체국"
              accountNo="400523-02-069315"
              name="이길재"
            />
            <Acocunt
              bankName="농협"
              accountNo="505055-51-062666"
              name="김정미"
            />
            <Acocunt
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
    </Section>
  );
};

const CopyInfo = () => (
  <div style={{ fontSize: "0.9em", fontStyle: "italic", marginBottom: 3 }}>
    클릭하면 계좌번호가 복사됩니다.
  </div>
);

const Acocunt = ({
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
      onClick={() => {
        copyTextToClipboard(accountNo, () => {
          alert(`${name}님의 ${bankName} 계좌번호를 복사했습니다.`);
        });
      }}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
      }}
    >
      <div style={{ flexBasis: "12%" }}>{bankName}</div>
      <div>{accountNo}</div>
      <div>{name}</div>
    </div>
  );
};

export default AccountSection;
