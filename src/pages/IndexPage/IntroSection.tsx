import React from "react";
import { COLORS } from "src/assets/theme";
import Section from "src/components/Section";
import styled from "@emotion/styled";

const IntroSection = () => {
  return (
    <Section
      backgroundPrimaryColor={COLORS.bg1Primary}
      backgroundSecondaryColor={COLORS.bg1Secondary}
      title={"유리 🤍 성수 결혼해요!"}
      style={{ textAlign: "center" }}
      headerStyle={{ marginTop: 32 }}
    >
      <WelcomeText>
        <p>열한 번째 가을을 맞이하며 결혼합니다.</p>

        <p>앞으로 주어진 계절들도 기대가 됩니다.</p>

        <p>서로의 고유한 빛을 지켜주며 살았습니다.</p>

        <p>그렇게 빚어낸 저희의 모습을 만나러 와 주세요.</p>
      </WelcomeText>
      <br />
      <FromInfo />
    </Section>
  );
};

const WelcomeText = styled.div`
  justify-content: center;
`;

const FromInfo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "#948630",
        gap: "5rem",
        fontWeight: 700,
        marginBottom: 32,
      }}
    >
      <div>
        김목중•김문자의 아들
        <br />
        김성수
      </div>
      <div>
        이길재•김정미의 딸
        <br />
        이유리
      </div>
    </div>
  );
};

export default IntroSection;
